import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { Select } from '../ui/Select';

export const TopicRanking = ({ topics }) => {
    const llmOptions = [
        { value: 'chatgpt', label: 'ChatGPT' },
        { value: 'gemini', label: 'Gemini' },
        { value: 'perplexity', label: 'Perplexity' },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold dark:text-white">
                    <FaTrophy className="inline text-yellow-500 mr-2" />
                    Topic Ranking
                </h3>
                <Select
                    value="chatgpt"
                    onChange={() => { }}
                    options={llmOptions}
                    className="!px-3 !py-1 !text-sm"
                />
            </div>
            <div className="space-y-3">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 w-4">{index + 1}</span>
                            <span className="text-sm dark:text-gray-300">{topic}</span>
                        </div>
                        <FaExternalLinkAlt className="text-xs text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
};
