System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.title = 'Angular 2';
                    this.link = 'http://angular.io';
                    this.votes = 10;
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.votes += 1;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        host: {
                            class: 'row'
                        },
                        template: "\n    <div class=\"four wide column center align votes\">\n      <div class=\"ui statistic\">\n        <div class=\"value\">\n          {{ votes }}\n        </div>\n        <div class=\"label\">\n          Points\n        </div>\n      </div>\n    </div>\n    <div class=\"twelve wide column\">\n      <a class=\"ui large header\" href=\"{{ link }}\">\n        {{ title }}\n      </a>\n      <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\">\n          <a href (click)=\"voteUp()\">\n            <i class=\"arrow up icon\"></i>\n            upvote\n          </a>\n        </li>\n        <li class=\"item\">\n          <a href (click)=\"voteDown()\">\n            <i class=\"arrow down icon\"></i>\n            downvote\n          </a>\n        </li>\n      </ul>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=app-02.component.js.map