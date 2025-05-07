export default () => ({
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        landingPage: false, // disable Sandbox everywhere
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  })
