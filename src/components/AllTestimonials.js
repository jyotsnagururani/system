import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../App.css";
import Footer from "../components/Footer";

const allTestimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, TechNova",
    feedback: "Truly innovative!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO, SoftFlow",
    feedback: "Reliable and fast!",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Alicia Keys",
    role: "Product Manager, BrightCorp",
    feedback: "Very professional!",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Mark Lee",
    role: "CEO, InnoWave",
    feedback: "Fantastic delivery!",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Sophia Ray",
    role: "Lead Designer, Visionary",
    feedback: "Creative excellence!",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 6,
    name: "Liam Wilson",
    role: "Developer, SkyNetix",
    feedback: "Effortless collaboration!",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 7,
    name: "Olivia Chen",
    role: "COO, BrightSpark",
    feedback: "Highly recommend!",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    name: "Ethan Brooks",
    role: "CFO, GreenField",
    feedback: "Great ROI!",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 9,
    name: "Emily Davis",
    role: "UX Expert, PixelCraft",
    feedback: "User-first approach!",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 10,
    name: "Noah Carter",
    role: "Engineer, NexaWorks",
    feedback: "Top-tier service!",
    photo: "https://randomuser.me/api/portraits/men/73.jpg",
  },
];

function AllTestimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section all-testimonials">
        <h2 className="testimonial-heading">Testimonials</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          freeMode={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {allTestimonials.map(({ id, name, role, feedback, photo }) => (
            <SwiperSlide key={id}>
              <div
                className="testimonial-card hover-zoom"
                onClick={() => window.open(photo, "_blank")}
              >
                <img src={photo} alt={name} className="testimonial-photo" />
                <h4>{name}</h4>
                <p>
                  <em>{role}</em>
                </p>
                <p>"{feedback}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
}

export default AllTestimonials;
