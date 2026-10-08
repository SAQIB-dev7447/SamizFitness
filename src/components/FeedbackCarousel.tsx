"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import FadeIn from './FadeIn';

const feedbacks = [
  { name: "John Doe", text: "SamiZ fitness changed my life! The trainers are top notch and the energy is unmatched.", role: "Member for 2 years" },
  { name: "Sarah Smith", text: "The cardio programs here are intense but exactly what I needed to break my plateau.", role: "Member for 6 months" },
  { name: "Mike Johnson", text: "Love the 24/7 access and the crossfit community. Best decision I made for my health.", role: "Member for 1 year" },
  { name: "Emily Chen", text: "Best gym I've ever joined. The atmosphere is incredible and always motivating.", role: "Member for 3 years" },
  { name: "David Wilson", text: "The weight gain program helped me put on 15lbs of solid muscle safely.", role: "Member for 8 months" },
];

export default function FeedbackCarousel() {
  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <FadeIn direction="up">
        <div className="section-header">
          <h2 className="section-title">MEMBER <span className="text-primary">FEEDBACK</span></h2>
          <p className="section-subtitle">Hear what our community has to say about their journey with us.</p>
        </div>
      </FadeIn>
      
      <FadeIn direction="up" delay={0.2}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="feedback-swiper"
          style={{ paddingBottom: '50px' }}
        >
          {feedbacks.map((fb, idx) => (
            <SwiperSlide key={idx} style={{ height: 'auto' }}>
              <div style={{ backgroundColor: 'var(--surface)', padding: '30px', borderRadius: '16px', height: '100%', border: '1px solid var(--surface-light)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '5px', color: '#F5B041', marginBottom: '15px' }}>
                  ★ ★ ★ ★ ★
                </div>
                <p style={{ fontSize: '16px', color: '#fff', marginBottom: '20px', fontStyle: 'italic', flex: 1 }}>"{fb.text}"</p>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>{fb.name}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{fb.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </FadeIn>
    </section>
  );
}
