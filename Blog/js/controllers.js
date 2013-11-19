'use strict';

/* Controllers */


function blogCtrl($scope, $http) {

    $scope.blogs = [];

    $http.get('blog.json')
      .success(function (blogs) {
          $scope.blogs = blogs;
      }).error(function (err) {
          alert(err);
      });

}