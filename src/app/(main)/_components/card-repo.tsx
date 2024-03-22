import { Star } from 'lucide-react'
import colors from 'tailwindcss/colors'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CardRepo() {
  return (
    <Card className="border-base-600 bg-base-600">
      <CardHeader className="p-6">
        <CardTitle className="text-zinc-50">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-lg">Junno</h1>
            <div className="flex items-center">
              <Star
                fill={colors.amber['500']}
                className="mr-2 h-4 w-4 text-amber-500"
              />
              <span className="text-base font-semibold">32</span>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          fugiat dolore, perspiciatis vitae porro natus quidem fuga eos
          architecto quod amet numquam inventore ullam expedita earum. Alias
          quam amet ex.
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-3">
        <div className="flex w-full justify-end">
          <Button className="text-zinc-50" variant="ghost" size="sm">
            Ver mais
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
