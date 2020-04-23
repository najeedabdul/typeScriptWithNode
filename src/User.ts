
import {Repo} from "./Repo";

export class User {
    repoCount: number;
    followerCount: number;
    repos?: Repo[];

    constructor(body: any) {
        this.repoCount = body.public_repos;
        this.followerCount = body.id;
        this.repos = body.repos;
    }
}