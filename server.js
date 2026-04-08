import "dotenv/config";
import express from "express";
import { getFigmaFrame } from "./figma.js";
//import { generateScreen } from "./ai.js";

const app = express(); // 👈 THIS WAS MISSING

app.use(express.json());

app.get("/", (req, res) => {
  console.log("ROOT HIT");
  res.send("Server is working!");
});

// your route
app.get("/figma/:id", async (req, res) => {
  try {
    console.log("Fetching node:", req.params.id);

    const data = await getFigmaFrame(req.params.id);

    console.log("DATA RECEIVED");

    // TEMP: send full response to debug
    res.json(data);

  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).send("Error fetching Figma data");
  }
});

/*
app.get("/generate/:id", async (req, res) => {
  try {
    const data = await getFigmaFrame(req.params.id);
    const node = data.nodes[req.params.id];

    const code = await generateScreen(node);

    res.send(code);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating screen");
  }
});
*/

// start server
app.listen(3001, () => {
  console.log("🚀 MCP server running on http://localhost:3001");
});