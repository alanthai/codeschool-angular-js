(function() {
	var app = angular.module('store-products', []);

	app.directive('productTitle', function() {
        return {
            // type of directive.
            // E = element. Use for UI widgets
            // A = attribute. Use for mixin behaviors (like tooltips)
            restrict: 'E',
            templateUrl: "product-title.html"
        };
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });

    app.directive('productReview', function() {
        return {
            restrict: 'E',
            templateUrl: "product-review.html"
        };
    });

    app.directive('productSpecs', function() {
        return {
            restrict: 'E',
            templateUrl: "product-specs.html"
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: "product-panels.html",
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panels'
        };
    });

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: "product-gallery.html",
            controller: function() {
                this.current = 0;

                this.setCurrent = function(newValue) {
                    this.current = newValue || 0;
                }
            },
            controllerAs: 'gallery'
        };
    });
})();