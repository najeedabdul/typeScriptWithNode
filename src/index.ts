import {GitHubApiService} from './GitHubApiService';
import {User} from "./User";
import {Repo} from "./Repo";
import express = require('express');


let svc = new GitHubApiService();
const app = express();


app.get('/gitHubProfile', (req: express.Request, res: express.Response) => {
    const username = req.query.user;
    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            user.repos = repos;
            res.send(user);
        })
    });
});


/**
app.get('/gitHubProfile', (req: express.Request, res: express.Response) => {
    let username = req.query.user;
    svc.getUserInfo(username, (user: User) => );
});
 */

app.listen(3000);