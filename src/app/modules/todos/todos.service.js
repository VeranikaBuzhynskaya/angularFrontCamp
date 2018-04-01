(function(angular) {
    function todosService($resource) {   
        let todos = null;

        const generateId = function() {
            return todos.length;
        };

        return {
            init: function() {
                return $resource('/data/todos.json').query({})
                    .$promise.then((response) => {
                        todos = response.map((todo) => {
                            todo.createdAt = new Date(todo.createdAt);
                            return todo;
                        });

                        return todos;
                    });
            },
            getAll: function() {
                return todos;
            },
            getTask: function(id) {
                const todoIndex = todos
                    .map(todo => todo.id)
                    .indexOf(id);
                
                    return todoIndex >= 0 ? todos[todoIndex] : null;
            },
            removeTask: function(id) {
                const indexOfDeletedTodo = todos
                    .map(todo => todo.id)
                    .indexOf(id);

                todos.splice(indexOfDeletedTodo, 1);
            },
            addTask: function(title, description) {
                var id = generateId();
                todos.push({
                    id: generateId(),
                    isDone: false,
                    title: title,
                    description: description,
                    createdAt: new Date()
                });
            },
            editTask: function(id, title, description) {
                const todo = todos.find(todo => todo.id === id);
                todo.title = title;
                todo.description = description;
            }
        };
    }
    
    todosService.$inject = ['$resource'];

    angular
        .module('myTodosList')
        .factory('todosService', todosService);

})(window.angular);