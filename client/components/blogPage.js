Template.blogPage.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('blog', Router.current().params._id);
  }.bind(this));
};

Template.blogPage.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.blogPage.helpers({
  blog: function() {
    var id = Router.current().params._id;
    if(id) {
      return Blogs.findOne(id);
    }
  }
})
