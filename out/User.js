"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(body) {
        this.repoCount = body.public_repos;
        this.followerCount = body.id;
        this.repos = body.repos;
    }
    return User;
}());
exports.User = User;
