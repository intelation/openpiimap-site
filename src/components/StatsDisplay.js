export default function StatsDisplay() {
    const stats = [
      {
        title: "Short heading goes here",
        value: "50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Short heading goes here",
        value: "50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Short heading goes here",
        value: "50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Short heading goes here",
        value: "50%",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];
  
    return (
      <section className="py-5">
        <div className="container statsDisplay">
          <div className="row align-items-start">
            {/* Left Column - Text Content */}
            <div className="col-md-4 mb-4">
              <p className="mb-3">Stats Data Display</p>
              <h2 className="mb-3">Heading goes here</h2>
              <p className="mb-4 me-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo
                diam libero vitae erat.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-primary">
                  Read more <i className="bi bi-arrow-right-short"></i>
                </a>
                <a href="#" className="btn btn-link">
                  Read more <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </div>
  
            {/* Right Column - Stats Cards */}
            <div className="col-md-8">
              <div className="row">
                {stats.map((stat, index) => (
                  <div className="col-md-6 mb-4 statsCard " key={index}>
                    <div className="p-4 rounded h-100 inner bs_default mt-0">
                      <p className="statTitle">{stat.title}</p>
                      <p className="my-3 text-end statValue">{stat.value}</p>
                      <p className="mb-0 text-end statDes">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  