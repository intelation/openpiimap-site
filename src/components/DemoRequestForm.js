import { useState } from "react";

export default function DemoRequestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                to: "mandaliya@gmail.com", // Change this to your recipient email
                subject: "Demo Request",
                text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
                userEmail: formData.email, // ✅ Add this to send receipt
                userName: formData.name, // ✅ Add this for the receipt message
                type: "demo",
            }),
        });

        if (response.ok) {
            setStatus("Your request has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send request. Please try again.");
        }
    };


    return (
        <div className="poppins-regular">

            <form onSubmit={handleSubmit}>
                <div className="row">

                    <div className="col-md-6">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-12">
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            className="form-control message mb-1"
                            onChange={handleChange}
                            required
                        />
                        <button className="mt-3 btn btn-primary" type="submit">Send Request</button>
                    </div>
                </div>

            </form>
            {status && <p className="mt-3">{status}</p>}
        </div>
    );
}
