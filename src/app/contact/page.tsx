export default function ContactPage() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <h1 className="section-title">CONTACT <span className="text-primary">US</span></h1>
          <p className="section-subtitle">Have questions or ready to join? Reach out to us below and our team will get back to you.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Get In Touch</h2>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Address</h4>
              <p style={{ color: 'var(--text-muted)' }}>123 Fitness Avenue, Muscle City, NY 10001</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Phone</h4>
              <p style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</p>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>Email</h4>
              <p style={{ color: 'var(--text-muted)' }}>info@samizfitness.com</p>
            </div>
          </div>
          
          <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--surface)', padding: '40px', borderRadius: '16px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff' }} />
              <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff' }} />
              <textarea placeholder="Your Message" rows={5} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff', resize: 'none' }}></textarea>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
