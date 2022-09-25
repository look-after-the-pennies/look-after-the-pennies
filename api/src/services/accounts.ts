import DB from '../database/index';
import type { Account, AccountType } from '../types/db-tables';
import ErrorHandler from './errors';

export default class Accounts {
  async accountsList(): Promise<any> {
    try {
      const { data, error } = await DB.supabase.from('account_types').select(`
    account_type,
    accounts (
      id, account_type_id, account_name, logo, created_at
    )
  `);
      console.log('select data response');
      console.log(data);
      if (error) ErrorHandler.dbRequest(error);
      else return data;
    } catch (err) {
      console.log('proper error');
    }
  }

  async upsertAccountType(accountType: AccountType['Insert']): Promise<any> {
    const { data, error } = await DB.supabase
      .from('account_types')
      .upsert(accountType, {
        onConflict: 'account_type',
      });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async upsertAccount(account: Account['Insert']): Promise<any> {
    const { data, error } = await DB.supabase.from('accounts').upsert(account);
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async deleteAccountType(id: number): Promise<any> {
    const { data, error } = await DB.supabase
      .from('account_types')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async deleteAccount(id: string): Promise<any> {
    const { data, error } = await DB.supabase
      .from('accounts')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }
}
