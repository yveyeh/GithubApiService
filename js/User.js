"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(user_response) {
        this.login = user_response.login;
        this.full_name = user_response.name;
        this.repo_count = user_response.public_repos;
        this.followers = user_response.followers;
    }
    return User;
}());
exports.User = User;
