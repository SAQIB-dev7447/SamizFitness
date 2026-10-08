import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="container" style={{ paddingBottom: '100px' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="38" stroke="#F5B041" strokeWidth="2"/>
            <path d="M14 12C14 10.9 13.1 10 12 10H8C6.9 10 6 10.9 6 12V16C6 17.1 6.9 18 8 18H12V22H6V24H12C13.1 24 14 23.1 14 22V18C14 16.9 13.1 16 12 16H8V12H14Z" fill="#F5B041"/>
            <circle cx="26" cy="14" r="4" fill="#FFFFFF"/>
            <path d="M22 20C22 17.8 23.8 16 26 16C28.2 16 30 17.8 30 20V28H22V20Z" fill="#FFFFFF"/>
          </svg>
          <div className="logo-text">
            <span className="logo-samiz">SamiZ</span>
            <span className="logo-fitness">fitness</span>
          </div>
        </div>
        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/programs" className="active">Programs</Link>
          <Link href="/#schedule">Schedule</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact Us</Link>
        </div>
        <button className="btn btn-primary">Join Now</button>
      </nav>

      {/* Programs Page Header */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="section-header">
          <h1 className="section-title" style={{ fontSize: '64px' }}>OUR <span className="text-primary">PROGRAMS</span></h1>
          <p className="section-subtitle" style={{ fontSize: '18px', maxWidth: '600px' }}>
            Explore our specialized fitness programs designed to help you reach your goals. From weight management to strength building, SamiZ fitness has a path for you.
          </p>
        </div>
      </section>

      {/* Programs Detailed List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        {/* Weight Loss */}
        <div className="about-section">
          <div className="about-image">
            <img src="/images/program_1_1791467337228.jpg" alt="Weight Loss" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>WEIGHT LOSS</h2>
            <p>
              Our Weight Loss program combines high-intensity interval training (HIIT), sustainable nutritional guidance, and dedicated cardiovascular routines to help you shed unwanted fat effectively and safely. You will work closely with trainers who understand the science of fat loss.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>Customized meal plans</li>
              <li style={{ marginBottom: '10px' }}>High-calorie burn workouts</li>
              <li style={{ marginBottom: '10px' }}>Progress tracking and weekly check-ins</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        {/* Weight Gain */}
        <div className="about-section" style={{ flexDirection: 'row-reverse' }}>
          <div className="about-image">
            <img src="/images/program_2_1791467352006.jpg" alt="Weight Gain" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>WEIGHT GAIN</h2>
            <p>
              Struggling to pack on size? The Weight Gain program focuses on structured hypertrophy, progressive overload, and caloric surplus strategies. We guide you through the heavy lifting required to build clean, dense muscle mass without unnecessary fat gain.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>Hypertrophy-focused lifting routines</li>
              <li style={{ marginBottom: '10px' }}>Nutritional advice for clean bulking</li>
              <li style={{ marginBottom: '10px' }}>Form correction for heavy compound movements</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        {/* Fat Loss */}
        <div className="about-section">
          <div className="about-image">
            <img src="/images/program_3_1791467380246.jpg" alt="Fat Loss" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>FAT LOSS</h2>
            <p>
              Different from general weight loss, our Fat Loss program is designed for body recomposition. We aim to preserve your hard-earned muscle while stripping away body fat to reveal a toned, defined physique. Expect a mix of resistance training and metabolic conditioning.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>Metabolic conditioning sessions</li>
              <li style={{ marginBottom: '10px' }}>Macro-nutrient balancing</li>
              <li style={{ marginBottom: '10px' }}>Muscle preservation techniques</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        {/* Total Fitness */}
        <div className="about-section" style={{ flexDirection: 'row-reverse' }}>
          <div className="about-image">
            <img src="/images/program_4_1791467393798.jpg" alt="Total Fitness" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>TOTAL FITNESS</h2>
            <p>
              Total Fitness is our holistic approach to health. It isn't just about how you look; it's about how you move and feel. We combine strength, flexibility, mobility, and endurance training to make you functional and injury-proof in your daily life.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>Mobility and flexibility drills</li>
              <li style={{ marginBottom: '10px' }}>Balanced strength and cardio</li>
              <li style={{ marginBottom: '10px' }}>Stress reduction through exercise</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        {/* Personal Training */}
        <div className="about-section">
          <div className="about-image">
            <img src="/images/progress_image_1791467531886.jpg" alt="Personal Training" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>PERSONAL TRAINING</h2>
            <p>
              For the fastest and most efficient results, opt for one-on-one Personal Training. Our certified coaches dedicate 100% of their attention to your form, your goals, and your progression. We customize every single aspect of your fitness journey.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>1-on-1 dedicated coaching</li>
              <li style={{ marginBottom: '10px' }}>Highly personalized workout plans</li>
              <li style={{ marginBottom: '10px' }}>Flexible scheduling</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        {/* Cardio */}
        <div className="about-section" style={{ flexDirection: 'row-reverse' }}>
          <div className="about-image">
            <img src="/images/about_image_1791467517652.jpg" alt="Cardio" style={{ filter: 'none' }} />
          </div>
          <div className="about-content">
            <h2>CARDIO</h2>
            <p>
              Boost your stamina and heart health with our dedicated Cardio programs. Whether you prefer running, cycling, rowing, or intense interval circuits, we provide structured routines to push your cardiovascular system safely and effectively.
            </p>
            <ul style={{ marginBottom: '30px', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>Endurance building routines</li>
              <li style={{ marginBottom: '10px' }}>Heart rate zone training</li>
              <li style={{ marginBottom: '10px' }}>Group spin and row classes</li>
            </ul>
            <button className="btn btn-primary">Enroll Now</button>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ marginTop: '100px' }}>
        &copy; 2026 SamiZ fitness. All rights reserved.
      </footer>
    </div>
  );
}
