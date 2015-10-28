Router.configure({
  layoutTemplate: "layout"
})

Router.route('/', {
  name: 'blogsList'
});

Router.route('/blog/:_id', {
  name: 'blog.item',
  template: "blogPage"
});

Router.route('/hotNews', {
  name: 'hotNews'
});