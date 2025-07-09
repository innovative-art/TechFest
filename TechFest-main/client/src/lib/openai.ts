// Note: This file contains the integration code for the OpenAI API
// but for the demo we're using predefined responses in the backend

// For a production environment, uncomment the following code and use actual API calls
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
// });

// export async function getAIResponse(userMessage: string): Promise<string> {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
//       messages: [
//         {
//           role: "system",
//           content: `You are an AI assistant for a tech festival called Future Tech Fest 2023.
//           The event takes place from August 15-18, 2023 at the Tech Innovation Center in San Francisco.
//           Provide helpful information about the event including speakers, workshops, schedules, and registration details.
//           Be concise, professional, and friendly in your responses.`
//         },
//         {
//           role: "user",
//           content: userMessage
//         }
//       ],
//       max_tokens: 150,
//     });
//     
//     return response.choices[0].message.content || "I'm sorry, I couldn't process your request.";
//   } catch (error) {
//     console.error("Error calling OpenAI:", error);
//     return "Sorry, I'm having trouble connecting to my knowledge base. Please try again later.";
//   }
// }

// For the demo, we'll use the backend endpoint instead
export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Sorry, I'm having trouble processing your request. Please try again later.";
  }
}
