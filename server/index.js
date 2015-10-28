Meteor.methods({
  insertBlog: function(text) {
    console.log("Adding blog ", text);
    return Blogs.insert({'name': text});
  },

  deleteBlog: function(id) {
    console.log("Removing blog", id);
    return Blogs.remove({_id: id});
  }
});

Meteor.publish('blogs', function() {
  return Blogs.find({}, {sort: {'name': 1}});
});

Meteor.publish("blog", function(id) {
  return Blogs.find({_id: id});
});