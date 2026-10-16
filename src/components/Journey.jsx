
import { journey } from "../data/journey";
import "../css/Journey.css";

function Journey() {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div className="section-heading">
          <span className="journey-eyebrow">MY DEVELOPMENT STORY</span>
          <h2>
            My Developer <span className="gradient-text">Journey</span>
          </h2>
          <p>
            Every project teaches me something new. Here is how I'm growing
            as a developer, one step at a time.
          </p>
        </div>

        <div className="journey-timeline">
          {journey.map((item, index) => (
            <article
              className={`journey-item ${
                index % 2 === 0 ? "journey-left" : "journey-right"
              }`}
              key={item.id}
            >
              <div className="journey-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="journey-card glass-card">
                <span className="journey-period">{item.period}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                {item.technologies?.length > 0 && (
                  <div className="journey-technologies">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
