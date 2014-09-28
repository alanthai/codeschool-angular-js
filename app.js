(function() {
    var app = angular.module('store', ['store-products']);

    // '$http' = a service from angular. Passed into argument
    // This way of specifying dependencies are called Dependency Injection
    app.controller('StoreController', ['$http', function($http) {
        var store = this;

        store.products = [];

        $http.get('gems.json').success(function(data) {
            debugger; 
            store.products = data;
        });
    }]);

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            this.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();

