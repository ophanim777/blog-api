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