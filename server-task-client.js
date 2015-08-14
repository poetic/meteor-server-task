ServerTask.setToken = function (token) {
  ServerTask._token = token
}

ServerTask.run = function () {
  var args = Array.prototype.slice.call(arguments)
  var name = args.shift()

  Meteor.call('_ServerTask', ServerTask._token, name, args, function (error, result) {
    if (error) {
      throw error
    } else {
      console.log('ServerTask succeed')
      console.log('RESULT:', result)
    }
  })
}
