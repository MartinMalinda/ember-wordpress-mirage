export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:8888';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/wp-json/wp/v2';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/posts', (schema, request) => {
    const {page, per_page, sticky, slug} = request.queryParams;
    const posts = schema.posts.all().models;
    const notStickyPosts = posts.filter(post => !post.sticky);

    if(page) {
      const startAt = page * per_page;
      const endAt = startAt + parseInt(per_page);
      return notStickyPosts.slice(startAt, endAt + 1);
    }

    if(sticky) {
      // TODO sticky + page could be used together (even thoigh Scribe does not do it so far)
      return schema.posts.where({sticky : true}).models;
    }

    if(slug) {
      return schema.posts.where({slug}).models;
    }

    return posts;
  });

  this.get('/posts/:id', (schema, request) => {
    return schema.posts.find(request.params.id).attrs;
  });

  this.get('/comments', (schema, request) => {
    const {post} = request.queryParams;

    if(post) {
      return schema.comments.where({postId : post}).models;
    }

  });

}
