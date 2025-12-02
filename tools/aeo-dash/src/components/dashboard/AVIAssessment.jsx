import { FaBolt } from 'react-icons/fa';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const AVIAssessment = ({ lowAVI, mediumAVI, highAVI }) => {
    const llmOptions = [
        { value: 'gemini', label: 'Gemini' },
        { value: 'chatgpt', label: 'ChatGPT' },
        { value: 'perplexity', label: 'Perplexity' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold dark:text-white">
                    <FaBolt className="inline text-yellow-400 mr-2" />
                    AI Visibility Impact Assessment
                </h3>
                <Select
                    value="gemini"
                    onChange={() => { }}
                    options={llmOptions}
                    className="!px-3 !py-1 !text-sm"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-red-900/30 border border-red-800 rounded-lg p-4">
                    <div className="text-xs text-red-300 mb-1">Low AVI</div>
                    <div className="text-2xl font-bold text-red-400">{lowAVI}</div>
                    <div className="text-xs text-red-300 mt-1">+5</div>
                </div>
                <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4">
                    <div className="text-xs text-yellow-300 mb-1">Medium AVI</div>
                    <div className="text-2xl font-bold text-yellow-400">{mediumAVI}</div>
                    <div className="text-xs text-yellow-300 mt-1">+11</div>
                </div>
                <div className="bg-green-900/30 border border-green-800 rounded-lg p-4">
                    <div className="text-xs text-green-300 mb-1">High AVI</div>
                    <div className="text-2xl font-bold text-green-400">{highAVI}</div>
                    <div className="text-xs text-green-300 mt-1">+40</div>
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Your brand's overall AI Visibility Impact is <span className="text-green-400 font-semibold">High</span>.
            </p>
            <Button variant="secondary" className="w-full">
                Optimization Hub
            </Button>
        </div>
    );
};
