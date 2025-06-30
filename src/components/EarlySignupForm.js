import { useState } from "react";

export default function EarlySignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
    heardFrom: "",
    plan: "",
    message: "",
    betaAccess: false,
    newsletter: true,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "mandaliya@gmail.com",
        subject: "Early Access Signup",
        text: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Use Case: ${formData.useCase}
Plan Interest: ${formData.plan}
Heard From: ${formData.heardFrom}
Message: ${formData.message}
Beta Access: ${formData.betaAccess ? "Yes" : "No"}
Newsletter Opt-In: ${formData.newsletter ? "Yes" : "No"}
        `,
        userEmail: formData.email,
        userName: formData.name,
        type: "early-signup",
      }),
    });

    if (response.ok) {
      setStatus("Thanks! You are on the early access list.");
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        useCase: "",
        heardFrom: "",
        plan: "",
        message: "",
        betaAccess: false,
        newsletter: true,
      });
    } else {
      setStatus("❌ Submission failed. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="poppins-bold mb-3">Sign Up Early & Get Exclusive Access</h2>
      <p className="mb-4">Join our early access list and receive:</p>
      <ul>
        <li>5,000 free privacy processing credits</li>
        <li>Priority access to our private beta</li>
        <li>A 1:1 onboarding call to guide your first integration</li>
      </ul>

      <form className="mt-4 fillForm bs_default" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" value={formData.name} required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Work Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company Name</label>
            <input type="text" name="company" className="form-control" value={formData.company} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Job Title</label>
            <input type="text" name="role" className="form-control" value={formData.role} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Primary Use Case</label>
            <input type="text" name="useCase" className="form-control" value={formData.useCase} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Which plan are you interested in?</label>
            <select name="plan" className="form-select" value={formData.plan} onChange={handleChange}>
              <option value="">Select a plan</option>
              <option value="Startup">Startup</option>
              <option value="Business">Pro</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">How did you hear about us?</label>
            <select name="heardFrom" className="form-select" value={formData.heardFrom} onChange={handleChange}>
              <option value="">Select one</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Referral">Referral</option>
              <option value="Webinar">Webinar</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Message (optional)</label>
            <textarea name="message" className="form-control" rows="3" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <div className="col-12">
            <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" name="betaAccess" checked={formData.betaAccess} onChange={handleChange} />
              <label className="form-check-label">I would like early access to the private beta</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
              <label className="form-check-label">Add me to the newsletter / product updates</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Join Early Access</button>
      </form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}