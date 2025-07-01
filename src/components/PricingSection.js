import Link from "next/link";

export default function PricingSection() {
  const tiers = [
    {
      title: "Starter",
      subtitle: "For small teams starting their privacy journey",
      features: [
        {
          category: "Core Capabilities",
          items: [
            "Protects sensitive data as it flows through systems",
            "Supports essential compliance reporting",
            "Provides secure storage for critical information"
          ]

        },
        {
          category: "Support and Integration",
          items: [
            "Setup and integration guidance",
            "Email support with 24-hour response"
          ]
        },
        {
          category: "Designed for",
          items: [
            "Teams exploring privacy workflows",
            "Organizations starting compliance"
          ]
        }
      ],
      cta: {
        text: "Request Quote",
        link: "/contact"
      }
    },
    {
      title: "Pro",
      subtitle: "For growing teams handling more data",
      features: [
        {
          category: "Core Capabilities",
          items: [
            "Enables scalable data privacy across larger volumes",
            "Supports advanced compliance and reporting needs",
            "Facilitates secure, privacy-preserving data analysis",
            "Allows flexible integration with enterprise systems"
          ]

        },
        {
          category: "Support and Integration",
          items: [
            "Priority email and consultation support",
            "Advanced integration assistance"
          ]
        },
        {
          category: "Designed for",
          items: [
            "Teams scaling data privacy and compliance efforts",
            "Organizations handling higher data volumes and batch processing",
            "Companies enhancing collaboration and data governance"
          ]
        }
      ],
      cta: {
        text: "Request Quote",
        link: "/contact"
      }
    },
    {
      title: "Enterprise",
      subtitle: "For large-scale, complex data privacy needs",
      features: [
        {
          category: "Core Capabilities",
          items: [
            "Delivers enterprise-scale data privacy and protection",
            "Ensures compliance with complex global regulations",
            "Supports seamless collaboration and integration across systems",
            "Provides comprehensive data privacy and risk management tools"
          ]

        },
        {
          category: "Support and Integration",
          items: [
            "Dedicated compliance consultation",
            "Priority SLA-backed support"
          ]
        },
        {
          category: "Designed for",
          items: [
            "Enterprises with complex data workflows",
            "Highly regulated sectors"
          ]
        }
      ],
      cta: {
        text: "Request Quote",
        link: "/contact"
      }
    }



  ];

  return (
    <section className="py-5">
      <div className="container text-center pricing-section">
        <h2 className="mb-4">Our Plans</h2>
        <p>
          Choose the tier that matches your organization’s privacy goals, or request a custom plan tailored to your needs.
        </p>
        <div className="row justify-content-center">
          {tiers.map((tier, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="tires h-100 p-4 d-flex flex-column bs_default">
                <div className="tires-body d-flex flex-column align-items-center flex-grow-1 w-100">
                  <p className="tires-subtitle mb-3">{tier.subtitle}</p>
                  <h3 className="tires-title mt-4 mb-4 priceAmount">{tier.title}</h3>
                  <div className="mb-4 priceFeatures text-start w-100">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="mb-3 mt-3">
                        <h4 className="fCatHeading">{feature.category}</h4>
                        <ul className="list-unstyled">
                          {feature.items.map((item, j) => (
                            <li key={j} className="mb-2">
                              <i className="bi bi-check-lg"></i><p>{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link className="btn btn-primary text-center mt-auto" href={tier.cta.link}>
                    {tier.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
