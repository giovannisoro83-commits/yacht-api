  import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yacht API running 🚤");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/yachts", (req, res) => {
  const yachts = [
    { name: "Ketch Live AIS", length: 60 },
    { name: "Ocean Spirit", length: 72 },
    { name: "Blue Horizon", length: 85 },
    { name: "Sea Falcon", length: 95 }
  ];
  res.json(yachts);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
