const prisma = require("../config/prisma");

exports.getPublishedPosts = async (
  req,
  res
) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    },
    include: {
      author: true
    }
  });

  res.json(posts);
};

exports.getPost = async (
  req,
  res
) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(req.params.id)
    },
    include: {
      comments: true,
      author: true
    }
  });

  res.json(post);
};