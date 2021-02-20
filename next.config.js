/**
 * NEXT CONFIG SETTINGS
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = {
  /* config options here */
  basePath: '', // default base path: `/`

  /** 
   * https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions
   */
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],

  /**
   * https://nextjs.org/docs/api-reference/next.config.js/compression
   */
  compress: process.env.NODE_ENV === 'production',

  /** Place any server-only runtime config under serverRuntimeConfig */
  serverRuntimeConfig: {},
  /** Anything accessible to both client and server-side code should be under publicRuntimeConfig */
  publicRuntimeConfig: {},
  /** By default Next.js will add the x-powered-by header. To opt-out of it, disable the `poweredByHeader` */
  // poweredByHeader: false,

  /** Setting custom build dir here if necessary */
  distDir: 'build',

  /** Configuring build ID */
  // generateBuildId: async () => {
  //   return 'unqiue-build-id'
  // },

  /** React strict mode */
  reactStrictMode: true
}