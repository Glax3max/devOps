import express from "express"
const app = express();

const HOSTNAME = process.env.HOSTNAME || "unknown";

app.get("/", (req, res) => {
  res.send(`Backend response from ${HOSTNAME}`);
});

app.listen(3000, "0.0.0.0", () =>
  console.log("Backend running")
);