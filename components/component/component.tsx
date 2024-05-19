/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/rguTf1heIBe
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
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"

export function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Perfect Ride
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Rent the car you need, when you need it. Search, compare, and book with ease.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Input id="pickup" placeholder="Enter pickup location" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="dropoff">Drop-off Location</Label>
                  <Input id="dropoff" placeholder="Enter drop-off location" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="date">Rental Dates</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="w-full flex-col h-auto items-start" variant="outline">
                        <span className="font-semibold uppercase text-[0.65rem]">Select Dates</span>
                        <span className="font-normal">4/2/2024 - 10/2/2024</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar mode="range" />
                    </PopoverContent>
                  </Popover>
                </div>
                <Button className="sm:self-end" type="submit">
                  Search Cars
                </Button>
              </form>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Toyota Camry</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Midsize Sedan</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$50/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Honda Civic</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Compact Sedan</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$40/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Ford F-150</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Full-Size Pickup</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$75/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Jeep Wrangler</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Midsize SUV</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$65/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Hyundai Sonata</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Midsize Sedan</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$45/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Nissan Rogue</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Compact SUV</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$55/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Chevrolet Silverado</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Full-Size Pickup</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$80/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Car Image"
                className="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={300}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Honda CR-V</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Compact SUV</small>
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">$60/day</h4>
                  <Button size="sm">Rent</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
