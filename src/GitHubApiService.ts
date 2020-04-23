import * as request from "request";
import {User} from "./User";
import {Repo} from "./Repo";

const OPTIONS : any = {headers:
            {
                'User-Agent': 'request'
            },
        json: true};

export class GitHubApiService
{

    getUserInfo(username: string, cb: (user: User) => any)
    {
        request.get
        ('https://api.github.com/users/' + username,
            OPTIONS,
            (error: any, response: any, body: any) =>
            {
                let user = new User(body);
                cb(user);
            }
        )
    }

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


    getRepos(username : string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS,
            (error: any, response: any, body: any) =>
            {
                let repos = body.map((repo: any)  => new Repo(repo));
                cb(repos);
            }
        )
    }

    /**
    getRepos(username : string) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS,
            (error: any, response: any, body: any) =>
            {
                let repos = body.map((repo: any)  => new Repo(repo));
                return repos;
            }
        )
    }
     */
}