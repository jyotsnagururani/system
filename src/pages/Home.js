import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";

const heroImages = [
  {
    src: "https://picsum.photos/id/1018/600/400/",
    alt: "Telecommunications tower red-white structure",
    link: "https://picsum.photos/id/1018/600/400/",
  },
  {
    src: "https://picsum.photos/id/1015/600/400/",
    alt: "Close-up cellular antenna tower",
    link: "https://picsum.photos/id/1015/600/400/",
  },
  {
    src: "https://picsum.photos/id/1019/600/400/",
    alt: "Transmission mast near greenery",
    link: "https://picsum.photos/id/1019/600/400/",
  },
  {
    src: "https://picsum.photos/id/1020/600/400/",
    alt: "Antenna cluster telecom tower",
    link: "https://picsum.photos/id/1020/600/400/",
  },
  {
    src: "https://picsum.photos/id/1021/600/400/",
    alt: "Cellular tower with orange dish receivers",
    link: "https://picsum.photos/id/1021/600/400/",
  },
];

const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80",
    alt: "Service 1",
    link: "https://unsplash.com/photos/d5d88e9218df",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=120&q=80",
    alt: "Service 2",
    link: "https://unsplash.com/photos/66273c2fd55f",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=120&q=80",
    alt: "Service 3",
    link: "https://unsplash.com/photos/c5249f4df085",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=120&q=80",
    alt: "Service 4",
    link: "https://unsplash.com/photos/c894fdcc538d",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=120&q=80",
    alt: "Service 5",
    link: "https://unsplash.com/photos/c4788e51af15",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80",
    alt: "Service 6",
    link: "https://unsplash.com/photos/d5d88e9218df",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=120&q=80",
    alt: "Service 7",
    link: "https://unsplash.com/photos/66273c2fd55f",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=120&q=80",
    alt: "Service 8",
    link: "https://unsplash.com/photos/c5249f4df085",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=120&q=80",
    alt: "Service 9",
    link: "https://unsplash.com/photos/c894fdcc538d",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=120&q=80",
    alt: "Service 10",
    link: "https://unsplash.com/photos/c4788e51af15",
  },
];

const duplicatedServiceImages = [...serviceImages, ...serviceImages];

const projects = [
  {
    title: "Innovative Consultancy Website",
    image: "https://source.unsplash.com/featured/?consulting",
    link: "/projects",
  },
  {
    title: "Creative Portfolio",
    image: "https://source.unsplash.com/featured/?portfolio,design",
    link: "/projects",
  },
  {
    title: "Corporate Website",
    image: "https://source.unsplash.com/featured/?corporate",
    link: "/projects",
  },
  {
    title: "E-Commerce Platform",
    image: "https://source.unsplash.com/featured/?ecommerce",
    link: "/projects",
  },
  {
    title: "Analytical Dashboard",
    image: "https://source.unsplash.com/featured/?dashboard,data",
    link: "/projects",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-headline">
            Enabling Entity Towards Connected World
          </h1>
          <p>
            Zuree Telecom was founded in 2014 by experienced telecom
            professionals. Established as dependable partner for leading service
            provider in USA and looks to expand across fast growing markets in
            Asia.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <a
                className="carousel-slide-link"
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
                <h3>Headlining Hard</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="services-overview animated-bg">
        <div className="bg-animation-layer">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
        <h2>Exploring our tailored services for your business</h2>

        <div className="scrolling-images-wrapper">
          <div className="scrolling-images">
            {duplicatedServiceImages.map(({ src, alt, link }, idx) => (
              <a
                href={link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="scrolling-image-link"
                aria-label={alt}
              >
                <img src={src} alt={alt} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="business-wings">
        <h2>Business Wings</h2>
        <div className="wings-grid">
          <div>IoT Devices & Ecosystem</div>
          <div>Application Development & Services</div>
          <div>
            <a
              href="https://zureetelecom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telecom-Design & Transformation
            </a>
          </div>
          <div>
            <a
              href="https://zureediseno.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boutique Online & Bulk Contract Manufacturing
            </a>
          </div>
          <div>Talent Management</div>
        </div>
      </section>

      <section className="highlight-projects">
        <h2 className="projects-heading">Highlight Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <p>{project.title}</p>
              <a href={project.link}>Learn More</a>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <a className="btn" href="/projects">
            View All Projects
          </a>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          freeMode={true}
          className="testimonial-swiper"
        >
          <SwiperSlide>
            <div className="testimonial-card">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt="Client A"
                className="testimonial-photo"
              />
              <h4>Company A</h4>
              <p>Zuree delivers on its promises. Great service!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img
                src="https://i.pravatar.cc/80?img=2"
                alt="Client B"
                className="testimonial-photo"
              />
              <h4>Company B</h4>
              <p>Very innovative and customer focused.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img
                src="https://i.pravatar.cc/80?img=3"
                alt="Client C"
                className="testimonial-photo"
              />
              <h4>Company C</h4>
              <p>True professionals in telecom and development.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <img
                src="https://i.pravatar.cc/80?img=4"
                alt="Client D"
                className="testimonial-photo"
              />
              <h4>Company D</h4>
              <p>Always helpful and technically sound.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="center-btn">
          <a className="btn" href="/testimonials">
            See All
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
