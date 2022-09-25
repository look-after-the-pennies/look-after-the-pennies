import DB from '../database/index';
import type { Account, AccountType } from '../types/db-tables';

export default class Accounts {
  private errorHandler = (err: any) => {
    console.log(JSON.stringify(err));
    throw err;
  };

  async accountsList(): Promise<any> {
    const { data, error } = await DB.from('account_types').select(`account_type,
    accounts (
      id, account_type_id, account_name, logo
    )
  `);
    if (error) this.errorHandler(error);
    return data;
  }

  async upsertAccountType(accountType: AccountType['Insert']): Promise<any> {
    const { data, error } = await DB.from('account_types').upsert(accountType, {
      onConflict: 'account_type',
    });
    if (error) this.errorHandler(error);
    return data;
  }

  async upsertAccount(account: Account['Insert']): Promise<any> {
    const { data, error } = await DB.from('accounts').upsert(account);
    if (error) this.errorHandler(error);
    return data;
  }

  async deleteAccountType(id: number): Promise<any> {
    const { data, error } = await DB.from('account_types')
      .delete()
      .match({ id: id });
    if (error) this.errorHandler(error);
    return data;
  }

  async deleteAccount(id: string): Promise<any> {
    const { data, error } = await DB.from('accounts')
      .delete()
      .match({ id: id });
    if (error) this.errorHandler(error);
    return data;
  }
}
