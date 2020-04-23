"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var express = require("express");
var svc = new GitHubApiService_1.GitHubApiService();
var app = express();
app.get('/gitHubProfile', function (req, res) {
    var username = req.query.user;
    svc.getUserInfo(username, function (user) {
        svc.getRepos(username, function (repos) {
            user.repos = repos;
            res.send(user);
        });
    });
});
/**
app.get('/gitHubProfile', (req: express.Request, res: express.Response) => {
    let username = req.query.user;
    svc.getUserInfo(username, (user: User) => );
});
 */
app.listen(3000);
