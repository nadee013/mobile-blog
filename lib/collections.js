Blogs = new Mongo.Collection("blogs");

var Schemas = {};

Schemas.Blogs = new SimpleSchema({
  'name': {
    type: String,
    label: "Name",
    max: 200
  }
});

Blogs.attachSchema(Schemas.Blogs);