import dotenv from "dotenv";
dotenv.config();

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_API_KEY}`
);

const data = await response.json();

for (const model of data.models ?? []) {
  if (model.supportedGenerationMethods?.includes("generateContent")) {
    console.log(model.name);
  }
}