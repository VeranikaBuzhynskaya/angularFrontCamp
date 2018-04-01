(function(angular) {
    function UpdateTodoController(todosService, $state) {
        const self = this;
        
        self.submit = (title, description) => {
            todosService.editTask(self.todo.id, title, description);
            $state.go('home');
        };
    }

    UpdateTodoController.$inject = ['todosService', '$state'];

    angular
        .module('myTodosList')
        .component('editTodo', {
            templateUrl: '../templates/todos/edit-todo.template.html',
            controller: UpdateTodoController,
            bindings: {
                todo: '<'
            }
        });
})(window.angular);