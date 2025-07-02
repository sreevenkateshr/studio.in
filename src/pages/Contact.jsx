import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 py-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-center text-lg mb-10">
            Have questions or need help with your order? Our team is ready to assist you.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold mb-2">Aveo Clothing</h2>
            <p className="text-sm">
              support@aveoclothing.com <br />
              +91 98765 43210
            </p>
            <p className="mt-4 text-xs text-gray-500">
              123 Street Name, Fashion City, India
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
