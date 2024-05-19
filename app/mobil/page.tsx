import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

export default function Component() {
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
            {/* Car listings */}
          </div>
        </div>
      </section>
    </>
  );
}
