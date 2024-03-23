import { z } from 'zod'

const envSchema = z.object({
  APP_URL: z.string().url(),
  API_GITHUB_USER_URL: z.string().url(),
  API_GITHUB_REPOS_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
