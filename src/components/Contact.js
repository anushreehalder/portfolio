import React from 'react';

const Contact = ({ contact }) => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="text-center">
          <p className="text-lg">Feel free to reach out to me for any inquiries or collaborations.</p>
          <p className="text-lg mt-4">
            Email: <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a>
          </p>
          <p className="text-lg mt-2">
            LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{contact.linkedin}</a>
          </p>
          <p className="text-lg mt-2">
            GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{contact.github}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
