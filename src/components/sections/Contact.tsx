import { siteConfig } from "@/content/siteConfig";

const Contact = () => {
  // IMPORTANT: Go to https://formspree.io/, create a new form,
  // and replace the URL below with your own unique endpoint.
  const formspreeEndpoint = "https://formspree.io/f/xnnvlapp";

  return (
    <section id="contact" className="py-20 md:py-32 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-lg text-dark-subtle mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Feel free to send me a message about anything you want to discuss!
        </p>
        <div className="max-w-xl mx-auto">
          <form action={formspreeEndpoint} method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-light-text dark:text-dark-text mb-2">Name</label>
              <input type="text" name="name" id="name" required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-light-text dark:text-dark-text mb-2">Email</label>
              <input type="email" name="email" id="email" required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-light-text dark:text-dark-text mb-2">Message</label>
              <textarea name="message" id="message" rows={5} required className="w-full px-3 py-2 bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
