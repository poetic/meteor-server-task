# Install
```meteor add poetic:server-task```

# Global Variable
ServerTask

# Usage

-. You need to setup a token in the server side
```
// server
ServerTask.setToken(token)
```
-. You can then define a task on the ServerTask object
```
// server
ServerTask.task1 = function() { ... }
```
-. Then you can use the tasks in the front end javascript console
```
ServerTask.setToken(token)
ServerTask.run(name, [arg1, arg2...])
```
