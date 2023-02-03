const createUser = {
    tags: ["User"]
}

const updateUser = {
    tags: ["User"]
}

const updateChangePassword = {
    tags: ["User"]
}

const deleteAccount = {
    tags: ["User"]
}

const deleteUser = {
    tags: ["User"]
}

const getUser = {
    tags: ["User"]
}

const getUserById = {
    tags: ["User"]
}

const profilePhoto = {
    tags: ["User"]
}

const profileViewers = {
    tags: ["User"]
}

const following = {
    tags: ["User"]
}

const unfollow = {
    tags: ["User"]
}

const block = {
    tags: ["User"]
}

const unblock = {
    tags: ["User"]
}

const adminBlock = {
    tags: ["User"]
}

const adminUnblock = {
    tags: ["User"]
}

const userDocs = {
    "/users": {
        post: createUser,
        put: updateChangePassword,
        delete: deleteAccount,
        get: getUser,
        post: profilePhoto,

    },
    "/users/{id}": {
        put: updateUser,
        delete: deleteUser,
        get: getUserById,
        get: profileViewers,
        get: following,
        get: unfollow,
        get: block,
        get: unblock,
        get: adminBlock,
        get: adminUnblock
    },
}

module.exports = userDocs;