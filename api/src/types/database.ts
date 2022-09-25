export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      account_types: {
        Row: {
          id: number;
          account_type: string;
          active: boolean | null;
          creator_id: string;
          created_at: string;
          updated_by: string;
          updated_at: string;
        };
        Insert: {
          id?: never;
          account_type: string;
          active?: boolean | null;
          creator_id?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
        Update: {
          id?: never;
          account_type?: string;
          active?: boolean | null;
          creator_id?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
      };
      accounts: {
        Row: {
          id: string;
          user_id: string | null;
          account_type_id: number;
          account_name: string;
          logo: string | null;
          created_by: string;
          created_at: string;
          updated_by: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          account_type_id: number;
          account_name: string;
          logo?: string | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          account_type_id?: number;
          account_name?: string;
          logo?: string | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
      };
      transaction_types: {
        Row: {
          id: number;
          transaction_type: string;
          active: boolean | null;
          created_by: string;
          created_at: string;
          updated_by: string;
          updated_at: string;
        };
        Insert: {
          id?: never;
          transaction_type: string;
          active?: boolean | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
        Update: {
          id?: never;
          transaction_type?: string;
          active?: boolean | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
      };
      transaction_categories: {
        Row: {
          id: string;
          user_id: string | null;
          transaction_category: string;
          transaction_category_description: string;
          icon: string | null;
          default_category: boolean | null;
          active: boolean | null;
          created_by: string;
          created_at: string;
          updated_by: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          transaction_category: string;
          transaction_category_description: string;
          icon?: string | null;
          default_category?: boolean | null;
          active?: boolean | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          transaction_category?: string;
          transaction_category_description?: string;
          icon?: string | null;
          default_category?: boolean | null;
          active?: boolean | null;
          created_by?: string;
          created_at?: string;
          updated_by?: string;
          updated_at?: string;
        };
      };
      transactions: {
        Row: {
          id: string;
          account_id: string;
          transaction_type_id: number;
          transaction_category_id: string | null;
          transaction_timestamp: string;
          transaction_reference: string | null;
          additional_information: string | null;
          amount: number;
          manual_entry: boolean | null;
          csv_entry: boolean | null;
          auto_sync_entry: boolean | null;
          creator_id: string;
          created_at: string;
          updater_id: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          account_id: string;
          transaction_type_id: number;
          transaction_category_id?: string | null;
          transaction_timestamp?: string;
          transaction_reference?: string | null;
          additional_information?: string | null;
          amount: number;
          manual_entry?: boolean | null;
          csv_entry?: boolean | null;
          auto_sync_entry?: boolean | null;
          creator_id?: string;
          created_at?: string;
          updater_id?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          account_id?: string;
          transaction_type_id?: number;
          transaction_category_id?: string | null;
          transaction_timestamp?: string;
          transaction_reference?: string | null;
          additional_information?: string | null;
          amount?: number;
          manual_entry?: boolean | null;
          csv_entry?: boolean | null;
          auto_sync_entry?: boolean | null;
          creator_id?: string;
          created_at?: string;
          updater_id?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

