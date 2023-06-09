import React, { useState } from "react";

const questions = [
  {
    question: "What kind of tech events does DevFeed cover?",
    answer:
      "DevFeed covers a wide range of tech events, including conferences, meetups, workshops, hackathons, webinars, and panel discussions. We strive to provide a comprehensive overview of events that cater to various areas of technology and expertise.",
  },
  {
    question:
      "How can I stay updated on the latest speakers and topics featured in the newsletter?",
    answer:
      "Our newsletters will provide you with exclusive updates on the latest speakers and topics for upcoming tech events.",
  },
  {
    question: "Can I share the newsletter with my colleagues or friends?",
    answer:
      "Absolutely! We encourage you to share DevFeed's newsletter with your colleagues, friends, and anyone else who might be interested in tech events. You can forward the newsletter email directly to them or direct them to our website to subscribe on their own.",
  },
  {
    question:
      "Can I provide feedback or suggestions to improve DevFeed's newsletter?",
    answer:
      "Yes, we value your feedback and suggestions. We believe in continuous improvement and strive to provide the best possible experience for our subscribers. If you have any feedback, suggestions, or ideas to share, you can contact us through our website or reply to any of our newsletter emails.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active accordion
    } else {
      setActiveIndex(index); // Expand the clicked accordion
    }
  };

  const getIconPath = (index) => {
    return activeIndex === index ? "M18 12H6" : 'M12 6v6m0 0v6m0-6h6m-6 0H6"';
  };

  return (
    <section
      className={activeIndex?"bg-white pt-auto pb-40" : "bg-white pt-auto"}
      style={{ color: "#0D2F3F", fontFamily: "Eudoxus Sans, sans-serif" }}
    >
      <div className="container max-w-3xl px-6 py-10 mx-auto">
        <h1 className="text-5xl font-semibold text-center lg:text-3xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-4">
          {questions.map((ques, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
            >
              <button
                className="flex items-center space-x-3  justify-between w-full p-8 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="font-semibold text-start text-lg">
                  {ques.question}
                </h1>

                <span
                  className={`text-gray-400 bg-gray-200 rounded-full transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={getIconPath(index)}
                    />
                  </svg>
                </span>
              </button>

              <hr className="border-gray-200 dark:border-gray-700" />

              {activeIndex === index && (
                <p className="p-8 text-base">{ques.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
