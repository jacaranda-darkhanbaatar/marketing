const Features = () => {
  const features = [
    {
      image: "images/features-icon-1.svg ",
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
    <div id="features" className="container mx-auto max-w-6xl">
      <div className="grid sm:grid-cols-3 gap-y-14 gap-x-7 px-8 sm:text-center">
        {features.map((feature) => (
          <div className="  bg-sky-50 text-center rounded-2xl p-10">
            <div className="flex  justify-center">
              <img src={feature.image} alt={feature.title} className="h-20  " />
            </div>
            <div >
              <h5 className="font-bold">{feature.title}</h5>
              <p className="mb-4">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
