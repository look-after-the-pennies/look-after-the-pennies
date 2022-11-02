import type { Database } from '../types/database';
import { createClient } from '@supabase/supabase-js';
import dotEnv from '../config/dotenv';

export default function createServerDbClient(accessToken?: string) {
  return createClient<Database>(dotEnv.SUPABASE_URL, dotEnv.SUPABASE_ANON_KEY, {
    db: {
      schema: 'public',
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      // @ts-ignore
      headers: accessToken
        ? {
            Authorization: `Bearer ${accessToken}`,
          }
        : null,
    },
  });
}
