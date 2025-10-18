
import React, { useState, useCallback } from 'react';
import { Cpu, RefreshCw, Wand2, Expand } from 'lucide-react';
import { Card, CardAction } from '../Card';
import { GoogleGenAI } from '@google/genai';

const initialInsights = [
    "**Optimization Alert:** High solar irradiance is forecast for the next 4 hours. Recommend prioritizing battery charging from PV to reduce grid dependency during peak hours (17:00-22:00).",
    "**Maintenance Insight:** Wind turbine's power curve shows a 3.1% deviation from the manufacturer's specification. This, combined with recent vibration alerts, strongly suggests a bearing inspection is necessary within the next 7 days to prevent failure.",
    "**Economic Forecast:** Time-of-Use pricing will peak at 2.50 EGP/kWh soon. The model predicts a 15% cost saving by discharging the battery to cover 80% of the load during this period.",
];

export const AIInsightsCard: React.FC = () => {
    const [insights, setInsights] = useState<string[]>(initialInsights);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [apiKey, setApiKey] = useState<string>('');

    const generateInsights = useCallback(async () => {
        let key = apiKey;
        if (!key) {
            key = window.prompt("Please enter your Google AI API Key to generate new insights:") || '';
            if (key) {
                setApiKey(key);
            } else {
                alert("API Key is required to generate new insights.");
                return;
            }
        }

        setIsLoading(true);
        setError(null);
        try {
            const ai = new GoogleGenAI({ apiKey: key });
            
            const prompt = `
                You are an AI assistant for an advanced Energy Management System (EMS).
                The system monitors Photovoltaic (PV) arrays, Wind Turbines, a Fuel Cell, and a Battery Storage system.
                Current key metrics:
                - Total Generation: 53.7 kW
                - Battery State of Charge: 65% (Charging)
                - Grid Status: Connected, importing 22.3 kW
                - Wind Speed: 12.4 m/s
                - Solar Irradiance: 820 W/m²
                - Next Peak Demand Forecast: 92% load in 4 hours
                - Current TOU rate: Off-Peak (1.20 EGP/kWh)

                Based on this data, provide three brief, actionable insights for the system operator.
                Focus on:
                1.  An optimization action to take now.
                2.  A predictive maintenance warning.
                3.  An economic forecast or cost-saving measure.

                Format each insight as a short paragraph. Use markdown for emphasis (e.g., **bold** for titles).
                Do not use markdown headers or list items (like '*' or '-'). Just three separate paragraphs.
            `;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            
            const text = response.text;
            
            const newInsights = text.split('\n').map(line => line.trim()).filter(line => line.length > 0 && !line.startsWith('*') && !line.startsWith('-'));
            setInsights(newInsights.length > 0 ? newInsights : initialInsights);

        } catch (e) {
            console.error(e);
            let errorMessage = 'An unknown error occurred. Using cached insights.';
            if (e instanceof Error) {
                errorMessage = `Failed to generate insights: ${e.message}. Using cached insights.`;
            }
            // If the key is invalid, clear it so the user can re-enter it next time.
            if (errorMessage.includes('API key not valid')) {
                setApiKey('');
                errorMessage = "Your API Key is not valid. Please try again."
            }
            setError(errorMessage);
            setInsights(initialInsights);
        } finally {
            setIsLoading(false);
        }
    }, [apiKey]);

    return (
        <Card title="AI-Powered Insights" icon={<Cpu />} actions={
            <>
                <CardAction onClick={generateInsights}><RefreshCw size={16} /></CardAction>
                <CardAction onClick={() => {}}><Expand size={16} /></CardAction>
            </>
        }>
            <div className="space-y-3 h-48 overflow-y-auto pr-2">
                {error && <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg text-sm">{error}</div>}
                {isLoading ? (
                     <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        <span className="ml-3 text-gray-600">Generating insights...</span>
                    </div>
                ) : (
                    insights.map((insight, index) => (
                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                             <div className="text-blue-500 mt-1 mr-3 flex-shrink-0"><Wand2 size={16} /></div>
                             <p dangerouslySetInnerHTML={{ __html: insight.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
};
