const {
  validateSignupData,
  validateLoginData,
} = require("../util/validator.js");
const firebase = require("firebase");
const { db, admin } = require("../util/admin");

const config = require("../util/config.js");
firebase.initializeApp(config);

exports.signupUser = (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  const { valid, errors } = validateSignupData(userData);

  if (!valid) {
    return res.status(400).json({ errors });
  }

  let token, userId;

  db.doc(`/users/${userData.username}`)
    .get()
    .then((user) => {
      if (user.exists) {
        errors.username = "This username is already taken";
        return res.status(400).json({ errors });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(userData.email, userData.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((tokenn) => {
      token = tokenn;

      return db.doc(`/users/${userData.username}`).set({
        imageUrl: "",
        createdAt: new Date().toISOString(),
        username: userData.username,
        email: userData.email,
        userId,
        bio: "",
        postCount: 0,
        followerCount: 0,
      });
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      if ((err.code = "auth/email-already-in-use")) {
        errors.email = "This email is already taken";
        return res.status(400).json({ errors });
      }
      return res.status(500).json({ errors: err.code });
    });
};

exports.loginUser = (req, res) => {
  const userData = {
    usernameOrEmail: req.body.usernameOrEmail,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(userData);

  if (!valid) {
    return res.status(400).json({ errors });
  }

  let email;

  db.doc(`/users/${userData.usernameOrEmail}`)
    .get()
    .then((user) => {
      if (user.exists) {
        return (email = user.data().email);
      } else {
        return (email = userData.usernameOrEmail);
      }
    })
    .then((email) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, userData.password)
        .then((data) => {
          return data.user.getIdToken();
        })
        .then((token) => {
          return res.json({ token });
        })
        .catch((err) => {
          if (
            err.code === "auth/user-not-found" ||
            err.code === "auth/wrong-password"
          ) {
            return res.status(500).json({ Invalid: "Username or password" });
          } else {
            return res.status(501).json({ error: err.message });
          }
        });
    });
};
