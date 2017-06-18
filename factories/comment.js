import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  date() {
    return faker.date.recent();
  },

  content() {
    return faker.lorem.sentences(faker.random.number({min: 1, max: 10}));
  },

  author_name() {
    return faker.name.firstName() + ' ' + faker.name.lastName();
  },

  author_avatar_urls() {
    return {
      '48': faker.image.avatar(48)
    }
  }
});
