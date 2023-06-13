module.exports = {
  apps: [
    {
      name: 'my-app',
      script: 'serve',
      args: '-s build -l 3000',
      env: {
        "PM2_SERVE_PATH": "./build",
        "PM2_SERVE_PORT": 3000,
        "PM2_SERVE_SPA": "true",
        "PM2_SERVE_HOMEPAGE": "/index.html"
      },
      cwd: '/Users/stephenking/Desktop/flow-chat-app/', // replace this with the actual path
    },
  ],
};
