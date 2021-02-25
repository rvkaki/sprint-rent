module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  emitErrors: false,
  url: env('PUBLIC_URL', 'https://api.example.com'),
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8f44d6d506cb1379885e5f508b34ab5d'),
    },
    url: env('PUBLIC_ADMIN_URL', '/admin'),
    host: 'localhost', // Only used for --watch-admin
    port: 8003, // Only used for --watch-admin
    serveAdminPanel: env.bool('SERVE_ADMIN', true),
  },
});
