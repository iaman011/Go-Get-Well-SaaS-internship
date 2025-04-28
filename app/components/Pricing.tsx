const Pricing = () => {
  const plans = [
    { name: "Basic", price: "₹499/month", features: ["Personalized Plan", "Basic Progress Tracking"] },
    { name: "Pro", price: "₹1499/month", features: ["Everything in Basic", "24x7 Health Expert Chat", "Advanced Analytics"] },
    { name: "Premium", price: "₹2999/month", features: ["Everything in Pro", "One-on-One Health Coaching", "Exclusive Content", "Priority Support"] },
    { name: "Enterprise", price: "₹4999/month", features: ["Everything in Premium", "Customizable Plans", "Dedicated Health Expert", "Team Analytics"] },
    { name: "Ultimate", price: "₹9999/month", features: ["Everything in Enterprise", "Unlimited Expert Consultations", "Advanced Personalization", "24/7 Dedicated Support"] }
  ];

  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Affordable Plans for Every Indian</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
