import React from 'react';

const Page1 = () => {
  return (
    <div>
    
    <div className="min-h-screen bg-customBlue flex items-center justify-center ">
      <div className="container mx-auto px-4">
        <div className="mx-16 flex flex-col md:flex-row items-center justify-between">
          {/* Text and Button Section */}
          <div className="mt-0 text-center md:text-left text-white md:w-1/2 mb-8 md:mb-0">

            <p className="text-2xl text-center md:text-4xl font-bold">Unleash Your Potential:</p>
            <p className="text-2xl text-center md:text-4xl font-bold mt-2">Discover, Learn, and Excel with </p>
            <p className="text-2xl text-center md:text-4xl font-bold mt-2">SageNest </p>
            <p className="mt-4 text-lg text-center mt-12 ">CONNECT. LEARN. GROW</p>
            <div className='mt-4 text-lg text-center mt-12 '>

            <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">
              Get Started Today
            </button>


            </div>
            
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:w-2/3">
            <img
              src="./Page1.jpg" // Change this to your image path
              alt="Learning platform illustration"
              className="w-full max-w-lg md:max-w-md lg:max-w-lg"
            />
          </div>
          
        </div>
        
      </div>
      
    </div>

    <div className=" mb-4 mt-4 md:mb-8 mx-16 h-8 flex flex-col md:flex-row ">
      <div className="md:border-r-2 w-full text-center text-2xl ">Expert Opportunities</div>
      <div className='w-full text-center text-2xl'>Learner Opportunities</div>
    </div>
      
    </div>
  );
};

export default Page1;
