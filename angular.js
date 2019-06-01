var app = angular.module('Todo', []);
app.controller('TodoCtrl', function($scope) {
    $scope.message = 'Angular is gay.';
    $scope.todos = [
        'Die',
        'Kick trash',
        'poot',
    ];
    $scope.done = (todo) => {
        var indexOf = $scope.todos.indexOf(todo);
        if (indexOf !== -1) {
            $scope.todos.splice(indexOf, 1);
        }
    };
    $scope.add = () => {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = '';
        };
});

app.component('app', {
  template:
    'Month: <input ng-model="$ctrl.month" ng-change="$ctrl.updateDate()">' +
    'Date: {{ $ctrl.date }}' +
    '<test date="$ctrl.date"></test>',
  controller: function() {
    this.date = new Date();
    this.month = this.date.getMonth();
    this.updateDate = function() {
      this.date.setMonth(this.month);
    };
  }
}).component('test', {
  bindings: { date: '<' },
  template:
    '<pre>{{ $ctrl.log | json }}</pre>',
  controller: function() {
    var previousValue;
    this.log = [];
    this.$doCheck = function() {
      var currentValue = this.date && this.date.valueOf();
      if (previousValue !== currentValue) {
        this.log.push('doCheck: date mutated: ' + this.date);
        previousValue = currentValue;
      }
    };
  }
});