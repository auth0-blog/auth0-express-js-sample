const jwtAuthz = require("express-jwt-authz");

const checkPermissions = (permissions) => {
  return jwtAuthz([permissions], {
    customScopeKey: "permissions",
    checkAllScopes: true,
    failWithError: true,
  });
};

module.exports = {
  checkPermissions,
};
