import Image from 'next/image';

export default function BlogCardGrid() {
  const posts = [
    {
      tag: "Privacy Test",
      time: "7 min read",
      title: "Inside the Privacy Test: How to Score and Strengthen Your Data Risk Posture",
      description: "A practical guide to using Privacy Tests for identifying risk, improving compliance, and aligning teams around data protection.",
      link: "/blog/privacy-test",
      image: "/images/blog/privacy-test_thumbnail.jpg",
      imageAlt: "Privacy Test for Data Risk Scoring",
    },
    {
      tag: "Synthetic Data",
      time: "5 min read",
      title: "The Role of Synthetic Data in Compliance-First AI Pipelines",
      description: "How synthetic data enables privacy-first AI development in regulated industries.",
      link: "/blog/synthetic-data-compliance-ai",
      image: "/images/blog/synthetic-data_thumbnail.jpg",
      imageAlt: "Synthetic Data in Compliance-First AI",
    },
    {
      tag: "Compliance",
      time: "5 min read",
      title: "Zero-Knowledge Proofs",
      description:
        "Why They are a Game-Changer for Compliance and Data Privacy",
      link: "/blog/zero-knowledge-proofs",
      image: "/images/blog/zero-knowledge-proofs.jpg",
      imageAlt: "Zero-Knowledge Proofs",

    },
    {
      tag: "Homomorphic Encryption",
      time: "9 min read",
      title: "How Homomorphic Encryption Is Reshaping Enterprise Data Privacy",
      description:
        "Best Practices for Secure Analytics and AI in Regulated Industries",
      link: "/blog/homomorphic-encryption",
      image: "/images/blog/homomorphic-encryption.jpg",
      imageAlt: "Homomorphic Encryption",

    },
    {
      tag: "Anonymization",
      time: "10 min read",
      title: "What Is Data Anonymization?",
      description:
        "Guide for Enterprises, Regulators, and AI Teams",
      link: "/blog/enterprise-data-anonymization",
      image: "/images/data-anonymization.jpg",
      imageAlt: "Data Anonymization",

    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="poppins-semibold">Latest Articles</h2>
          </div></div>


        <div className="row">
          {posts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blogCard h-100 shadow-sm rounded overflow-hidden">
                <div className="w-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    className="img-fluid w-100"
                    width={350}
                    height={200}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="blogCard-body">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge me-3">{post.tag}</span>
                    <small>{post.time}</small>
                  </div>
                  <h3 className="blogCard-title">{post.title}</h3>
                  <p className="blogCard-text mb-3">{post.description}</p>
                  <a href={post.link} className="blogLink text-decoration-none">
                    Read more <i className="bi bi-arrow-right-short"></i>
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
