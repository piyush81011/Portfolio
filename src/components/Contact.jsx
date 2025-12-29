function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-16 py-20 max-w-screen-xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
        Contact Me
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
        Want to work with me? Let’s connect!
      </p>

      <a
        href="mailto:piyushgupta8101@gmail.com"
        className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
      >
        Send Email
      </a>
    </section>
  );
}

export default Contact;
