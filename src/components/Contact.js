import React, { useState } from 'react';

const EmailIcon = () => (
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1h20v16H1V1zm0 0l10 9L21 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1C5.13 1 2 4.13 2 8c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 2.5a2.49 2.49 0 1 1-4.98 0 2.49 2.49 0 0 1 4.98 0zM.06 7.975h4.76V22H.06V7.975zM7.975 7.975h4.565v1.94h.065c.636-1.204 2.19-2.47 4.506-2.47C21.546 7.445 22 10.35 22 14.215V22h-4.756v-6.97c0-1.662-.03-3.797-2.315-3.797-2.316 0-2.67 1.81-2.67 3.676V22H7.975V7.975z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:halderanushree21@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-5 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — heading + contact info */}
          <div className="lg:w-[45%]">
            <p className="font-semibold text-[13px] text-[#566166] tracking-[14px] uppercase leading-[14px] mb-6">
              CONTACT ME
            </p>
            <div className="mb-6">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[26px] lg:text-[40px] text-[#2a3439] leading-[32px] lg:leading-[48px]">
              </p>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[26px] lg:text-[40px] text-[#2a3439] leading-[32px] lg:leading-[48px]">
                <span className="font-['Playfair_Display',serif] font-semibold italic text-accent-blue text-[32px] lg:text-[52px] leading-[38px] lg:leading-[60px] tracking-[-1.5px] capitalize">
                  extraordinary
                </span>
                .
              </p>
            </div>
            <p className="text-[15px] text-[#566166] leading-[26px] mb-10 max-w-[400px]">
              Have a project in mind or just want to chat about design? I'm always open to new connections.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-5">
              <a
                href="https://www.linkedin.com/in/anushreehalder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-[46px] h-[46px] rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                  <LinkedInIcon />
                </div>
                <span className="font-semibold text-[14px] lg:text-[15px] text-[#2a3439] underline underline-offset-2 break-all">
                </span>
              </a>
              <a
                href="mailto:halderanushree21@gmail.com"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-[46px] h-[46px] rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                  <EmailIcon />
                </div>
                <span className="font-semibold text-[15px] text-[#2a3439] underline underline-offset-2">
                  halderanushree21@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-[46px] h-[46px] rounded-full bg-accent-blue flex items-center justify-center shrink-0">
                  <LocationIcon />
                </div>
                <span className="font-semibold text-[15px] text-[#2a3439]">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 w-full bg-[#f4f7f9] rounded-[22px] p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block font-semibold text-[11px] text-[#566166] tracking-[1.4px] uppercase mb-3">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white rounded-[12px] px-5 py-4 text-[15px] text-[#2a3439] placeholder-[#85878d] outline-none focus:ring-2 focus:ring-accent-blue/30 transition"
                />
              </div>
              <div>
                <label className="block font-semibold text-[11px] text-[#566166] tracking-[1.4px] uppercase mb-3">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white rounded-[12px] px-5 py-4 text-[15px] text-[#2a3439] placeholder-[#85878d] outline-none focus:ring-2 focus:ring-accent-blue/30 transition"
                />
              </div>
              <div>
                <label className="block font-semibold text-[11px] text-[#566166] tracking-[1.4px] uppercase mb-3">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  rows={5}
                  className="w-full bg-white rounded-[12px] px-5 py-4 text-[15px] text-[#2a3439] placeholder-[#85878d] outline-none focus:ring-2 focus:ring-accent-blue/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-blue text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] py-5 rounded-[12px] hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
