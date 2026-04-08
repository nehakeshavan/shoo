/*
import axios from "axios";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = "SlcrHtEgyWzGImWLNoG6Gv";

export async function getFigmaFrame(nodeId) {
  const url = `https://api.figma.com/v1/files/${FILE_ID}/nodes?ids=${nodeId}`;

  const res = await axios.get(url, {
    headers: {
      "X-Figma-Token": FIGMA_TOKEN,
    },
  });

  return res.data;
}
  */

import axios from "axios";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_ID = "SlcrHtEgyWzGImWLNoG6Gv";

export async function getFigmaFrame(nodeId) {
  try {
    const url = `https://api.figma.com/v1/files/${FILE_ID}/nodes?ids=${nodeId}`;

    const res = await axios.get(url, {
      headers: {
        "X-Figma-Token": FIGMA_TOKEN,
      },
    });

    return res.data;
  } catch (error) {
    console.error("Figma fetch error:", error.message);
    throw error;
  }
}