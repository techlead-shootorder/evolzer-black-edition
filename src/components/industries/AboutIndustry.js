import React from "react";

const AboutIndustry = ({ heading, challenges }) => {
  return (
    <div className="container pt-20 pb-20 mx-auto">
      <h2 className="text-left pb-5 text-2xl font-bold">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
        {challenges && challenges.map(challenge => (
          <div key={challenge.id} className="mb-4">
            <h3 className="text-3xl text-[#f15a29]">{`0${challenge.number}`}</h3>
            <p className="font-medium">{challenge.sub_heading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutIndustry;
