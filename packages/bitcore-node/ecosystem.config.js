module.exports = {
  apps : [{
    name: 'bitcore-node',
    script: 'build/src/server.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: 'develop'
    },
    env_production: {
      NODE_ENV: 'production',
    },
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
};
