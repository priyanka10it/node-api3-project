const express = require('express');
const helmet = require('helmet');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);
server.use('/api/posts',postRouter);
server.use('/api/users',userRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`
  `\n <p>Heroku deployment successfully done</p>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
     `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.originalUrl}
    }` 
    //console.log(req.method, "Original Url:", req.originalUrl, new Date() )
  );

  next();
}
module.exports = server;
