import { faker } from '@faker-js/faker'

export const existingUser = {
  email: 'testautomation@test.com.br',
  password: 'abc123'
}

export const generateUser = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: '123456',
  birthDay: '18',
  birthMonth: '8',
  birthYear: '1996',
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  company: 'Playwright',
  address: '123 Main St',
  address2: 'Apt 4B',
  country: 'United States',
  state: 'California',
  city: 'Los Angeles',
  zipcode: '90001',
  mobile: '+1 555 123 4567'
})

export const invalidUser = {
  email: 'invalidemail@test.com.br',
  password: 'invalidpassword'
}