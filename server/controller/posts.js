import PostMessage from '../models/postMessage.js';

export const getPosts = (req, res, next) => {
  PostMessage.find()
    .then((posts) => {
      (res.statusCode = 200), res.setHeader('Content-Type', 'application/json');
      res.json(posts);
    })
    .catch((err) => {
      res.status(404).json({ message: err });
    });
};
export const newPost = (req, res, next) => {
  console.log(req.body);
  PostMessage.create(req.body)

    .then(
      (post) => {
        (res.statusCode = 200),
          res.setHeader('Content-Type', 'application/json');
        res.json(post);
      },
      (err) => next(err),
    )
    .catch((err) => {
      next(err);
    });
};
