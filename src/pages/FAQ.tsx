import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}
function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleOpen}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-800 hover:text-[#2E8B57]"
        aria-expanded={isOpen}>
        
        <span>{question}</span>
        {isOpen ?
        <ChevronUp className="ml-2 flex-shrink-0" size={20} /> :

        <ChevronDown className="ml-2 flex-shrink-0" size={20} />
        }
      </button>
      {isOpen &&
      <div className="pb-4">
          <div className="text-gray-600">{answer}</div>
        </div>
      }
    </div>);

}
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqItems = [
  {
    question: 'What age can I start learning to drive?',
    answer:
    <p>
          For motorcycles (Category A) and cars (Category B), learners must be
          18 years or older. For commercial vehicles (Category C) you must be
          21+ years, and for heavy vehicles (Category D) you must be 24+ years.
          All learners must have a valid ID or passport.
        </p>

  },
  {
    question: 'Do you provide vehicles for the driving test?',
    answer:
    <p>
          Yes, we provide vehicles for the driving test upon request. We also
          offer test-day preparation sessions to help you feel confident and
          ready for your test. Additional fees may apply for test day vehicle
          use.
        </p>

  },
  {
    question: 'How long does it take to complete a driving course?',
    answer:
    <p>
          Course duration varies depending on the license category and your
          prior experience:
          <br />
          - Category A (Motorcycles): 4-6 weeks
          <br />
          - Category B (Cars): 6-8 weeks
          <br />
          - Category C (Light Commercial): 8-10 weeks
          <br />
          - Category D (Heavy Vehicles): 10-12 weeks
          <br />
          - Tuktuk: 3-4 weeks
          <br />
          <br />
          These timeframes are for students attending regular lessons. The
          duration may be shorter or longer based on individual learning pace
          and lesson frequency.
        </p>

  },
  {
    question: 'What documents do I need to enroll in a driving course?',
    answer:
    <p>
          To enroll in our driving courses, you'll need:
          <br />
          - Original ID card or passport
          <br />
          - Two passport-sized photographs
          <br />
          - Medical certificate (can be obtained through our assistance)
          <br />- Payment for the course fees
        </p>

  },
  {
    question: 'What computer courses do you offer?',
    answer:
    <p>
          We offer a variety of computer courses including:
          <br />
          - Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)
          <br />
          - Basic IT and Computer Fundamentals
          <br />
          - Networking Basics
          <br />
          - Graphic Design Fundamentals
          <br />
          <br />
          Our courses are designed for different skill levels, from beginners to
          advanced users. Contact us for the current schedule and pricing.
        </p>

  },
  {
    question: 'Do you offer payment plans for courses?',
    answer:
    <p>
          Yes, we offer flexible payment plans for our longer courses.
          Typically, you can pay an initial deposit followed by installments
          throughout the course. Please contact our office for specific payment
          plan options for your chosen course.
        </p>

  },
  {
    question: "What's your refund policy?",
    answer:
    <p>
          Course fees are generally non-refundable once classes have begun.
          However, in exceptional circumstances, we may offer partial refunds or
          credit toward future courses. Each case is reviewed individually.
          Please refer to the enrollment agreement for complete details.
        </p>

  },
  {
    question: 'How many students are in each class?',
    answer:
    <p>
          For driving theory classes, we typically have 10-15 students per
          session. Practical driving lessons are one-on-one with an instructor.
          <br />
          <br />
          For computer courses, we maintain small class sizes of 6-10 students
          to ensure each student receives adequate attention and access to
          equipment.
        </p>

  },
  {
    question: 'Do you provide certificates upon completion?',
    answer:
    <p>
          Yes, we provide certificates of completion for all our courses. These
          certificates are recognized locally and can be used as proof of
          training for employment purposes. For driving courses, we also assist
          with the official licensing process through the relevant government
          authorities.
        </p>

  },
  {
    question: 'What printing and design services do you offer?',
    answer:
    <p>
          Our printing and design services include:
          <br />
          - Document printing and photocopying
          <br />
          - Large format printing for posters and banners
          <br />
          - Business cards, letterheads, and brochures
          <br />
          <br />
          - T-shirt printing with custom designs
          <br />
          - Graphic design services
          <br />
          - Binding and lamination
          <br />
          <br />
          Contact us for a quote on your specific printing needs.
        </p>

  }];

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <section className="bg-[#2E8B57] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg">
            Find answers to common questions about our courses, services, and
            policies.
          </p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              {faqItems.map((faq, index) =>
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)} />

              )}
            </div>
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Don't see your question? Contact us directly and we'll be happy
                to help.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button variant="primary" to="/contact">
                  Contact Us
                </Button>
                <Button variant="outline" href="tel:+254117564318">
                  Call +254 117 564 318
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* License Categories Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Driving License Categories
            </h2>
            <p className="mb-8 text-center text-gray-600">
              Understanding the different license categories is essential for
              choosing the right course.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Category A
                </h3>
                <p className="text-gray-600">
                  For motorcycles and three-wheeled vehicles. Minimum age: 18
                  years.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Category B
                </h3>
                <p className="text-gray-600">
                  For motor vehicles with a maximum authorized mass not
                  exceeding 3,500 kg and designed and constructed to carry no
                  more than 8 passengers in addition to the driver. Minimum age:
                  18 years.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Category C
                </h3>
                <p className="text-gray-600">
                  For motor vehicles other than those in Category D, with a
                  maximum authorized mass exceeding 3,500 kg. Minimum age: 21
                  years.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Category D
                </h3>
                <p className="text-gray-600">
                  For motor vehicles designed and constructed for the carriage
                  of more than 8 passengers in addition to the driver (buses,
                  matatus). Minimum age: 24 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#2E8B57] py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Learning?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Enroll in one of our courses today or contact us for more
            information. Our team is ready to answer any questions you may have.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              variant="primary"
              to="/register"
              className="bg-white text-[#2E8B57] hover:bg-gray-100">
              
              Enroll Now
            </Button>
            <Button
              variant="outline"
              to="/contact"
              className="border-white text-white hover:bg-white/10">
              
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>);

}