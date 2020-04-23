"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = { headers: {
        'User-Agent': 'request'
    },
    json: true };
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (username, cb) {
        request.get('https://api.github.com/users/' + username, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            cb(user);
        });
    };
    /**
    getUserInfo(username: string)
    {
        request.get
        ('https://api.github.com/users/' + username,
            OPTIONS,
            (error: any, response: any, body: any) =>
            {
                let user = new User(body);
                return user;
            }
        )
    }
     */
    GitHubApiService.prototype.getRepos = function (username, cb) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
