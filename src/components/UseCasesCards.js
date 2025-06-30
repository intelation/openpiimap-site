import Image from 'next/image';

export default function UseCasesCards() {
  const useCases = [
    {
      title: "Healthcare",
      image: "/images/healthcare.png",
      description:
        "Intelation empowers healthcare providers, researchers, and insurers to protect patient data, drive AI innovation, and comply with regulations like HIPAA, GDPR, and the EU AI Act — from real-time anonymization and encryption to federated learning and synthetic data.",
      link: "/use-cases/healthcare"
    },
    {
      title: "Finance",
      image: "/images/finance1.webp",
      description:
        "Intelation enables financial organizations to protect sensitive data, drive innovation, and meet compliance with GDPR, PCI-DSS, and CCPA — through real-time data privacy, synthetic data generation, federated learning, and advanced compliance tools.",
      link: "/use-cases/finance"
    },
    {
      title: "Legal",
      image: "/images/legal.webp",
      description:
        "Intelation empowers legal teams to maintain confidentiality, streamline compliance, and enable secure collaboration — using privacy-enhancing technologies like homomorphic encryption, zero-knowledge proofs, synthetic legal data, and compliance monitoring.",
      link: "/use-cases/legal"
    },
    {
      title: "AI & Machine Learning",
      image: "/images/ai.webp",
      description:
        "Intelation helps AI and ML teams build innovative models with privacy, security, and compliance — featuring differential privacy, homomorphic encryption, synthetic data generation, federated learning, and blockchain-based audit trails.",
      link: "/use-cases/ai"
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="poppins-semibold">Use Cases</h2>
            <p className="poppins-regular">
              Intelation supports data privacy, security, and compliance across regulated industries — with real-time privacy controls, federated learning, synthetic data, homomorphic encryption, and advanced compliance solutions.
            </p>
          </div>
        </div>

        <div className="row">
          {useCases.map((useCase, index) => (
            <div className="col-md-4  mb-4" key={index}>
              <div className="blogCard h-100 overflow-hidden bs_default">
                <div className="w-100">
                  <Image
                    src={useCase.image}
                    alt={`${useCase.title} Use Case`}
                    className="img-fluid w-100"
                    width={400}
                    height={266}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="blogCard-body">
                  <h3 className="blogCard-title">{useCase.title}</h3>
                  <p className="blogCard-text mb-3">{useCase.description}</p>
                  <a href={useCase.link} className="blogLink text-decoration-none">
                    Learn more <i className="bi bi-arrow-right-short"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
