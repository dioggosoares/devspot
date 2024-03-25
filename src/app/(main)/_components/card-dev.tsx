import Image from 'next/image'
import Link from 'next/link'

interface CardDevProps {
  name: string
  username: string
}

export function CardDev({ name, username }: CardDevProps) {
  return (
    <div className="mx-auto flex w-full max-w-64 flex-col items-center gap-3 rounded-lg bg-base-700 px-8 py-7">
      <Link href={`/${username}`}>
        <h1 className="text-lg font-bold">{name}</h1>
        <Image
          src={`https://github.com/${username}.png`}
          alt="github avatar"
          width={128}
          height={128}
          className="rounded-md"
          priority
        />
      </Link>
    </div>
  )
}
