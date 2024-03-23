import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <Image
        priority
        src="/logo.svg"
        width="0"
        height="0"
        alt="Logo DevSpot"
        className="h-auto w-auto"
      />
    </Link>
  )
}
