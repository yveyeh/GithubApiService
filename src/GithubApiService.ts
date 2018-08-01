import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {

    getUserInfo(username: string, callback: (user: User) => any) { 
        // Asynchronous method. Cannot return a user. Use a callback mechanism. /
        request.get('https://api.github.com/users/' + username, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            callback(user);
        });
    }

    getRepos(username: string, callback: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo))
            callback(repos);
        });
    }
}