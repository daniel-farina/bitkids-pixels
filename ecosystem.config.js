module.exports = {
    apps : [{
      name      : 'bitkids-pixels',
      script    : 'server.js',
      instances : 'max',
      exec_mode : 'cluster',
      watch     : true,
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }]
  };
  