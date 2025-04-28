const HowItWorks = () => {
  const steps = [
    "Create your profile and set wellness goals.",
    "Receive AI-curated health plans suited for Indian routines.",
    "Track your daily progress with smart insights.",
    "Get personalized recommendations based on your preferences and habits.",
    "Join a community of like-minded individuals for motivation and support.",
    "Review your progress with monthly reports and adjust your goals accordingly."
  ];

  return (
    <section className="py-16 bg-blue-100 text-center">
      <h2 className="text-4xl font-bold mb-12">How It Works</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
        Achieving your wellness goals is now easier than ever with our AI-powered platform. Follow these simple steps to get started on your journey to better health:
      </p>
      <ol className="list-decimal list-inside text-lg max-w-xl mx-auto space-y-6">
        {steps.map((step, idx) => (
          <li key={idx} className="text-gray-800">
            {step}
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          By following these steps, you will have a fully personalized experience that adapts to your lifestyle. Whether you are looking to improve your fitness, eat healthier, or just feel more energized, our platform has everything you need to succeed.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          Ready to get started? Join now and take the first step towards a healthier you.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
