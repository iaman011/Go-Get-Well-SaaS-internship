const Features = () => {
  const features = [
    { title: "AI-Powered Health Plans", desc: "Personalized wellness routines based on Indian lifestyle and diets." },
    { title: "Real-Time Tracking", desc: "Monitor your progress easily on your mobile across cities from Mumbai to Chennai." },
    { title: "Certified Experts", desc: "Consult with India's top nutritionists and wellness coaches." },
    { title: "Holistic Wellness Approach", desc: "Our plans integrate physical, mental, and emotional well-being tailored to you." },
    { title: "Localized Meal Plans", desc: "Get meal suggestions that suit your regional preferences, from South Indian to North Indian dishes." },
    { title: "Community Support", desc: "Join a network of like-minded individuals working towards similar health goals." }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Features Tailored for India</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-3xl font-semibold">Experience a Healthier You</h3>
        <p className="mt-4 text-lg">With personalized plans, expert guidance, and a focus on holistic well-being, you’re on your way to a better lifestyle. Get started today!</p>
        
      </div>
    </section>
  );
};

export default Features;
