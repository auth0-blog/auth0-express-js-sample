/**
 * Service Methods
 */

const getPublicMessage = () => {
  return {
    message: "The API doesn't require an access token to share this message.",
  };
};

const getProtectedMessage = () => {
  return {
    message: "The API successfully validated your access token.",
  };
};

const getAdminMessage = () => {
  return {
    message: "The API successfully recognized you as an admin.",
  };
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
};
