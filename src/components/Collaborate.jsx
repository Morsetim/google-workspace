import React from 'react';

const features = [
  {
    title: "Capture meeting notes with ease and speed",
    description: "Draft polished, structured meeting notes with event details straight from a Google Calendar event using the meeting notes building block in Docs.",
    image: "https://lh3.googleusercontent.com/y_4VeMjavELlX-GlbKDRCpNGq4fjbxmOja1Xc4RkyUmP_hG1ZC_C8OArcTfq6TCEJJ9U-QeWbN5-7kOOWonz5xxYDR4m0hy3Yzroiw=e365-pa-nu-rw-w739", // Replace with your actual image path
    alt: "Meeting notes interface"
  },
  {
    title: "Streamline your workflows with electronic signatures",
    description: "Draft agreements, request signatures, and manage contract templates all in one place with eSignature in Docs.",
    image: "https://lh3.googleusercontent.com/l-wUNXL1ueMaNZQm4eRUH3YpgF2qilKttsxwCiU_1IoEWCDGILILk2c3Z5a0zvNjYYQOOItQMDNESALokkIGu_vTr-92ADY2wzs=e365-pa-nu-rw-w739",
    alt: "eSignature interface"
  },
  {
    title: "Save time by easily adding content you reuse often",
    description: "Create a custom building block for pieces of text like a bio, signature, address, and more - simply type '@' to insert instead of endlessly copying and pasting the same content.",
    image: "https://lh3.googleusercontent.com/zA4grN6AtqMLOC1vhdP-PYDRrcjFQYKOk6abOFcHgrWdJHG5rw_14O2RU9_f3SvJ6TaWJ8tFGU4z1KG5OIbftzs7v0fsa7JhwsI-=e365-pa-nu-rw-w739",
    alt: "Custom building blocks menu"
  }
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Accelerate everyday tasks
        </h2>
        <p className="text-gray-600 mb-12">
          Get more done without having to leave Docs.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="w-full bg-gray-50 rounded-xl border border-gray-100 overflow-hidden mb-8 shadow-sm transition-transform hover:scale-105 duration-300">
                <img 
                  src={feature.image} 
                  alt={feature.alt}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="px-2">
                <h3 className="text-xl font-medium text-gray-900 mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;