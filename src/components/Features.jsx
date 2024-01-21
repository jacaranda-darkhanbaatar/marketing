const Features = () => {
  const features = [
    {
      image: "images/features-icon-1.svg",
      title: "Platform Integration",
      description:
        "You sales force can use the app on any smartphone platform without compatibility issues",
    },
    {
      image: "images/features-icon-2.svg",
      title: "Easy On Resources",
      description:
        "Works smoothly even on older generation hardware due to our optimization efforts",
    },
    {
      image: "images/features-icon-3.svg",
      title: "Great Performance",
      description:
        "Optimized code and innovative technology insure no delays and ultra-fast responsiveness",
    },
    {
      image: "images/features-icon-4.svg",
      title: "Multiple Languages",
      description:
        "Choose from one of the 40 languages that come pre-installed and start selling smarter",
    },
    {
      image: "images/features-icon-5.svg",
      title: "Free Updates",
      description:
        "Don't worry about future costs, pay once and receive all future updates at no extra cost",
    },
    {
      image: "images/features-icon-6.svg",
      title: "Community Support",
      description:
        "Register the app and get acces to knowledge and ideas from the Pavo online community",
    },
  ];
  return (
    <div id="features">
      <div className="card">
        {features.map((feature) => (
          <div>
            <div>
              <img src={feature.image} alt={feature.title} />
            </div>
            <div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
