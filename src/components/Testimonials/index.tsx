import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Krishna",
    designation: "Mumbai",
    content:
      "This site changed my financial outlook completely! The resources are practical and easy to apply. Best ₹99 I ever spent!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Hardik Singh",
    designation: "Bangalore",
    content:
      "I’ve discovered new income streams and have finally started saving consistently. Highly recommend!",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Amit T",
    designation: "Founder @ Trorex",
    content:
      "The tools and advice were exactly what I needed to get my finances in order. A game changer",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Clients Say"
          paragraph="Our members are so impressed. It's intuitive. It's clean. It's distraction free."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
