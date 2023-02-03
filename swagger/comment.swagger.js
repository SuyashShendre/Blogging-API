const createComment = {
    tags: ["Comment"]
}

const updateComment = {
    tags: ["Comment"]
}

const getComment = {
    tags: ["Comment"]
}

const getByIdComment = {
    tags: ["Comment"]
}

const deleteComment = {
    tags: ["Comment"]
}

const commentDocs = {
    "/comments": {
        post: createComment,
        get: getComment,
    },
    "/comments/{id}": {
        put: updateComment,
        get: getByIdComment,
        delete: deleteComment,
    },
}

module.exports = commentDocs;