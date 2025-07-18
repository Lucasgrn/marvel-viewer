import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[new URL('http://i.annihil.us/u/prod/marvel/i/mg/**')]
  }
};

export default nextConfig;
