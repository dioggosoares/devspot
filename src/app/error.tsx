'use client'

import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function Error() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 pt-40">
      <Image src="/error-dark.png" height="300" width="300" alt="Error" />
      <h2 className={cn('text-xl font-medium', font.className)}>
        Ops, algo deu errado!
      </h2>
      <Button asChild>
        <Link href="/">Voltar</Link>
      </Button>
    </div>
  )
}
