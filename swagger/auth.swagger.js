const login = {
    tags: ["Auth"]
}

const signup = {
    tags: ["Auth"]
}

const authDocs = {
    "/login": {
        post: login,
    },
    "/signup": {
        post: signup,
    },
}

module.exports = authDocs;