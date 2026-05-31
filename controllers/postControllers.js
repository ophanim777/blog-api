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


exports.createPost = async (
  req,
  res
) => {
  const { title, content } = req.body;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: req.user.id
    }
  });

  res.status(201).json(post);
};


exports.updatePost = async (
  req,
  res
) => {
  const { title, content } = req.body;

  const post = await prisma.post.update({
    where: {
      id: Number(req.params.id)
    },
    data: {
      title,
      content
    }
  });

  res.json(post);
};


exports.deletePost = async (
  req,
  res
) => {
  await prisma.post.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.json({
    message: "Post deleted"
  });
};


exports.togglePublish = async (
  req,
  res
) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });
const updatedPost =
    await prisma.post.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        published: !post.published
      }
    });

  res.json(updatedPost);
};