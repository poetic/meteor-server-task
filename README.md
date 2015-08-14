# Install
```meteor add poetic:server-task```

# Global Variable
ServerTask

# Usage

1. You need to setup a token in the server side
```
// server
ServerTask.setToken(token)
```
2. You can then define a task on the ServerTask object
```
// server
ServerTask.task1 = function() { ... }
```
3. Then you can use the tasks in the front end javascript console
```
ServerTask.setToken(token)
ServerTask.run(name, [arg1, arg2...])
```
