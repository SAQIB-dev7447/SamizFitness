export default function SchedulePage() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <h1 className="section-title">OUR <span className="text-primary">SCHEDULE</span></h1>
          <p className="section-subtitle">Plan your week and book your favorite classes. Our comprehensive schedule ensures there's a time for everyone.</p>
        </div>
        <div className="schedule-tabs">
          <button className="schedule-tab active">Classes</button>
          <button className="schedule-tab">Flexibility</button>
          <button className="schedule-tab">Cardio</button>
          <button className="schedule-tab">HIIT</button>
          <button className="schedule-tab">Bodybuilding</button>
          <button className="schedule-tab">Crossfit</button>
        </div>
        <div className="schedule-grid">
          <div className="schedule-row">
            <div className="schedule-day">Monday</div>
            <div className="schedule-slots">
              <div className="schedule-slot">9:00am - 10:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Crossfit</span></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot">11:00am - 12:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Bodybuilding</span></div>
              <div className="schedule-slot">5:00pm - 6:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>HIIT</span></div>
              <div className="schedule-slot">8:00pm - 9:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Cardio</span></div>
            </div>
          </div>
          <div className="schedule-row">
            <div className="schedule-day">Tuesday</div>
            <div className="schedule-slots">
              <div className="schedule-slot"></div>
              <div className="schedule-slot">10:00am - 11:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Flexibility</span></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot">8:00pm - 9:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Crossfit</span></div>
            </div>
          </div>
          <div className="schedule-row">
            <div className="schedule-day">Wednesday</div>
            <div className="schedule-slots">
              <div className="schedule-slot">9:00am - 10:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>HIIT</span></div>
              <div className="schedule-slot">10:00am - 11:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Cardio</span></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot">5:00pm - 6:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Bodybuilding</span></div>
              <div className="schedule-slot">8:00pm - 9:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Crossfit</span></div>
            </div>
          </div>
          <div className="schedule-row">
            <div className="schedule-day">Thursday</div>
            <div className="schedule-slots">
              <div className="schedule-slot">9:00am - 10:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Flexibility</span></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot">11:00am - 12:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>HIIT</span></div>
              <div className="schedule-slot">5:00pm - 6:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Cardio</span></div>
              <div className="schedule-slot"></div>
            </div>
          </div>
          <div className="schedule-row">
            <div className="schedule-day">Friday</div>
            <div className="schedule-slots">
              <div className="schedule-slot">9:00am - 10:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Crossfit</span></div>
              <div className="schedule-slot"></div>
              <div className="schedule-slot">11:00am - 12:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Bodybuilding</span></div>
              <div className="schedule-slot">5:00pm - 6:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>HIIT</span></div>
              <div className="schedule-slot"></div>
            </div>
          </div>
          <div className="schedule-row">
            <div className="schedule-day">Saturday</div>
            <div className="schedule-slots">
              <div className="schedule-slot">9:00am - 10:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>HIIT</span></div>
              <div className="schedule-slot">10:00am - 11:00am<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Cardio</span></div>
              <div className="schedule-slot">11:00am - 12:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Flexibility</span></div>
              <div className="schedule-slot">5:00pm - 6:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Bodybuilding</span></div>
              <div className="schedule-slot">8:00pm - 9:00pm<br/><span style={{color:'var(--primary)', fontSize:'12px'}}>Crossfit</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
