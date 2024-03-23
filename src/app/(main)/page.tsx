import { randomUUID } from 'node:crypto'

import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'tailwindcss/colors'

import { githubStars } from '@/lib/githubstars-data'

import { CardDev } from './_components/card-dev'

export default function GithubStars() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-7 py-2 lg:px-0">
      <CardDev name="Diogo Soares" username="dioggosoares" />

      <div className="mx-auto flex w-full items-center justify-center gap-4 rounded-md bg-base-400 py-3">
        <h1>Github Stars Brasileiros</h1>
        <Star fill={colors.amber['500']} className="h-5 w-5 text-amber-500" />
      </div>

      <div className="grid grid-cols-1 gap-3 pb-10 md:grid-cols-3">
        {githubStars.map((dev) => {
          return (
            <CardDev key={dev.id} name={dev.name} username={dev.username} />
          )
        })}
      </div>
    </div>
  )
}
