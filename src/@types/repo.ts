export interface Repo {
  id: number
  name: string
  description: string
  language: string
  stargazers_count: number
  html_url: string
  message?: string
}

export interface RepoDetails {
  id: number
  name: string
  description: string
  language: string
  stargazers_count: number
  html_url: string
  message?: string
  forks_count: number
  subscribers_count: number
}
