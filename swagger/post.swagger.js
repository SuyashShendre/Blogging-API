const createPost = {
    tags: ["Post"]
}

const updatePost = {
    tags: ["Post"]
}

const getPost = {
    tags: ["Post"]
}

const getByIdPost = {
    tags: ["Post"]
}

const deletePost = {
    tags: ["Post"]
}

const postDocs = {
    "/posts": {
        post: createPost,
        get: getPost,
    },
    "/posts/{id}": {
        put: updatePost,
        get: getByIdPost,
        delete: deletePost,
    },
}

module.exports = postDocs;