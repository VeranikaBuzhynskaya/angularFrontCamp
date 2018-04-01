(function(angular) {
    function TodosController(todosService, $state) {
        const self = this;

        self.$onInit = () => {
            if (!todosService.getAll()) {
                todosService.init()
                    .then(todos => self.todos = todos);
            } else {
                self.todos = todosService.getAll();
            }
            
            self.fieldName = 'title';
            self.reverse = false
        };

        self.addTask = () => {
            $state.go('add');
        }; 

        self.editTask = (id) => {
            $state.go('edit', {
                todoId: id
            });
        };

        self.removeTask = (id) => {
            todosService.removeTask(id);
        };

        self.sortBy = (fieldName) => {
            self.reverse = (self.fieldName === fieldName) ? !self.reverse : false;
            self.fieldName = fieldName;
        };

        self.formatDate = (date) => {
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = (month < 10) ? ("0" + month) : month;
            day = (day < 10) ? ("0" + day) : day; 
        
            return `${day}.${month}.${date.getFullYear()}`;
        };
    }

    TodosController.$inject = ['todosService', '$state'];

    angular
        .module('myTodosList')
        .component('todos', {
            templateUrl: '../templates/todos/todos.template.html',
            controller: TodosController
            
        });
})(window.angular);