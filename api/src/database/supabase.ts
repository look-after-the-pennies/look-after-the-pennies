import { createClient } from '@supabase/supabase-js';
import dotEnv from '../config/dotenv';

const options = {};

// Create a single supabase client for interacting with your database
const supabase = createClient(
	dotEnv.SUPABASE_URL,
	dotEnv.SUPABASE_KEY,
	options
);

export default supabase;
