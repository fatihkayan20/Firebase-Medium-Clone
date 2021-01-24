const validator = require("validator");
const { db } = require("../util/admin");
const slugify = require("slugify");

exports.createPost = (req, res) => {
  const postData = {
    // user: {
    //   imageUrl: req.user.imageUrl,
    //   username: req.user.username,
    // },
    subject: req.body.subject,
    createdAt: new Date().toISOString(),
    readCount: 0,
    title: req.body.title,
    body: req.body.body,
    likeCount: 0,
    commentCount: 0,
    trendCount: 0,
  };

  if (validator.isEmpty(postData.title)) {
    return res.status(400).json({ error: "Title is required" });
  }

  postData.slug = slugify(postData.title);

  const slugQuery = db
    .collection("posts")
    .where("slug", "==", postData.slug)
    // .where("user.username", "==", postData.user.username)
    .limit(1);

  slugQuery.get().then((post) => {
    if (!post.empty) {
      return res
        .status(400)
        .json({ error: "This title is already use by you" });
    } else {
      db.collection(`/posts`)
        .add(postData)
        .then((data) => {
          return res.status(201).json({
            postId: data.id,
            ...postData,
          });
        })
        .catch((err) => {
          return res.status(500).json({ error: err.message });
        });
    }
  });
};

exports.getAllPosts = (req, res) => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((post) => {
        posts.push(post.data());
      });

      return res.json(posts);
    });
};

exports.getTrendingPosts = (req, res) => {
  var ourDate = new Date();
  var pastDate = ourDate.getDate() - 7;
  ourDate.setDate(pastDate);

  db.collection("posts")
    .orderBy("trendCount", "desc")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((post) => {
        posts.push(post.data());
      });
      return posts.filter((post) => post.createdAt >= ourDate.toISOString());
    })
    .then((posts) => {
      return res.json(posts.slice(0, 6));
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

exports.getPostDetails = (req, res) => {
  const slug = req.params.slug;
  const creator = req.params.creator;
  var docQuery = db
    .collection("posts")
    .where("slug", "==", slug)
    .where("user.username", "==", creator);

  let postData;

  docQuery.get().then(async (post) => {
    if (post.empty) {
      return res.status(404).json({ error: "Post not found" });
    } else {
      postData = post.docs[0].data();

      await post.docs[0].ref.update({
        readCount: postData.readCount + 1,
        trendCount: postData.trendCount + 1,
      });
      postData.readCount += 1;
      postData.trendCount += 1;
      return res.json(postData);
    }
  });
};
