import { Factory, faker } from 'ember-cli-mirage';
import nl2br from '../utils/nl2br';

export default Factory.extend({
  date() {
    // return faker.random.date();
    return faker.date.recent();
  },

  title() {
    return faker.lorem.sentence();
  },

  slug() {
    return this.title
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
  },

  content() {
    return {
      rendered: '<p>' + nl2br(faker.lorem.paragraphs(faker.random.number({min: 1, max: 20}))) + '</p>'
    }
  },

  author() {
    return {
      name: faker.name.firstName() + faker.name.lastName(),
      avatarUrl: faker.image.avatar()
    }
  },

  sticky() {
    return false;
  },

  comment_status() {
    return faker.list.random('open', 'open', 'open', 'open', 'closed')();
  }
});
