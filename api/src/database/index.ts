import supabase from './supabase';

const DB = {
  auth: supabase.auth,
  from: supabase.from,
};

export default DB;
