import React from "react";
import Link from "next/link";


const ThankYou = () => {
  return (
    <section>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-5">
          <div className="mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              fill="#ff523b"
              viewBox="0 0 16 16"
              className="bi bi-check-circle"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Thank You!</h1>
            <p className="mt-4">
              Thank you for registering with us! Your information has been received, and we appreciate your interest. We will be in touch with you shortly.
            </p>
            <Link href="/">
              <p className="inline-block mt-4 px-6 py-2 rounded-md text-white bg-orange-600 hover:bg-orange-700">
                Back Home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
