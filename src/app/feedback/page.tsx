import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function FeedbackPage() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={{ paddingTop: '100px' }}>
        <FeedbackCarousel />
      </div>
      
      <section className="section" style={{ paddingTop: '40px' }}>
        <div style={{ backgroundColor: 'var(--surface)', padding: '40px', borderRadius: '16px', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>Leave Your Feedback</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff' }} />
            <select style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff', appearance: 'none' }}>
              <option value="5">★★★★★ (5 Stars)</option>
              <option value="4">★★★★☆ (4 Stars)</option>
              <option value="3">★★★☆☆ (3 Stars)</option>
              <option value="2">★★☆☆☆ (2 Stars)</option>
              <option value="1">★☆☆☆☆ (1 Star)</option>
            </select>
            <textarea placeholder="Tell us about your experience..." rows={5} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid var(--surface-light)', backgroundColor: 'var(--bg)', color: '#fff', resize: 'none' }}></textarea>
            <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Submit Feedback</button>
          </form>
        </div>
      </section>
    </div>
  );
}
