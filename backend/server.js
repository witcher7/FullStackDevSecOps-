const express = require("express");
const cors = require("cors");
const client = require("prom-client");

const app = express();

app.use(cors());
app.use(express.json());

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
  name: "node_requests_total",
  help: "Total number of requests",
});

app.get("/", (req, res) => {
  counter.inc();

  res.json({
    message: "DevSecOps Backend Running 🚀",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
