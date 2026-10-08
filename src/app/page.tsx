import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <FadeIn direction="up">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-subtitle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              Smart Goals
            </div>
            <h1 className="hero-title">UNLEASH YOUR<br/><span className="text-primary">POTENTIAL</span></h1>
            <p className="hero-desc">
              Join a community where goals are crushed, strength is built, and potential becomes power at SamiZ fitness.
            </p>
            <div className="hero-buttons">
              <Link href="#" className="btn btn-primary">Get Started</Link>
              <Link href="/programs" className="btn btn-outline">Explore Programs</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/hero_image_1791467323557.jpg" alt="Fit man and woman holding dumbbells" className="hero-image" />
          </div>
        </section>
      </FadeIn>

      {/* Programs Section */}
      <FadeIn direction="right">
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">OUR PROGRAMS</h2>
            <p className="section-subtitle">Discover the perfect programs to match your goals and fitness level.</p>
          </div>
          <div className="programs-grid">
            <Link href="/programs" className="program-card">
              <img src="/images/program_1_1791467337228.jpg" alt="Weight Loss" />
              <div className="program-content">
                <h3>WEIGHT LOSS</h3>
                <p>Effective routines combining cardio and strength to shed unwanted fat.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link href="/programs" className="program-card">
              <img src="/images/program_2_1791467352006.jpg" alt="Weight Gain" />
              <div className="program-content">
                <h3>WEIGHT GAIN</h3>
                <p>Structured hypertrophy programs to help you pack on clean muscle mass.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link href="/programs" className="program-card">
              <img src="/images/program_3_1791467380246.jpg" alt="Fat Loss" />
              <div className="program-content">
                <h3>FAT LOSS</h3>
                <p>High-intensity workouts designed to maximize calorie burn and lean out.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link href="/programs" className="program-card">
              <img src="/images/program_4_1791467393798.jpg" alt="Total Fitness" />
              <div className="program-content">
                <h3>TOTAL FITNESS</h3>
                <p>A balanced approach for overall health, endurance, and mobility.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link href="/programs" className="program-card">
              <img src="/images/progress_image_1791467531886.jpg" alt="Personal Training" />
              <div className="program-content">
                <h3>PERSONAL TRAINING</h3>
                <p>One-on-one coaching tailored exactly to your unique goals and schedule.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            <Link href="/programs" className="program-card">
              <img src="/images/about_image_1791467517652.jpg" alt="Cardio" />
              <div className="program-content">
                <h3>CARDIO</h3>
                <p>Heart-pumping sessions to improve cardiovascular health and stamina.</p>
              </div>
              <div className="program-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/programs" className="btn btn-outline">View All Programs Detail</Link>
          </div>
        </section>
      </FadeIn>

      <FeedbackCarousel />

      {/* About Section */}
      <FadeIn direction="left">
        <section className="section about-section">
          <div className="about-image">
            <img src="/images/about_image_1791467517652.jpg" alt="Give shape to your body" />
          </div>
          <div className="about-content">
            <h2>GIVE SHAPE TO<br/>YOUR BODY</h2>
            <p>
              At <strong style={{ color: 'var(--primary)' }}>SamiZ fitness</strong>, we help you build strength, confidence, and lasting habits. With expert coaches and proven programs, we guide you toward your best shape.
            </p>
            <Link href="#" className="btn btn-primary">Explore More</Link>
          </div>
        </section>
      </FadeIn>

      {/* Progress Section */}
      <FadeIn direction="left">
        <section className="section progress-section">
          <div className="progress-image">
            <img src="/images/progress_image_1791467531886.jpg" alt="Get stronger and fitter" />
          </div>
          <div className="progress-content">
            <h2>GET STRONGER AND FITTER WITH OUR EXPERIENCED TRAINERS</h2>
            <p>
              Build strength and confidence with support from our expert trainers, dedicated to your success at SamiZ fitness.
            </p>
            <div className="progress-bars">
              <div className="progress-item">
                <div className="progress-item-header">
                  <span>Fitness Training</span>
                  <span>94%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-item-header">
                  <span>Cardio Training</span>
                  <span>82%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-item-header">
                  <span>Body Building</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Pricing Section */}
      <FadeIn direction="up">
        <section className="section">
          <div className="pricing-header">
            <h2>START YOUR BODY GOAL FROM CHOOSING OUR PACKAGE</h2>
            <p>
              Kickstart your fitness journey with a package tailored to your needs. Whether you are aiming to build strength, lose weight, improve overall wellness, or simply feel more confident in your skin.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-name">Basic Plan</h3>
              <p className="pricing-desc">Great for beginners, a simple and effective access to start building a good habit.</p>
              <div className="pricing-price">
                $299<span>/ month</span>
              </div>
              <Link href="#" className="btn btn-outline">Join Now</Link>
            </div>
            <div className="pricing-card popular">
              <div className="popular-tag">Popular</div>
              <h3 className="pricing-name">Regular Plan</h3>
              <p className="pricing-desc">Great for busy professionals, enhanced workouts, and training to step up your level.</p>
              <div className="pricing-price">
                $399<span>/ month</span>
              </div>
              <Link href="#" className="btn btn-primary">Join Now</Link>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-name">Premium Plan</h3>
              <p className="pricing-desc">Personalized training, premium perks, and elite access for maximum results.</p>
              <div className="pricing-price">
                $599<span>/ month</span>
              </div>
            <Link href="#" className="btn btn-outline">Join Now</Link>
          </div>
        </div>
      </section>
    </FadeIn>
    </>
  );
}
