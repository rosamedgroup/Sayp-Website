import { GoogleGenAI } from "@google/genai";

export const getBrewSuggestion = async (): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `أنت باريستا خبير في 'مقهى سَيْب'، وهو مقهى عصري وبسيط وعالي الجودة. مهمتك هي اقتراح "مشروب يومي" فريد.

      صف المشروب بطريقة جذابة، مع ذكر اسمه ونكهته وسبب كونه مميزاً لهذا اليوم. حافظ على نبرة راقية وهادئة وجذابة. يجب أن تكون الاستجابة موجزة، لا تزيد عن 2-3 جمل.
      
      مثال: "مشروب اليوم الخاص هو 'لاتيه زهر الفجر'. وهو مزيج رقيق من إسبريسو أحادي المصدر مع لمسة من ماء زهر البرتقال وحليب الشوفان المبخر، مما يخلق تجربة كريمية وعطرية تجسد جوهر صباح هادئ."
      `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  if (!response.text) {
    throw new Error("Received an empty response from the model.");
  }

  return response.text;
};
