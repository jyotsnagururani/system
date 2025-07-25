import React from 'react';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css'; 

const images = [
  { src: 'https://picsum.photos/id/1018/600/400/', link: 'https://picsum.photos/id/1018/600/400/' },
  { src: 'https://picsum.photos/id/1015/600/400/', alt: 'Nature 2', link: 'https://picsum.photos/id/1015/600/400/' },
  { src: 'https://picsum.photos/id/1019/600/400/', alt: 'Nature 3', link: 'https://picsum.photos/id/1019/600/400/' },
  { src: 'https://picsum.photos/id/1020/600/400/', alt: 'Nature 4', link: 'https://picsum.photos/id/1020/600/400/' },
  { src: 'https://picsum.photos/id/1021/600/400/', alt: 'Nature 5', link: 'https://picsum.photos/id/1021/600/400/' }
];

const Home = () => (
  <>
    <section className="hero">
      <div className="hero-text">
        <h1>Enabling Entity Towards Connected World</h1>
        <p>
          Zuree Telecom was founded in 2014 by experienced telecom professionals.
          Established as dependable partner for leading service provider in USA
          and looks to expand across fast growing markets in Asia.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <a className="carousel-slide-link" href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt || `Slide ${index + 1}`} />
              <h3>Headlining Hard</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                varius enim in eros elementum tristique.
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className="services-overview">
      <h2>Exploring our tailored services for your business</h2>
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        alt="Quality"
      />
    </section>

    <section className="business-wings">
      <h2>Business Wings</h2>
      <div className="wings-grid">
        <div>IoT Devices & Ecosystem</div>
        <div>Application Development & Services</div>
        <div>Telecom-Design & Transformation</div>
        <div>Boutique Online & Bulk Contract Manufacturing</div>
        <div>Talent Management</div>
      </div>
    </section>

    <section className="highlight-projects">
      <h2>Highlight Projects</h2>
      <div className="projects-grid">
        <div>
          <img src="/images/consultancy.jpg" alt="Consultancy" />
          <p>Innovative Consultancy Website</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/portfolio.jpg" alt="Portfolio" />
          <p>Creative Portfolio</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/corporate.jpg" alt="Corporate" />
          <p>Corporate Website</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/ecommerce.jpg" alt="E-commerce" />
          <p>E-Commerce Platform</p>
          <a href="/projects">Learn More</a>
        </div>
        <div>
          <img src="/images/dashboard.jpg" alt="Dashboard" />
          <p>Analytical Dashboard</p>
          <a href="/projects">Learn More</a>
        </div>
      </div>
      <div className="center-btn">
        <a className="btn" href="/projects">View All Projects</a>
      </div>
    </section>

    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        <div>
          <h4>Company A</h4>
          <p>Zuree delivers on its promises. Great service!</p>
        </div>
        <div>
          <h4>Company B</h4>
          <p>Very innovative and customer focused.</p>
        </div>
        <div>
          <h4>Company C</h4>
          <p>True professionals in telecom and development.</p>
        </div>
      </div>
      <div className="center-btn">
        <a className="btn" href="/testimonials">See All</a>
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
