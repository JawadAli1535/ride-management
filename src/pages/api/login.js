// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const { email, password } = req.body;

//     if (email === "test@example.com" && password === "password123") {
//       return res.status(200).json({
//         token: "mock-jwt-token",
//         user: { id: 1, email, name: "Test User" },
//       });
//     } else {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if credentials match (mock validation)
    if (email === "test@example.com" && password === "password123") {
      return res.status(200).json({
        token: "mock-jwt-token", // Return a mock JWT token
        user: { id: 1, email, name: "Test User" }, // Return mock user data
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    // Return Method Not Allowed for non-POST requests
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
