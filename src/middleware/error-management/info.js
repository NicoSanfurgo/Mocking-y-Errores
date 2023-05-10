// * Aca van los errores personalizados

export const missingID = (item) => {
    return `${item} ID is required.`
};

export const addProductError = (product) => {
    return `One or more properties were incomplete or not valid.
    List of required properties:
    > title: must be type string, received ${product.title}
    > description: must be type string, received ${product.description}
    > code: must be type string, received ${product.code}
    > price: must be type number, received ${product.price}
    > status: must be type boolean, received ${product.status}
    > stock: must be type number, received ${product.stock}
    > category: must be type string, received ${product.category}`
}


