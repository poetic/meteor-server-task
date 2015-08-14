ServerTask.setToken = function (token) {
  ServerTask._token = token
}

Meteor.methods({
  /**
   * @param {String} token
   * @param {String} name
   * ...
   */
  _ServerTask: function (token, name, args) {

    if (!ServerTask._token) {
      throw new Meteor.Error(
        'no-token',
        'You did not set up your server token'
      )
    }

    if (ServerTask._token !== token) {
      throw new Meteor.Error(
        'not-authorized',
        'Your token is invalid'
      )
    }

    return ServerTask[name].apply(ServerTask, args)
  },
})
