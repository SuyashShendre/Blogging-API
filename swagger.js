const authDocs = require("./swagger/auth.swagger");
const categoryDocs = require("./swagger/category.swagger");
const postDocs = require("./swagger/post.swagger");
const commentDocs = require("./swagger/comment.swagger");
const userDocs = require("./swagger/user.swagger");

const swagger = {
    openapi: "3.0.0",
    info: {
      title: "Blogging API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "Suyash Shendre",
        url: "https://blog.suyashshendre.com",
        email: "info@suyashshendre.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development"
      },
      {
        url: "http://blog.suyashshendre.com",
        description: "Production Development"
      },
    ],
    tags: [
        {
            name: "Auth",
            description: "Auth Routes"
        },
        {
            name: "User",
            description: "User Routes"
        },
        {
            name: "Post",
            description: "Post Routes"
        },
        {
            name: "Category",
            description: "Category Routes"
        },
        {
            name: "Comment",
            description: "Comment Routes"
        }
    ],
    paths: {
        ...authDocs,
        ...postDocs,
        ...userDocs,
        ...categoryDocs,
        ...commentDocs,
    }
};

module.exports = swagger;
