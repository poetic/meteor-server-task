ServerTask.setToken = function (token) {
  ServerTask._token = token
}

ServerTask.run = function () {
  var args = Array.prototype.slice.call(arguments)
  var name = args.shift()

  Meteor.call('task', ServerTask._token, name, args)
}
