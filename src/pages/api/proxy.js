import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message, companyName, service, division } =
      req.body;

    // Construct payload
    const payload = {
      name,
      email,
      phone,
      message,
      companyName,
      service,
      division,
    };

    try {
      // Make the POST request
      const response = await axios.post(
        "https://shootorder.in/tah-pd/index.php",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Log and send response
      console.log("Response from API:", response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error occurred:", error.message);
      res.status(500).json({
        error: "Error forwarding the request",
        details: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
