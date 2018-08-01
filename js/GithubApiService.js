"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (username, callback) {
        // Asynchronous method. Cannot return a user. Use a callback mechanism. /
        request.get('https://api.github.com/users/' + username, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function (username, callback) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
