const Career = () => {
    const positions = [
      {
        title: "Senior Recruiter",
        location: "Remote",
        type: "Full-time",
        department: "Talent Acquisition"
      },
      {
        title: "Talent Sourcer",
        location: "New York, NY",
        type: "Full-time",
        department: "Operations"
      },
      {
        title: "HR Consultant",
        location: "London, UK",
        type: "Contract",
        department: "Consulting"
      }
    ];
  
    return (
      <section id="career" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Careers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Grow With <span className="text-indigo-600">Hive Talents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of talent acquisition. Join our mission to connect exceptional 
              talent with transformative opportunities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm group-hover:shadow-md">
                    Apply Now
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">
              Don't see your dream role? We're always interested in meeting exceptional people.
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 shadow-sm">
              Submit General Application
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Career;