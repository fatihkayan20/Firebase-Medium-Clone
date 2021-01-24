// API configs

const functions = require("firebase-functions");
const app = require("express")(); // npm i express

const cors = require("cors");
app.use(cors());

const { signupUser, loginUser } = require("./views/UserView.js");
const {
  createPost,
  getAllPosts,
  getTrendingPosts,
  getPostDetails,
} = require("./views/PostView.js");
const MainMiddleware = require("./util/MainMiddleware");

app.get("/", (req, res) => {
  return res.json({ deneme: "aaaa" });
});

app.post("/posts/create", createPost);
app.get("/posts/getAll", getAllPosts);
app.get("/posts/trending", getTrendingPosts);
app.get("/posts/:creator/:slug", getPostDetails);

app.post("/users/signup", signupUser);
app.post("/users/login", loginUser);

exports.api = functions.region("europe-west1").https.onRequest(app);
