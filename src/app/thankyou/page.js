import React from "react";
import Link from "next/link";
import Head from "next/head";

const ThankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You - Evolzer</title>
      </Head>

      <section className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="bg-gray-900 shadow-lg rounded-lg p-10 text-center max-w-lg w-full">
          {/* Check Icon */}
          <div className="mb-6 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center bg-orange-500 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="white"
                viewBox="0 0 16 16"
                className="bi bi-check-circle"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl font-bold text-orange-400">Thank You!</h1>
          <p className="mt-4 text-lg text-gray-300">
            Thank you for registering with us! Your information has been received,
            and we appreciate your interest. We will be in touch with you shortly.
          </p>

          {/* Back Home Button */}
          <Link href="/">
            <p className="inline-block mt-6 px-6 py-3 rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 shadow-md cursor-pointer">
              Back Home
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
