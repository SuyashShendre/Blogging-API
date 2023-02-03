const createCategory = {
    tags: ["Category"]
}

const updateCategory = {
    tags: ["Category"]
}

const getCategory = {
    tags: ["Category"]
}

const getByIdCategory = {
    tags: ["Category"]
}

const deleteCategory = {
    tags: ["Category"]
}

const categoryDocs = {
    "/categories": {
        post: createCategory,
        get: getCategory,
    },
    "/categories/{id}": {
        put: updateCategory,
        get: getByIdCategory,
        delete: deleteCategory,
    },
}

module.exports = categoryDocs;