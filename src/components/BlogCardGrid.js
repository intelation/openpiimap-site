import Image from 'next/image';

export default function BlogCardGrid() {
  const posts = [
    {
      tag: "Tag",
      time: "10 min read",
      title: "What Is Data Anonymization?",
      description:
        "Guide for Enterprises, Regulators, and AI Teams",
      link: "/blog/enterprise-data-anonymization",
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
                    src="/images/data-anonymization.jpg"
                    alt="Blog post thumbnail"
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
