module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'apdpnu3MURkrjziidvWD9w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KwZ65NUNAcGdbzXZxuqgdg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'rSZnVPoBim/Gi9UrvUnuaQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
