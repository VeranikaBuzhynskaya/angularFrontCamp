(function(angular) {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        var states = [
            { 
                name: 'home', 
                url: '/todos', 
                component: 'todos'
            },
            {
                name: 'add',
                url: '/todos/add',
                component: 'addTodo'
            },
            {
                name: 'edit',
                url: '/todos/{todoId}/edit',
                component: 'editTodo',
                resolve: {
                    todo: ['todosService', '$transition$', (todosService, $transition$) => {
                        return todosService.getTask(+$transition$.params().todoId);
                    }]
                }
            }
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/todos');
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    const app = angular
        .module('myTodosList', ['ui.router', 'ngResource'])
        .config(config);
          
})(window.angular);