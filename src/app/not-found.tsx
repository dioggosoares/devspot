'use client'

import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-40">
      <Image src="/notfound-dark.png" height="400" width="400" alt="NotFound" />
      <h2 className={cn('text-xl font-medium', font.className)}>
        Ops, não encontramos nada aqui!
      </h2>
      <Button variant="secondary">
        <Link href="/">Voltar</Link>
      </Button>
    </div>
  )
}
