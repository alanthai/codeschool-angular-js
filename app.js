(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    })

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

    var gems = [{
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
            "resources/images/gem-02.gif",
            "resources/images/gem-05.gif",
            "resources/images/gem-09.gif"
        ],
        reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }]
    },   {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
          "resources/images/gem-01.gif",
          "resources/images/gem-03.gif",
          "resources/images/gem-04.gif",
        ],
        reviews: [{
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "resources/images/gem-06.gif",
        "resources/images/gem-07.gif",
        "resources/images/gem-08.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();

