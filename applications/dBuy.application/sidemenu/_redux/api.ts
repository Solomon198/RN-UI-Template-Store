import _ from 'lodash';
import faker from 'faker';

const GetBooks = async () => {
  const book = function () {
    return {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      author: `${faker.name.title()} ${faker.name.firstName()} ${faker.name.lastName()}`,
      description: faker.lorem.sentences(4),
      coverPhoto: faker.random.image(),
      price: faker.commerce
        .price(1000, 5000)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    };
  };
  const books = _.times(30, book) as entities.Book[];
  return books;
};

const api = {
  GetBooks,
};

export default api;
