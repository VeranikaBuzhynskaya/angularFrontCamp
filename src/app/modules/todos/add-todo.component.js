(function(angular) {
    function AddTodoController(todosService, $state) {
        const self = this;

        self.submit = (title, description) => {
            todosService.addTask(title, description);
            $state.go('home');
        };
    }

    AddTodoController.$inject = ['todosService', '$state'];

    angular
        .module('myTodosList')
        .component('addTodo', {
            templateUrl: '../templates/todos/add-todo.template.html',
            controller: AddTodoController
        });
})(window.angular);