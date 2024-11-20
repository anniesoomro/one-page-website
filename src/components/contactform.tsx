export default function ContactForm() {
    return (
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
          <textarea placeholder=  "Your Message"className="w-full px-4 py-2 border border-gray-300 rounded-md" style={{ height : "100px"}}></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Submit</button>
      </form>
    );
  }

