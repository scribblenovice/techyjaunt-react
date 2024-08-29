import React from "react";

const platforms = [
  {
    name: "Tech Cabal",
    image: "https://example.com/image1.png",
    link: "https://techcabal.com/2024/02/27/icp-hub-sahara-empowers-students-at-techyjaunt-event-beyond-the-campus-walls/",
  },
  {
    name: "Techpoint NG",
    image: "https://example.com/image2.png",
    link: "https://techpoint.africa/2024/02/26/icp-hub-sahara-speaks-at-techyjaunts-event-beyond-the-campus-walls-building-a-tech-career-as-a-student/",
  },
  {
    name: "Leadership",
    image: "https://example.com/image3.png",
    link: "https://leadership.ng/2000-unn-students-empowered-in-emerging-tec/",
  },
  {
    name: "Nigerian Tribune",
    image: "https://example.com/image3.png",
    link: "https://tribuneonlineng.com/over-2000-students-empowered-as-tech-outfits-take-training-to-unn/",
  },
  {
    name: "The Cable",
    image: "https://example.com/image3.png",
    link: "https://lifestyle.thecable.ng/tag/emerging-technology/",
  },
  {
    name: "The Independent",
    image: "https://example.com/image3.png",
    link: "https://independent.ng/tech-firm-empowers-over-2000-students-through-training-at-unn/ ",
  },
];

const FeaturePage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-32 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-700">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
