import React from 'react'

const Hero = () => {
  return (
    <section 
      className="relative w-full pt-24 pb-16 px-4 bg-[url('/images/offshore/offshore-banner.jpg')] bg-cover bg-center"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto rounded-lg p-6">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pricing That Matches Your Hiring Needs
          </h2>
          
          {/* Description Text */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              India isn&apos;t a one-size-fits-all hiring market. Your hiring cost depends on your preferences, whether you need an engineer from a top university, a startup-ready builder, or an AI expert.
            </p>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Instead of fixed pricing, we&apos;ve created preference-based personas that reflect the most common hiring needs. Pick the persona that fits your company&apos;s requirements, and we&apos;ll match you with the right talent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
