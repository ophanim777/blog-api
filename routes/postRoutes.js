const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

const admin = require(
  "../middleware/adminMiddleware"
);


const {
  getPublishedPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  togglePublish
} = require(
  "../controllers/postController"
);

router.get("/", getPublishedPosts);

router.get("/:id", getPost);

router.post(
  "/",
  auth,
  admin,
  createPost
);

router.put(
  "/:id",
  auth,
  admin,
  updatePost
);

router.delete(
  "/:id",
  auth,
  admin,
  deletePost
);

router.patch(
  "/:id/publish",
  auth,
  admin,
  togglePublish
);

module.exports = router;
