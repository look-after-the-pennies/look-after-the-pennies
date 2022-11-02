import DB from '../database/index';
import type { Account, AccountType } from '../types/db-tables';
import { Session } from './../types/auth';
import ErrorHandler from './errors';
// import SessionService from './session';
// import dbClient from './database';
import createServerDbClient from './database';

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

  async test(
    account: Account['Insert'],
    refreshToken: string,
    accessToken: string
  ): Promise<any> {
    // const sessionService = new SessionService();
    console.log('got to service upsert');
    console.log(refreshToken);
    const db = createServerDbClient(accessToken);
    const u = db.auth.getUser();
    console.log(u);
    // @ts-ignore
    // const { data, error } = await DB.auth.setSession({
    //   access_token: accessToken,
    //   refresh_token: refreshToken,
    // });

    // const u = await DB.auth.getUser();
    // console.log('Has user set');
    // console.log(u);
    // console.log(data);
    // console.log(error);

    // const { data: d, error: e } = await DB.auth.getSession();
    // console.log(d);
    // console.log(e);

    const { data: data2, error: error2 } = await db
      .from('accounts')
      //@ts-ignore
      .upsert(account);
    if (error2) ErrorHandler.dbRequest(error2);
    return data2;
  }

  async upsert(
    account: Account['Insert'],
    refreshToken: string,
    accessToken: string
  ): Promise<any> {
    // const sessionService = new SessionService();
    console.log('got to service upsert');
    console.log(refreshToken);
    // @ts-ignore
    const { data, error } = await DB.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const u = await DB.auth.getUser();
    console.log('Has user set');
    console.log(u);
    // console.log(data);
    // console.log(error);

    // const { data: d, error: e } = await DB.auth.getSession();
    // console.log(d);
    // console.log(e);

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
