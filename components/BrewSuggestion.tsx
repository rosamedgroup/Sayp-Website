import React, { useState, useCallback } from 'react';
import { getBrewSuggestion } from '../services/geminiService';
import Icon from './Icon';

const BrewSuggestion: React.FC = () => {
  const [suggestion, setSuggestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetSuggestion = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSuggestion(''); // Clear previous results
    try {
      const result = await getBrewSuggestion();
      setSuggestion(result);
    } catch (err) {
      console.error("Failed to get brew suggestion:", err);
      // Provide a more user-friendly error message
      let detailedError = "نأسف، واجهتنا مشكلة أثناء تحضير اقتراحك. يرجى المحاولة مرة أخرى بعد قليل.";
      if (err instanceof Error && err.message.includes('API_KEY')) {
        detailedError = "حدث خطأ في الإعدادات. لا يمكننا تقديم اقتراح في الوقت الحالي.";
      }
      setError(detailedError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F1ECE6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-center mb-4">مشروب اليوم</h2>
        <p className="text-center text-[#6B5050]/80 mb-12 max-w-2xl mx-auto">
          دع خبراء الباريستا لدينا يوصون بإبداع فريد، مُعد خصيصاً لهذا اليوم.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg min-h-[150px] flex flex-col justify-center items-center">
          {isLoading ? (
            <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-[#6B5050]">
              <Icon className="w-8 h-8 animate-spin" />
              <span className="text-lg mt-2 sm:mt-0">نقوم بإعداد اقتراحك...</span>
            </div>
          ) : error ? (
            <p className="text-base sm:text-lg text-red-600 font-medium">{error}</p>
          ) : suggestion ? (
            <p className="text-base sm:text-lg italic text-[#6B5050]">{suggestion}</p>
          ) : (
            <p className="text-base sm:text-lg text-[#6B5050]/70">انقر على الزر أدناه للكشف عن مشروب اليوم الخاص.</p>
          )}
        </div>

        <button
          onClick={handleGetSuggestion}
          disabled={isLoading}
          className="mt-8 px-8 py-3 bg-[#6B5050] text-white rounded-md font-semibold tracking-wider hover:bg-opacity-90 transition-all duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'لحظات...' : "اكشف عن مشروب اليوم"}
        </button>
      </div>
    </section>
  );
};

export default BrewSuggestion;
