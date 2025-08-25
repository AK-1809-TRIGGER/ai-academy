const WhyEnroll = ({ course }) => {
  const data = course.whyEnroll;

  if (!data) return null;

  const isSpecialization = course.type === "Specialization";

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {data.title}
      </h2>

      {isSpecialization ? (
        // ----- Specialization UI -----
        <div className="text-justify space-y-6 text-gray-700">
          {data.paragraphs?.map((text, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {text}
            </p>
          ))}

          {data.image && (
            <div className="flex justify-center my-10">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="rounded-lg shadow-lg w-[500px] h-[300px] object-cover"
              />
            </div>
          )}

          {data.content?.map((text, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      ) : (
        // ----- Course UI -----
        <div className="text-justify space-y-6 text-gray-700">
          {data.paragraphs?.map((text, index) => (
            <p key={index} className="text-base md:text-lg leading-relaxed">
              {text}
            </p>
          ))}

          <div className="flex justify-center mt-10">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
              Enroll Now 🚀
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyEnroll;
