const Testimonials = () => {
  const testimonials = [
    { name: "Ananya M., Bengaluru", feedback: "GoGetWell helped me build a sustainable health routine without giving up on my favourite foods!" },
    { name: "Rahul S., Delhi", feedback: "With GoGetWell's expert support, I finally achieved my fitness goals. Truly made for Indians!" },
    { name: "Priya R., Mumbai", feedback: "The personalized plans from GoGetWell perfectly fit my busy schedule. Highly recommend it!" },
    { name: "Arjun K., Hyderabad", feedback: "Their approach to wellness is refreshing and practical. I feel healthier and more energetic than ever!" },
    { name: "Sneha T., Chennai", feedback: "GoGetWell's coaching kept me motivated throughout my journey. It's a game changer for anyone serious about their health." },
    { name: "Vikram D., Pune", feedback: "Thanks to GoGetWell, I no longer fear diets. It's all about balance and consistency!" },
    { name: "Neha G., Kolkata", feedback: "Finally found a platform that understands Indian lifestyles and challenges. So grateful for GoGetWell!" },
    { name: "Rohit P., Ahmedabad", feedback: "Within months, I noticed a massive difference in my stamina and mindset. GoGetWell truly delivers." }
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Success Stories from Across India</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="italic mb-4">"{t.feedback}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
