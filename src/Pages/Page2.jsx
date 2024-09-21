import React from 'react';

const Page2 = () => {
  return (
    <div className="bg-gray-100 py-16 ">
      <div className="container mx-auto px-4 lg:px-16  text-center">
        {/* Title and Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why SageNest?</h2>
        <h3 className="text-xl md:text-4xl font-bold text-gray-700 mb-8">
          Revolutionizing Personalized Learning for Everyone
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          SageNest empowers individuals by providing personalized learning experiences tailored to their unique needs,
          goals, and schedules. Whether you are an expert looking to share your knowledge or a learner seeking to
          acquire new skills, SageNest is your gateway to a world of limitless possibilities.
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
        In a world where one-size-fits-all solutions are no longer effective, SageNest offers a platform designed to cater to the individual. We understand that everyone’s learning journey is different, which is why our platform is built on the principles of personalization, flexibility, and connection
        </p>

        {/* Three Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-customBlue  p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Personalized Learning Journeys</h4>
            <p className="text-white">
              SageNest matches learners with experts based on their specific needs, goals, and learning styles, ensuring
              a truly customized educational experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-customBlue p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Empowering Experts</h4>
            <p className="text-white">
              Experts can reach a global audience, share their knowledge, and grow their influence, all while earning
              income on their terms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-customBlue p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-bold text-white mb-4">Flexible and Accessible</h4>
            <p className="text-white">
              With SageNest, learning and teaching are made accessible and flexible, allowing users to manage their
              schedules, set goals, and engage in meaningful learning sessions from anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
