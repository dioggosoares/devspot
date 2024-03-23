import Image from 'next/image'

export function Logo() {
  return (
    <Image
      priority
      src="/logo.svg"
      width="0"
      height="0"
      alt="Logo DevSpot"
      className="h-auto w-auto"
    />
  )
}
