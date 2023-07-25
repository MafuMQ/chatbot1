import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const ui1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

ui1.prompt()
ui1.on("line", async input => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user",
                 content: input }],
  })
  //console.log(response.data.choices[0].message.content)
  console.log(res.data.choices)
  ui1.prompt()
})
