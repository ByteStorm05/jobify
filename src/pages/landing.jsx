import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center pt-0">
        <h1 className="flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tight py-4">
          Your Dream Job Awaits
          <span className="flex items-center justify-center gap-2 sm:gap-4 mt-4">
            <span>Just</span>
            <img
              src="/logo.png"
              className="h-16 sm:h-24 lg:h-32 mx-[-10px] transition-transform transform hover:scale-110"
              alt="Jobify Logo"
            />
            <span>it!</span>
          </span>
        </h1>
        <p className="text-gray-200 sm:mt-4 text-lg sm:text-xl">
          Browse endless job opportunities or discover your ideal candidate!
        </p>
      </section>


      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Carousel */}

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  


      <img src="/banner.jpeg" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
    <CardHeader>
      <CardTitle className="font-bold">For Job Seekers</CardTitle>
    </CardHeader>
    <CardContent>
      Search and apply for jobs, track applications, and more.
    </CardContent>
  </Card>
  
  <Card className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
    <CardHeader>
      <CardTitle className="font-bold">For Employers</CardTitle>
    </CardHeader>
    <CardContent>
      Post jobs, manage applications, and find the best candidates.
    </CardContent>
  </Card>
</section>

  
  
      {/* Accordion */}
    </main>
    );
}

export default LandingPage;


 
