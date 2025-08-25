import React, { useEffect, useRef, useState } from "react";
import course_img from "../../assets/images/ai-academy_img1.jpg";

const reviews = [
  {
    id: 1,
    name: "Alex Aklson",
    role: "Senior Data Scientist, IBM",
    review:
      "This course gave me a solid foundation in data analytics. Highly recommend it to beginners!",
    image: course_img,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Business Analyst",
    review:
      "The hands-on approach and real-world projects helped me land a job in analytics.",
    image: course_img,
  },
  {
    id: 3,
    name: "Jack Smith",
    role: "Data Analyst",
    review:
      "The hands-on approach and real-world projects helped me land a job in analytics.",
    image: course_img,
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Software Engineer",
    review:
      "The hands-on approach and real-world projects helped me land a job in analytics.",
    image: course_img,
  },
  {
    id: 5,
    name: "Bob Jonas",
    role: "Data Engineer",
    review:
      "The hands-on approach and real-world projects helped me land a job in analytics.",
    image: course_img,
  },
];

export default function LearnerReviews() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = useResponsiveCards();

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(reviews[(startIndex + i) % reviews.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsPerView) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [startIndex, cardsPerView]);

  return (
    <div className="w-full bg-white py-12 px-4 md:px-16 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Learners Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        {getVisibleReviews().map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{review.review}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Hook to adjust number of cards per view based on screen size
function useResponsiveCards() {
  const [cards, setCards] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCards(1); // mobile
      else if (width < 1024) setCards(2); // tablet
      else setCards(3); // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  return cards;
}
