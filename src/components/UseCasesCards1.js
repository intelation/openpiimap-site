import Image from 'next/image';

export default function UseCasesCards() {
  const useCases = [
    {
      title: "Healthcare",
      image: "/images/healthcare.png",
      content: (
        <>
          <p>Healthcare providers, insurers, and digital health platforms manage large volumes of sensitive patient data — including EHRs, clinical reports, transcripts, and messages. This data is vital for care, research, and innovation, but must meet strict privacy standards like GDPR and HIPAA.</p>
          <p>Intelation enables healthcare teams to anonymize patient data without sacrificing compliance or utility. Using advanced NLP and entity recognition, our system identifies and anonymizes personal identifiers in both structured and unstructured formats.</p>
          <h6>Compliance & Data Sharing</h6>
          <ul>
            <li>Redact PHI in clinical summaries, discharge reports, or disclosures</li>
            <li>Mask sensitive data for third-party vendor collaboration</li>
            <li>Anonymize voice transcripts from telehealth sessions for archiving</li>
          </ul>
          <h6>AI & Research Enablement</h6>
          <ul>
            <li>Encrypt patient identifiers in radiology, pathology, or diagnostic data</li>
            <li>Prepare anonymized datasets for AI model training</li>
            <li>Enable cross-border clinical trial sharing with privacy-preserved data</li>
          </ul>
          <h6>Automation with API</h6>
          <ul>
            <li>Automate real-time anonymization of chatbot and intake system data</li>
            <li>Integrate anonymization into EMRs and workflow pipelines</li>
            <li>Maintain full audit logs for traceability and compliance reviews</li>
          </ul>
        </>
      )
    },
    {
      title: "Finance",
      image: "/images/finance1.webp",
      content: (
        <>
          <p>Financial institutions, fintech startups, and regulatory teams deal with sensitive transactional, personal, and regulatory data every day. From bank statements and loan records to identity verification logs, financial data must be handled with extreme care and full compliance under frameworks like GDPR, PCI-DSS, and CCPA.</p>
          <p>Intelation helps finance teams anonymize sensitive data at scale, without disrupting operations or compromising downstream data utility.</p>
          <h6>Compliance & Risk Reduction</h6>
          <ul>
            <li>Redact account numbers, SSNs, and card details before analysis or sharing</li>
            <li>Anonymize customer identities in audit logs, reports, and exports</li>
            <li>Ensure safe data handling for outsourced analytics or data warehouse integrations</li>
          </ul>
          <h6>Fraud Detection & Modeling</h6>
          <ul>
            <li>Retain behavioral patterns while removing identifiers from transaction logs</li>
            <li>Enable risk scoring and AI fraud detection without exposing real identities</li>
            <li>Share pseudonymized datasets with third-party data science teams</li>
          </ul>
          <h6>Workflow Automation & Integration</h6>
          <ul>
            <li>Apply anonymization to real-time payment flows or customer onboarding</li>
            <li>Integrate with CRMs, banking systems, or regulatory tools via API</li>
            <li>Generate and store compliance-ready logs and data versions</li>
          </ul>
        </>
      )
    },
    {
      title: "Legal",
      image: "/images/legal.webp",
      content: (
        <>
          <p>Law firms, in-house counsel teams, and legaltech platforms manage vast amounts of sensitive information — including case documents, contracts, client communications, and discovery data. Maintaining confidentiality and complying with privacy laws like GDPR, CCPA, and the EU AI Act is critical.</p>
          <p>Intelation helps legal teams anonymize sensitive data quickly and accurately — whether for litigation, regulatory response, or internal review — without disrupting document integrity or workflow systems.</p>
          <h6>Confidentiality & Redaction</h6>
          <ul>
            <li>Automatically redact names, contact details, and case identifiers from legal documents</li>
            <li>Anonymize opposing party or third-party data in discovery</li>
            <li>Safeguard sensitive information during vendor or expert sharing</li>
          </ul>
          <h6>Regulatory & Compliance Support</h6>
          <ul>
            <li>Align with privacy mandates in international litigation (GDPR, CCPA, AI Act)</li>
            <li>Generate audit-ready reports and retention logs</li>
            <li>Apply rulesets specific to regional or court-defined standards</li>
          </ul>
          <h6>Workflow Integration</h6>
          <ul>
            <li>Anonymize documents during upload or indexing</li>
            <li>Integrate with document management or case review platforms</li>
            <li>Process bulk uploads and PDFs using the Intelation API</li>
          </ul>
        </>
      )
    },
    {
      title: "AI & Machine Learning",
      image: "/images/ai.webp",
      content: (
        <>
          <p>Data is the fuel for modern AI models — but using real, sensitive data without proper privacy controls can put organizations at risk. From training language models to analyzing customer behavior, anonymization is key to unlocking safe and scalable AI.</p>
          <p>Intelation enables teams to anonymize high-volume, high-variance datasets while preserving semantic context, structure, and learning potential — across documents, transcripts, logs, and more.</p>
          <h6>Privacy-Preserving AI Training</h6>
          <ul>
            <li>Mask or pseudonymize personal identifiers in datasets used for NLP, CV, and tabular modeling</li>
            <li>Remove sensitive content without distorting underlying structure</li>
            <li>Maintain pattern consistency with synthetic replacements</li>
          </ul>
          <h6>Enterprise Model Development</h6>
          <ul>
            <li>Enable legal and compliant model training on internal data</li>
            <li>Stream anonymized data to fine-tuning pipelines in real time</li>
            <li>Prepare role-based datasets for analysts and data scientists</li>
          </ul>
          <h6>Responsible AI Practices</h6>
          <ul>
            <li>Support data minimization and ethical model usage goals</li>
            <li>Audit anonymization steps to meet governance standards</li>
            <li>Reduce risk of data leakage or bias amplification</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="poppins-semibold">Use Cases</h2>
            <p className="poppins-regular">
              Intelation supports data anonymization across regulated industries — with built-in privacy controls and flexible deployment options.
            </p>
          </div>
        </div>

        <div className="row">
          {useCases.map((useCase, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="blogCard h-100 shadow-sm rounded overflow-hidden">
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
                  <div className="blogCard-text">{useCase.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
