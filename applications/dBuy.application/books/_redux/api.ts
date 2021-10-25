import API from '../../_config_/api/enpoint';
import _ from 'lodash';
import faker from 'faker';

const GetBooks = async (queryParams: any) => {
  const feedSchema = () => ({
    user: {
      uuid: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      avatar: faker.image.avatar(),
    },
    images: [faker.random.image(), faker.random.image()],
    uuid: faker.random.uuid(),
    description: faker.lorem.sentences(4),
    category: faker.lorem.word(),
    date: faker.date.past(),
    price: faker.finance.amount(500, 3000),
  });
  console.log(queryParams);
  const feeds = _.times(10, feedSchema);
  return feeds;
};

const GetBookCategories = async (queryParams: any) => {
  return API.WooCommerceAPI.get('products/categories', queryParams);
};

const api = {
  GetBooks,
  GetBookCategories,
};

export default api;
