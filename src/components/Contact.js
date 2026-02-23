import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = ({ contact }) => {
  return (
    <section id="contact">
      <div className="mx-5 lg:mx-[150px] mb-24 bg-bg-card rounded-3xl p-16 flex justify-between flex-wrap gap-10">
        <div className="contact-left">
          <h2 className="text-5xl mb-2.5">{contact.title}</h2>
          <p className="text-text-grey mb-7">{contact.description}</p>
          
          <div className="flex gap-4 mb-7">
            <a href={contact.social.instagram} className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-[#E1306C] transition-opacity hover:opacity-80"><FaInstagram /></a>
            <a href={contact.social.whatsapp} className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-[#25D366] transition-opacity hover:opacity-80"><FaWhatsapp /></a>
            <a href={contact.social.linkedin} className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-[#0077B5] transition-opacity hover:opacity-80"><FaLinkedinIn /></a>
            <a href={contact.social.github} className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-[#333] transition-opacity hover:opacity-80"><FaGithub /></a>
          </div>

          <a href={`mailto:${contact.email}`} className="btn inline-block bg-accent-yellow text-text-dark py-3 px-9 rounded-full font-semibold text-sm transition-transform duration-300 hover:bg-accent-hover hover:-translate-y-0.5">Contact Me</a>
        </div>

        <div className="contact-right flex-1 max-w-md">
          <div className="mb-6">
            <h4 className="text-sm text-text-grey mb-1.5">Email:</h4>
            <a href={`mailto:${contact.email}`} className="text-base font-medium border-b border-transparent hover:border-text-dark">{contact.email}</a>
          </div>
          <div className="mb-6">
            <h4 className="text-sm text-text-grey mb-1.5">LinkedIn:</h4>
            <a href={contact.linkedInUrl} className="text-base font-medium border-b border-transparent hover:border-text-dark">{contact.linkedInUrl}</a>
          </div>
          <div>
            <h4 className="text-sm text-text-grey mb-1.5">GitHub:</h4>
            <a href={contact.gitHubUrl} className="text-base font-medium border-b border-transparent hover:border-text-dark">{contact.gitHubUrl}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
