"use strict";

const users = require("./app/controller/users");

const fail = {
  fialureRedirect: "/login",
};

module.exports = (app, passport) => {
  const pauth = passport.authenticate.bind(passport);
  //user
  app.get("/login", users.login);
  app.get("/logout", users.logout);
  app.get("/signup", users.signup);
  app.get("/delete", users.delete);
  app.post("/users", users.create);
  app.post(
    "/users/session",
    pauth("local", {
      failureRedirect: "/login",
      failureFlash: "Invaid email or password.",
    }),
    users.session
  );
  app.get("/users/:userID", users.show);
  app.get("/auth/github", pauth("github", fail), users.signin);
  app.get("/auth/github/callback", pauth("github", fail), users.authCallback);
  app.get("/auth/twitter", pauth("twitter", fail), users.signin);
  app.get("/auth/twitter/callback", pauth("twitter", fail), users.authCallback);
  app.get(
    "/auth/google",
    pauth("google", {
      failureRedirect: "/login",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    }),
    users.signin
  );
  app.get("/auth/google/callback", pauth("google", fail), users.authCallback);
  app.param("userId", users.load);

  // article routes
  app.param("id", articles.load);
  app.get("/articles", articles.index);
  app.get("/articles/new", auth.requiresLogin, articles.new);
  app.post("/articles", auth.requiresLogin, articles.create);
  app.get("/articles/:id", articles.show);
  app.get("/articles/:id/edit", articleAuth, articles.edit);
  app.put("/articles/:id", articleAuth, articles.update);
  app.delete("/articles/:id", articleAuth, articles.destroy);
};
