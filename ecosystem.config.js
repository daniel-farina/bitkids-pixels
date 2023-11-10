module.exports = {
    apps : [{
      name      : 'bitkids-pixels',
      script    : 'server.js',
      instances : 1,
      exec_mode : 'fork', // Set to 'fork' to disable cluster mode
      watch     : true,
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 5000
      }
    }]
  };
  