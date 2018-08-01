import * as request from 'request';
import { User } from './User';

export class GithubApiService {

    getUserInfo(username: string) {
        let options: any = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }
        request.get('https://api.github.com/users/' + username, options, (error: any, response: any, body: any) => {
            let user = new User(body);
            console.log(user);
        });
    }

    getRepos() {

    }
}