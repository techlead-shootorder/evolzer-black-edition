export default function Custom404() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/404-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-8">
        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-3xl text-gray-200 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full text-xl font-semibold transition-colors duration-300 hover:bg-indigo-700"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
