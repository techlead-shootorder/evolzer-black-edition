import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ handleShow, handleClose, show }) => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const [errors, setErrors] = useState({});
  const [isAboutUsPage, setIsAboutUsPage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setIsAboutUsPage(path === "/about-us");
      setIsLoading(false);
      const urlParams = new URLSearchParams(window.location.search);
      setFormData((prevData) => ({
        ...prevData,
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
      }));
    }
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?[1-9]\d{1,14}$/.test(phone);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    const urlPath = window.location.pathname;

    setIsSubmitting(true);  // Disable button after click

    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          others: formData.companyName,
          service: urlPath,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_term: formData.utm_term,
          utm_content: formData.utm_content,
        }),
      });
      const responseData = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          companyName: formData.companyName,
          service: urlPath,
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
          utm_term: formData.utm_term,
          utm_content: formData.utm_content,
          division:"evolzer",
        }),
      });
      console.log("hello", responseData);

      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 500);
      if (data.data && data.data.id) {
        document.cookie = `leadId=${data.data.id}; path=/; max-age=3600`;
        console.log(data.data.id);
        // Delay redirection for a moment to ensure the cookie is set
      }
    } catch (error) {
      toast.error("There was a problem with the form submission.");
      console.error("Fetch operation error:", error);
      setIsSubmitting(false);  // Re-enable button if submission fails
    }
  };

  return (
    <>
      {show && (
        <div
          className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50"
          style={{ zIndex: "9990000" }}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-[20px] !bg-white !text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              Get A Quote
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="name"
                    className={`peer form-control border-2 !bg-white border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-focus:top-[8px] peer-focus:text-[#f15a29]"
                  >
                    Name
                  </label>
                  {errors.name && (
                    <div className="text-red-500 text-sm">{errors.name}</div>
                  )}
                </div>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="companyName"
                    className={`peer form-control border-2 !bg-white border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${
                      errors.companyName ? "border-red-500" : ""
                    }`}
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="companyName"
                    className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-focus:top-[8px] peer-focus:text-[#f15a29]"
                  >
                    Company Name
                  </label>
                  {errors.companyName && (
                    <div className="text-red-500 text-sm">
                      {errors.companyName}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    className={`peer form-control border-2 !bg-white border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-focus:top-[8px] peer-focus:text-[#f15a29]"
                  >
                    Email
                  </label>
                  {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>

                <div className="relative mt-1">
                  <input
                    type="tel"
                    id="phone"
                    className={`peer form-control border-2 !bg-white border-orange-500 rounded p-2 w-full text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-focus:top-[8px] peer-focus:text-[#f15a29]"
                  >
                    Phone
                  </label>
                  {errors.phone && (
                    <div className="text-red-500 text-sm">{errors.phone}</div>
                  )}
                </div>
              </div>

              <div className="relative mb-2 !mt-2">
                <textarea
                  id="message"
                  className={`peer form-control border-2 !bg-white border-orange-500 rounded p-2 w-full h-24 text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 top-[-12px] bg-white px-1 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-focus:top-[8px] peer-focus:text-[#f15a29]"
                >
                  Message
                </label>
                {errors.message && (
                  <div className="text-red-500 text-sm">{errors.message}</div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 w-full bg-[#f15a29] text-white py-1 rounded-lg hover:bg-[#dc4d1f]"
                  disabled={isSubmitting} // Disable button when submitting
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
              <input
                type="hidden"
                name="utm_source"
                value={formData.utm_source}
              />
              <input
                type="hidden"
                name="utm_medium"
                value={formData.utm_medium}
              />
              <input
                type="hidden"
                name="utm_campaign"
                value={formData.utm_campaign}
              />
              <input type="hidden" name="utm_term" value={formData.utm_term} />
              <input
                type="hidden"
                name="utm_content"
                value={formData.utm_content}
              />
            </form>
          </div>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Modal;
