import { useState } from 'react';
import { useClient } from '../../context/ClientContext';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { FaPenFancy, FaMagic, FaHistory, FaCheckCircle, FaSpinner } from 'react-icons/fa';

export const ContentWriterSection = () => {
    const { currentClient } = useClient();
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState('blog');

    const templates = [
        { value: 'blog', label: 'Blog Post' },
        { value: 'product', label: 'Product Description' },
        { value: 'faq', label: 'FAQ Section' },
        { value: 'social', label: 'Social Media Post' }
    ];

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate API call
        setTimeout(() => {
            setIsGenerating(false);
            setGeneratedContent({
                title: 'Optimized Content Result',
                body: 'This is a simulated AI-generated content piece optimized for search visibility. It includes relevant keywords and structured data markup suggestions...',
                score: 95
            });
        }, 2000);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                    <FaPenFancy className="text-purple-500" />
                    AI Content Writer
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Input Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Content Template
                            </label>
                            <Select
                                value={selectedTemplate}
                                onChange={(e) => setSelectedTemplate(e.target.value)}
                                options={templates}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Topic / Keywords
                            </label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32 resize-none"
                                placeholder="Enter your topic or main keywords here..."
                            />
                        </div>

                        <Button
                            onClick={handleGenerate}
                            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700"
                            disabled={isGenerating}
                        >
                            {isGenerating ? (
                                <>
                                    <FaSpinner className="animate-spin" /> Generating...
                                </>
                            ) : (
                                <>
                                    <FaMagic /> Generate Optimized Content
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Result Area */}
                    {generatedContent && (
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 animate-fade-in">
                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                                <h3 className="font-semibold dark:text-white">{generatedContent.title}</h3>
                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full font-medium">
                                    Score: {generatedContent.score}/100
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {generatedContent.body}
                            </p>
                            <div className="mt-6 flex justify-end gap-3">
                                <Button variant="outline">Copy</Button>
                                <Button variant="primary">Save to Library</Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar / History */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold dark:text-white mb-4 flex items-center gap-2">
                            <FaHistory className="text-gray-400" />
                            Recent Content
                        </h3>
                        <div className="space-y-4">
                            {currentClient.content.recent.map((item, index) => (
                                <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                                    <div className="flex items-start justify-between mb-1">
                                        <h4 className="text-sm font-medium dark:text-white line-clamp-1">{item.title}</h4>
                                        {item.status === 'Published' && <FaCheckCircle className="text-green-500 text-xs flex-shrink-0 mt-1" />}
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                        <span>{item.type}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 text-sm text-purple-600 dark:text-purple-400 hover:underline">
                            View All History
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
