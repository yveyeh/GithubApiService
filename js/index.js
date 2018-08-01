"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var _ = __importStar(require("lodash"));
var vcs = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log('Please, pass the username as an argument.');
}
else {
    var username_1 = process.argv[2];
    vcs.getUserInfo(username_1, function (user) {
        vcs.getRepos(username_1, function (repos) {
            var sorted_repos = _.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            var filtered_repos = _.take(sorted_repos, 5);
            user.repos = filtered_repos;
            console.log(user);
        });
    });
}
