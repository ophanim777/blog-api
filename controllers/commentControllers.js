const prisma = require("../config/prisma");

exports.createComment = async (
  req,
  res
) => {
  const { content, postId } = req.body;

  const comment =
    await prisma.comment.create({
      data: {
        content,
        postId,
        userId: req.user.id
      }
    });

  res.status(201).json(comment);
};