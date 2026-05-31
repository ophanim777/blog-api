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


exports.deleteComment = async (
  req,
  res
) => {
  await prisma.comment.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json({
    message: "Comment deleted"
  });
};