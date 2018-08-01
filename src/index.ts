import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let vcs = new GithubApiService();

if (process.argv.length < 3) {
    console.log('Please, pass the username as an argument.');
}
else {
    let username = process.argv[2];
    vcs.getUserInfo(username, (user: any) => {
        vcs.getRepos(username, (repos: Repo[]) => {
            let sorted_repos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
            let filtered_repos = _.take(sorted_repos, 5);
            user.repos = filtered_repos;
            console.log(user);
        });
    });
}

