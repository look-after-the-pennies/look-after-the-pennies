function getEnvVar(v: string): string {
  const ret = process.env[v];
  if (ret === undefined) {
    throw new Error('process.env.' + v + ' is undefined!');
  }
  return ret;
}

const dotenv: Record<string, string> = {
  HOSTNAME: getEnvVar('HOSTNAME'),
  PORT: getEnvVar('PORT'),
  NODE_ENV: getEnvVar('NODE_ENV'),
  WEB_DOMAIN: getEnvVar('WEB_DOMAIN'),
  API_DOMAIN: getEnvVar('API_DOMAIN'),
  SUPABASE_URL: getEnvVar('SUPABASE_URL'),
  SUPABASE_KEY: getEnvVar('SUPABASE_KEY'),
  SUPABASE_REST: getEnvVar('SUPABASE_REST'),
};

export default dotenv;
