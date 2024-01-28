import axios from 'axios';

import { getReposGitHub } from '../types';

export const config = {
  githubApiUrl: 'https://api.github.com',
  user: 'google',
  perPage: 10,
};

class GitHubService {
  async getRepositories(username: string): Promise<getReposGitHub[]> {
    const response = await axios.get<getReposGitHub[]>(`${config.githubApiUrl}/users/${username}/repos`);
    return response.data;
  }
}

export default new GitHubService(); 