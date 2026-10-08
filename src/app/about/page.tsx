import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <section className="section about-section" style={{ paddingTop: '40px' }}>
        <div className="about-image">
          <img src="/images/about_image_1791467517652.jpg" alt="Give shape to your body" style={{ filter: 'none' }} />
        </div>
        <div className="about-content">
          <h1 style={{ fontSize: '56px', marginBottom: '24px' }}>ABOUT <span className="text-primary">US</span></h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            At SamiZ fitness, we believe that everyone has untapped potential waiting to be unleashed. We are not just a gym; we are a community dedicated to helping you achieve your personal best.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '40px' }}>
            Founded on the principles of hard work, discipline, and expert guidance, our facility provides top-of-the-line equipment and world-class trainers. Whether you're looking to shed pounds, pack on muscle, or improve your overall health, we provide the environment and the knowledge to get you there safely and effectively.
          </p>
          <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '32px', color: 'var(--primary)' }}>5+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '32px', color: 'var(--primary)' }}>10k+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Happy Members</p>
            </div>
            <div>
              <h3 style={{ fontSize: '32px', color: 'var(--primary)' }}>50+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Expert Trainers</p>
            </div>
          </div>
          <Link href="/contact" className="btn btn-primary">Join Our Community</Link>
        </div>
      </section>
    </div>
  );
}
