import type { Database } from '../types/database';

export type Account = Database['public']['Tables']['accounts'];
export type AccountType = Database['public']['Tables']['account_types'];
export type Transaction = Database['public']['Tables']['transactions'];
export type TransactionType = Database['public']['Tables']['transaction_types'];
export type TransactionCategory =
  Database['public']['Tables']['transaction_categories'];
