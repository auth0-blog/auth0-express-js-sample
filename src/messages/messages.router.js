/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const {
  getPublicMessage,
  getProtectedMessage,
  getAdminMessage,
} = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");
const { checkPermissions } = require("../authz/check-permissions");
const { AdminMessagesPermissions } = require("./messages-permissions");

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.use(checkJwt);

messagesRouter.get("/protected-message", (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

messagesRouter.get(
  "/admin-message",
  checkPermissions(AdminMessagesPermissions.ReadAdminMessages),
  (req, res) => {
    const message = getAdminMessage();
    res.status(200).send(message);
  }
);

module.exports = {
  messagesRouter,
};
