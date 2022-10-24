import DB from '../database/index';
import type { Account, AccountType } from '../types/db-tables';
import { Session } from './../types/auth';
import ErrorHandler from './errors';

export default class Accounts {
  async get(): Promise<any> {
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

  async getTypes(): Promise<any> {
    try {
      const { data, error } = await DB.supabase
        .from('account_types')
        .select('id, account_type');
      // console.log('select data response');
      // console.log(data);
      if (error) ErrorHandler.dbRequest(error);
      else return data;
    } catch (err) {
      console.log('proper error');
    }
  }

  async upsertType(accountType: AccountType['Insert']): Promise<any> {
    const { data, error } = await DB.supabase
      .from('account_types')
      .upsert(accountType, {
        onConflict: 'account_type',
      });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async upsert(account: Account['Insert'], session: any): Promise<any> {
    console.log('got to service upsrt');
    const { data, error } = await DB.auth.setSession(session);
    console.log(data);
    console.log(error);

    const { data: d, error: e } = await DB.auth.getSession();
    console.log(d);
    console.log(e);

    const { data: data2, error: error2 } = await DB.supabase
      .from('accounts')
      .upsert(account);
    if (error2) ErrorHandler.dbRequest(error2);
    return data2;
  }

  async deleteType(id: number): Promise<any> {
    const { data, error } = await DB.supabase
      .from('account_types')
      .delete()
      .match({ id: id });
    if (error) {
      ErrorHandler.dbRequest(error);
    } else return data;
  }

  async delete(id: string): Promise<any> {
    const { data, error } = await DB.supabase
      .from('accounts')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }
}
