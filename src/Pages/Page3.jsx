const Page3 = () => {
    
    return (
      <div className="bg-blue-50 min-h-screen flex flex-col items-center py-10">
        <div className="mb-8 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-blue-700">For Experts</h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Elevate Your Impact and Grow</h1>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Your Influence</h1>
          <p className="text-gray-600 mt-4">
            Share expertise across borders, offering guidance at a global scale.
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-700">Monetize Your Knowledge</h3>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-700">Build Your Reputation</h3>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-700">Quick and Easy Onboarding</h3>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-700">Deliver Sessions; Anytime, Anywhere</h3>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="h-20 bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-700">Supportive Community</h3>
            <p className="text-gray-600 mt-2">View and manage your sessions from the Calendar.</p>
          </div>
    
          {/* Button card - treated as part of the grid */}
          <div className="rounded-lg p-6 flex py-32">
            <button className="items-center mx-4 h-8 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
              View 
            </button>
            <button className="mx-4 h-8 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    );
    
    
  };
  
  export default Page3;
  