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
      test: {
        Row: {
          id: number;
          created_at: string | null;
          test: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          test?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          test?: string | null;
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

