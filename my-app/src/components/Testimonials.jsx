const Testimonials = () => {
    const feedbacks = [
      {
        name: "Emily R.",
        title: "UX Designer",
        message: "Hive Talents m'a permis de trouver une opportunité qui correspondait exactement à mes valeurs et aspirations professionnelles.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "David M.",
        title: "Software Engineer",
        message: "Grâce à Hive Talents, j’ai rejoint une startup qui me passionne. Le processus a été simple et très humain.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Sophie L.",
        title: "HR Manager",
        message: "Le soutien et les conseils de l’équipe Hive Talents m’ont vraiment aidée à faire le bon choix de carrière.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      }
    ];
  
    return (
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block mb-3 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce qu’ils disent de <span className="text-indigo-600">Hive Talents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos talents partagent leur expérience avec notre accompagnement et les opportunités qu’ils ont trouvées.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={feedback.avatar}
                    alt={feedback.name}
                    className="w-14 h-14 rounded-full object-cover border border-indigo-200"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {feedback.name}
                    </h3>
                    <p className="text-sm text-gray-500">{feedback.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{feedback.message}</p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  