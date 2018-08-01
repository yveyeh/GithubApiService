import { Repo } from "./Repo";

export class User {

    login: string;
    full_name: string;
    repo_count: number;
    followers: number;

    constructor(user_response: any) {
        this.login = user_response.login;
        this.full_name = user_response.name;
        this.repo_count = user_response.public_repos;
        this.followers = user_response.followers;
    }

}