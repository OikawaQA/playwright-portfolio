import { faker } from '@faker-js/faker';

export const generateContact = () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    subject: faker.lorem.sentence(),
    message: faker.lorem.paragraph()
});