import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const LandingPage = () => {
  return (
    <main>
      <section className="text-center py-20">
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
  
      {/* banner */}
  
      <section>
        {/* cards */}
      </section>
  
  
      {/* Accordion */}
    </main>
    );
}

export default LandingPage;


 
