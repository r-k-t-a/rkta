export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'packages/ui/src/Provider/Provider.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "packages-ui-src-provider-provider" */ 'packages/ui/src/Provider/Provider.mdx'
    ),
}
