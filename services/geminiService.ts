import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Safely retrieve API key from various potential sources or default to empty
// This prevents 'ReferenceError: process is not defined' in strictly client-side environments
const getApiKey = () => {
  try {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // Ignore error if process is not defined
  }
  return '';
};

const apiKey = getApiKey();
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateChatResponse = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently running in a static demo mode because my AI brain isn't connected (API Key missing). Please contact me directly via email!";
  }

  try {
    const model = 'gemini-3-flash-preview'; 
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try asking again in a moment, or email me directly.";
  }
};