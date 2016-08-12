# Restaurant review

This is a restaurant review application with a focus on **accessibility**. The restaurant information is saved in a JSON file and is partely made up. 

The review application is responsive on all devices and include a menu bar providing multiple ways to filter the restaurants (by name, by cuisine and by adress). The filterable table contains restaurant information and managing focus when one is selected to the specific restaurant view. The specific restaurant information view contains name of the restaurant, cuisine type, opening hours, price class, address, phone nr, image and a link to reserve place together with current reviews along with an option to fill in a form. The form includes name of the reviewer and a comment textarea field and a 5 star rating system.

The accessibility is made from recommendations from WAI-ARIA. [WAI-ARIA](https://www.w3.org/WAI/intro/aria.php), the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. It also uses `JQuery` and `Bootstrap` for facilitate JS and responsiveness. 


## Installation

* `git clone` [this repository](https://github.com/lhellborg/restaurantReview)
* change into the new directory
* type and run `npm install`
* type and run `bower install`

##Running
Run `grunt serve` for preview on `http://localhost:9000/` in the web browser.

## Build & development

Run `grunt` or `grunt build` for minimizing and concatenating files into `dist folder.


