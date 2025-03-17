export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Movie Z</h2>
          <p className="text-sm">&copy; 2024 Movie Z. All Rights Reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-medium text-sm uppercase mb-2">
            Contact Information
          </h3>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> support@moviez.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +961 (11) 123-4567
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-medium text-sm uppercase mb-2">Follow us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
