// @js-check

import nextI18nextConfigJs from "./next-i18next.config.js";

// You can remove the following 2 lines when integrating our example.

import { loadCustomBuildParams } from "./next-utils.config.js";
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  i18n: nextI18nextConfigJs.i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
};

export default nextConfig;
