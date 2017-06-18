import { faker } from 'ember-cli-mirage';

export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  const posts = server.createList('post', 20);

  posts.forEach(post => {
    post.comments = server.createList('comment', faker.random.number({min: 0, max: 10}), {postId : post.attrs.id});
  });
}
