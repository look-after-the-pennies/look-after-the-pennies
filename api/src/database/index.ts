import supabase from './supabase';

const DB = {
  auth: supabase.auth,
  supabase: supabase,
};

export default DB;
