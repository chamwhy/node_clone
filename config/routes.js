"use strict";

"use strict";

const users = require("./app/controller/users");

module.exports = (app, passport) => {
  //user
  app.get("/login", users.login);
  app.get("/logout", users.logout);
  app.get("/signup", users.signup);
  app.get("/delete", users.delete);
};
