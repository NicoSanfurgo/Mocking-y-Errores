import { faker } from '@faker-js/faker';

faker.locale = 'es';

export const generateProduct = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        code: faker.datatype.string(8),
        price: faker.commerce.price(200, 15000),
        status: faker.datatype.boolean(),
        stock: faker.random.numeric(2),
        category: faker.commerce.department(),
        thumbnails: [faker.image.image()]
    }
}