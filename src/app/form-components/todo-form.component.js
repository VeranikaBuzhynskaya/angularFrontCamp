(function(angular) {
    function TodoFormController() {
        const self = this;

        self.submit = () => {
            self.onSubmit({title: self.title, description: self.description});
        };
    }

    TodoFormController.$inject = [];
    
    angular
        .module('myTodosList')
        .component('todoForm', {
            templateUrl: '../templates/form-components/todo-form.template.html',
            controller: TodoFormController,
            bindings: {
                title:'<',
                description: '<',
                onSubmit: '&'
            }
        });
})(window.angular);