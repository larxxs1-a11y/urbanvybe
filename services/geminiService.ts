
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProductDescription = async (productName: string): Promise<string> => {
  const ai = getAI();
  const prompt = `Escribe una descripción corta, genial, minimalista y con "vibe streetwear" para una camiseta llamada "${productName}". Enfócate en la estética urbana, calidad y estilo. Mantenla bajo 150 caracteres. Sin emojis. En español.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    return response.text || "Esencial de streetwear exclusivo.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Streetwear de calidad premium diseñado para el vacío urbano.";
  }
};
