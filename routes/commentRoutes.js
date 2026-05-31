const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

const admin = require(
  "../middleware/adminMiddleware"
);

const {
  createComment,
  deleteComment
} = require(
  "../controllers/commentController"
);

router.post(
  "/",
  auth,
  createComment
);

router.delete(
  "/:id",
  auth,
  admin,
  deleteComment
);

module.exports = router;