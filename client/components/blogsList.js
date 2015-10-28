Template.blogsList.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('blogs');
  }.bind(this));
};

Template.blogsList.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.blogsList.helpers({
  list: function() {
    return Blogs.find({}, {sort: {"name": 1}});
  }
});

Template.blogsList.events({
  'submit form': function(event) {
    event.preventDefault();
    var text = $(event.target).find("input").val().trim();
    if(text) {
      Meteor.call("insertBlog", text, function(err, id) {
        if(err) {
          return alert(err.reason);
        }
      });
    }
    $(event.target).find("input").val("");
  },

  'click .deleteBlog': function(event) {
    event.preventDefault();
    var id = this._id;
    if(id) {
      Meteor.call("deleteBlog", id, function(err) {
        if(err) {
          return alert(err.reason);
        }
      });
    }
  }
});