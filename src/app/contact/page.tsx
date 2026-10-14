"use client";

import { DecoSep } from "@/components/DecoSep";
import { GeoDecoration } from "@/components/GeoDecoration";

export default function ContactPage() {
  return (
    <header className="hero section-block section-block--glow section-block--deep cyan-glow-br">
      <div className="circuit-pattern" />
      <div className="contact-wrap">
        <GeoDecoration variant="contact" />
        <GeoDecoration variant="contact-spin" />

        {/* Data tag */}
        <span className="data-tag" style={{ top: 100, right: 40 }}>
          LINK.CONTACT // 004
        </span>

        <div className="contact-layout">
          <h2 className="section-heading">Get In Touch</h2>
          <DecoSep className="mb-6" />
          <p className="contact-intro">
            Have a question, commission request, or just want to say hi? Drop me a message.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select defaultValue="">
                <option value="" disabled>
                  Select a subject...
                </option>
                <option>Commission inquiry</option>
                <option>Collaboration</option>
                <option>Print request</option>
                <option>Just saying hi</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me what you're thinking..." />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          <p className="contact-note">
            I typically respond within 48 hours. For commission requests, please include references
            and your timeline if possible.
          </p>
        </div>
      </div>
    </header>
  );
}
