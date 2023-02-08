const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY, // env
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

app.post("/api", async (req, res) => {
  const { message, model, tempreture, maxTokens } = req.body;
  console.log(
    message,
    //"Model:", model
  );
  const response = await openai.createCompletion({
    model: `${model}`, // Drop menu
    prompt: `${message}`,
    max_tokens: maxTokens,
    temperature: tempreture,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

app.use("/static", express.static(path.join(__dirname, "../www/build/static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../www/build/index.html"));
});

app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
