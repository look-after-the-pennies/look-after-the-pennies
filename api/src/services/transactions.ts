import { expectCt } from 'helmet';
import DB from '../database/index';
import type {
  Transaction,
  TransactionCategory,
  TransactionType,
} from '../types/db-tables';
import ErrorHandler from './errors';

// TODO: Switch to delete, insert, update objects of functions

export default class Transactions {
  async get(): Promise<any> {
    try {
      const { data, error } = await DB.supabase.from('transactions').select(`
    id, account_id, transaction_type_id, transaction_category_id, transaction_timestamp, transaction_reference, additional_information, amount, manual_entry, csv_entry, auto_sync_entry, created_at,
    transaction_types (
      transaction_type
    ),
    transaction_categories (
      transaction_category, transaction_category_description, icon, default_category
    )
  `);
      console.log(data);
      if (error) ErrorHandler.dbRequest(error);
      else return data;
    } catch (err) {
      console.log('proper error');
    }
  }

  async upsertTransactionType(
    transactionType: TransactionType['Insert']
  ): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transaction_types')
      .upsert(transactionType, {
        onConflict: 'transaction_type',
      });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async upsertTransactionCategory(
    transactionCategory: TransactionCategory['Insert']
  ): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transaction_categories')
      .upsert(transactionCategory, {
        onConflict: 'transaction_category, user_id',
      });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async upsertTransaction(transaction: Transaction['Insert']): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transactions')
      .upsert(transaction);
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async deleteTransactionType(id: number): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transaction_types')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async deleteTransactionCategory(id: string): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transaction_categories')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }

  async deleteTransaction(id: string): Promise<any> {
    const { data, error } = await DB.supabase
      .from('transactions')
      .delete()
      .match({ id: id });
    if (error) ErrorHandler.dbRequest(error);
    return data;
  }
}
