-- TODO: Add 'portfolio' table so that people can have a test account and real account
-- TODO: Add audit tables that audit all actions and use table triggers to log them
-- TODO: Receipt upload table / scannning functionality

-- 1. Create trigger to update updated timestamp on update

begin;
    -- drop function if exists public.handle_row_update_global;
    create function public.handle_row_update_global() 
    returns trigger 
    language plpgsql 
    security definer set search_path = public
    as $$
    begin
    new.updated_at := timezone('utc' :: text, now());
    new.updated_by := auth.uid();
    return new;
    end;
    $$;
commit;



-- 2. Create account types table

begin;
    -- drop table if exists account_types;

    create table account_types (
        id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        account_type text not null,
        active boolean default true,
        created_by uuid not null references auth.users default auth.uid(),
        created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        updated_by uuid not null references auth.users default auth.uid(),
        updated_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        constraint account_type_length check (char_length(account_type) >= 3)
        );

    -- 3. Enable RLS & policies on account_types table
    alter table account_types enable row level security;

    create policy "Authenticated users can read account types."
        on account_types for select
        to authenticated
        using (
        true
        );

    -- 4. Trigger update function every time a row is updated
    create trigger on_account_type_updated
        after update on public.account_types
        for each row execute procedure public.handle_row_update_global();

commit;

-- 5. Create a table for financial accounts

begin;
    -- drop table if exists accounts;

    create table accounts (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        user_id uuid references auth.users default auth.uid(),
        account_type_id int references account_types not null,
        account_name text not null,
        logo text null,
        opening_balance numeric(20,2) not null,
        date_started date not null,
        created_by uuid not null references auth.users default auth.uid(),
        created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        updated_by uuid not null references auth.users default auth.uid(),
        updated_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        constraint account_name_length check (char_length(account_name) >= 3)
        );

    -- 6. Enable RLS & policies on accounts table
    alter table accounts enable row level security;

    create policy "Accounts can be selected by the user that created them"
        on accounts
        for select using (
            auth.uid() = user_id
            );

    create policy "Accounts can be updated by the user that created them"
        on accounts
        for update using (
            auth.uid() = user_id
            );

    -- 7. Trigger update function every time a row is updated
    create trigger on_accounts_updated
        after update on public.accounts
        for each row execute procedure public.handle_row_update_global();

commit;

-- 8. Create Transaction Types table

begin;
    -- drop table if exists transaction_types;

    create table transaction_types (
        id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        transaction_type text not null,
        active boolean default true,
        created_by uuid not null references auth.users default auth.uid(),
        created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        updated_by uuid not null references auth.users default auth.uid(),
        updated_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        constraint transaction_type_length check (char_length(transaction_type) >= 3)
        );

    -- 9. Enable RLS & policies on transaction_types table
    alter table transaction_types enable row level security;

    create policy "Authenticated users can read transaction types."
        on transaction_types for select
        to authenticated
        using (
            true
        );

    -- 10. Trigger update function every time a row is updated
    create trigger on_transaction_type_updated
        after update on public.transaction_types
        for each row execute procedure public.handle_row_update_global();

commit;

-- 11. Create Transaction Category table

begin;
    -- drop table if exists transaction_categories;

    create table transaction_categories (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        user_id uuid references auth.users default auth.uid(),
        transaction_category text not null,
        transaction_category_description text not null,
        icon text null,
        default_category boolean default false,
        active boolean default true,
        created_by uuid not null references auth.users default auth.uid(),
        created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        updated_by uuid not null references auth.users default auth.uid(),
        updated_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        constraint transaction_category_length check (char_length(transaction_category) >= 3)

    );

    -- 12. Enable RLS & policies on transaction_categories table
    alter table transaction_categories enable row level security;

    create policy "Users can read default transaction categories + their own transaction categories."
        on transaction_categories for select using (
            auth.uid() = user_id
            or default_category is true
        );

    create policy "Users can update their own transaction categories."
        on transaction_categories for update using (
            auth.uid() = user_id
        );

    -- 13. Trigger update function every time a row is updated
    create trigger on_transaction_category_updated
        after update on public.transaction_categories
        for each row execute procedure public.handle_row_update_global();

  commit;


-- 14. Create transactions table

begin;
    -- drop table if exists transactions;

    create table transactions (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        account_id uuid references accounts not null,
        transaction_type_id int references transaction_types not null,
        transaction_category_id uuid references transaction_categories,
        transaction_timestamp timestamp with time zone default timezone('utc' :: text, now()) not null,
        transaction_reference text null,
        additional_information text null,
        amount numeric(20,2) not null,
        manual_entry boolean default false,
        csv_entry boolean default false,
        auto_sync_entry boolean default false,
        created_by uuid not null references auth.users default auth.uid(),
        created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
        updated_by uuid not null references auth.users default auth.uid(),
        updated_at timestamp with time zone default timezone('utc' :: text, now()) not null
    );

    -- 15. Enable RLS & policies on transactions table
    alter table transactions enable row level security;

    create policy "Users can read their own transactions."
        on transactions for select using (
            auth.uid() in (
            select user_id from public.accounts
            where account_id = id
            )
        );

    create policy "Users can update their own transactions."
        on transactions for update using (
            auth.uid() in (
            select user_id from public.accounts
            where account_id = id
            )
        );

    -- 16. Trigger update function every time a row is updated
    create trigger on_transactions_updated
        after update on public.transactions
        for each row execute procedure public.handle_row_update_global();

commit;

-- Set up Realtime!
begin;
    drop publication if exists supabase_realtime;
    create publication supabase_realtime;
commit;


