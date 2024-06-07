/** @type {import('next').NextConfig} */
const nextConfig = {}
env: {  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
        SUPABASE_URL:process.env.SUPABASE_URL  }
module.exports = nextConfig
