/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/aUB7cY71dlQ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Badge } from "@/components/ui/badge"

export function section3() {
  return (
    <section className="container grid grid-cols-1 gap-6 md:grid-cols-3 py-12 md:py-24">
      <div className="flex items-start gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Item 1"
          className="h-24 w-24 flex-shrink-0 rounded-md object-cover"
          height={100}
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width={100}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Stylish Sunglasses</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">UV protection and fashionable design.</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline">Polarized</Badge>
            <Badge variant="outline">UV400</Badge>
            <Badge variant="outline">Lightweight</Badge>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Item 2"
          className="h-24 w-24 flex-shrink-0 rounded-md object-cover"
          height={100}
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width={100}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Leather Crossbody Bag</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Stylish and practical for everyday use.</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline">Genuine Leather</Badge>
            <Badge variant="outline">Adjustable Strap</Badge>
            <Badge variant="outline">Zipper Closure</Badge>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Item 3"
          className="h-24 w-24 flex-shrink-0 rounded-md object-cover"
          height={100}
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width={100}
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">Wireless Headphones</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              High-quality sound and long-lasting battery.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline">Noise Cancelling</Badge>
            <Badge variant="outline">Bluetooth 5.0</Badge>
            <Badge variant="outline">20 Hour Battery</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
