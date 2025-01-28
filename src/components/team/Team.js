import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="team-area pt-20 pb-80 bg-f9f6f6">
      <div className="container mx-auto">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-bold">Leadership Team</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="single-team bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-start">
                <div className="team-image !mt-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="responsive"
                    width={300} // Set width according to your design
                    height={200} // Set height according to your design
                    className="object-cover" // Optional: to maintain aspect ratio
                  />
                </div>
                <div className="team-content px-4">
                  <div className="team-info mb-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <span className="text-gray-600">{member.position}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{member.description}</p>
                  <div className="mt-3">
                    <Image
                      src={"/images/logos/linked-in.svg"}
                      alt="LinkedIn Logo"
                      width={24} // Adjust size as needed
                      height={24} // Adjust size as needed
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data for team members
const teamMembers = [
  {
    name: "Rajat Jain",
    position: "Chief Executive Officer (CEO)",
    description:
      "Seasoned technology expert with over 10 years of expertise possessing a unique blend of technical and digital marketing skills to drive business growth and innovation.",
    image: "/images/logos/Rajat.jpg",
  },
  {
    name: "Bhavya Jain",
    position: "Chief Operating Officer (COO)",
    description:
      "COO with 8 years of experience in software and marketing. A key member of the leadership team, adept at enhancing operations and strategic initiatives, leveraging technology to optimize processes and drive innovation.",
    image: "/images/logos/bhavya.webp",
  },
  {
    name: "MVL Narayana",
    position: "Chief Technology Officer (CTO)",
    description:
      "With more than 12 years of experience in all phases of the application development lifecycle, he is recognised for his proficiency in managing, maintaining, and evolving software products, as well as for mentoring and leading teams to achieve success.",
    image: "/images/logos/narayana.webp",
  },
];

export default Team;
