import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

    import React from 'react'
import Image from "next/image"
const LandingPage = () => {
    return (
      <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                 
                  <Image
                  alt="hero"
                  height="433"
                  src="/mobil.jpg"
                  width="650"
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full"
                  />
                  <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                              Rent a Car, Anywhere
                          </h1>
                          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                              Experience the freedom of the open road with our premium car rental service. Book your ride today and
                              explore the world at your own pace.
                          </p>
                      </div>
                      <Link
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                      >
                          Book Now
                      </Link>
                  </div>
              </div>
          </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                  <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Fleet</div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Premium Car Selection</h2>
                          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                              From sleek sedans to spacious SUVs, our fleet has the perfect vehicle for every occasion. Browse our
                              selection and find your dream car.
                          </p>
                      </div>
                      <Link
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                      >
                          View Fleet
                      </Link>
                  </div>
                  <img
                      alt="Fleet"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                      height="310"
                      src="/mobil.jpg"
                      width="550"
                  />
              </div>
          </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Hear from real customers who have experienced our top-notch car rental service.
                  </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                      <CardContent className="space-y-4">
                          <blockquote className="text-lg font-semibold leading-snug">
                              “I rented a car from this service and it was the best experience I ve ever had. The process was
                              seamless and the car was in perfect condition.”
                          </blockquote>
                          <div>
                              <div className="font-semibold">Sarah Johnson</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Frequent Renter</div>
                          </div>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardContent className="space-y-4">
                          <blockquote className="text-lg font-semibold leading-snug">
                              I was impressed by the wide selection of vehicles and the competitive pricing. I ll definitely be
                              using this service again for my next trip.
                          </blockquote>
                          <div>
                              <div className="font-semibold">Michael Lee</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Business Traveler</div>
                          </div>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardContent className="space-y-4">
                          <blockquote className="text-lg font-semibold leading-snug">
                              “The customer service was outstanding. They went above and beyond to ensure I had a smooth rental
                              experience. I highly recommend this company.”
                          </blockquote>
                          <div>
                              <div className="font-semibold">Emily Chen</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Leisure Traveler</div>
                          </div>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Rent a Car in 3 Easy Steps</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Our streamlined rental process makes it easy to get on the road quickly.
                  </p>
              </div>
              <div className="grid w-full max-w-md grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2 text-center">
                      <SearchIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="font-semibold">Search</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Browse our selection and find the perfect car.</p>
                  </div>
                  <div className="space-y-2 text-center">
                      <CalendarIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="font-semibold">Book</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Reserve your car with our easy online booking.</p>
                  </div>
                  <div className="space-y-2 text-center">
                      <CarIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="font-semibold">Drive</div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Pick up your car and hit the road.</p>
                  </div>
              </div>
          </div>
      </section>
  </>
    )
  }
  
  export default LandingPage


  function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function CarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </svg>
    )
}


function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
