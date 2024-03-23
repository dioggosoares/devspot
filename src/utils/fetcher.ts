export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  }).then((res) => res.json())
