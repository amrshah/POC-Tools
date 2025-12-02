import { useClient } from '../../context/ClientContext';
import { StatCard } from '../dashboard/StatCard';
import { MiniChart } from '../dashboard/MiniChart';
import { TopicRanking } from '../dashboard/TopicRanking';
import { AVIAssessment } from '../dashboard/AVIAssessment';
import { VisibilityTrend } from '../dashboard/VisibilityTrend';
import { LLMComparison } from '../dashboard/LLMComparison';
import { FaInfoCircle } from 'react-icons/fa';

export const DashboardSection = () => {
    const { currentClient } = useClient();

    return (
        <div className="space-y-8">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Brand Visibility"
                    value={currentClient.visibility}
                    change={currentClient.visibilityChange}
                    isPositive={currentClient.visibilityChange > 0}
                    info={true}
                    chart={<MiniChart value={currentClient.visibility} color="#10B981" />}
                />
                <StatCard
                    title="Current Sentiment Analysis"
                    value={currentClient.sentiment}
                    change={currentClient.sentimentChange}
                    isPositive={currentClient.sentimentChange > 0}
                    info={true}
                    chart={<MiniChart value={currentClient.sentiment} color="#EF4444" />}
                />
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Brand Visibility Score</h3>
                        <FaInfoCircle className="text-gray-400 text-xs" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">1</span>
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                <span className="text-sm dark:text-gray-300">Gemini</span>
                            </div>
                            <span className="text-sm font-medium dark:text-white">{currentClient.llm1}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">2</span>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-sm dark:text-gray-300">Perplexity</span>
                            </div>
                            <span className="text-sm font-medium dark:text-white">{currentClient.llm2}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">3</span>
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm dark:text-gray-300">ChatGPT</span>
                            </div>
                            <span className="text-sm font-medium dark:text-white">{currentClient.llm3}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Optimization Section */}
            <div>
                <h2 className="text-xl font-bold dark:text-white mb-6">AI Optimization</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <TopicRanking topics={currentClient.topics} />
                    <AVIAssessment
                        lowAVI={currentClient.lowAVI}
                        mediumAVI={currentClient.mediumAVI}
                        highAVI={currentClient.highAVI}
                    />
                </div>
            </div>

            {/* Performance Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <VisibilityTrend value={currentClient.visibility} />
                <LLMComparison
                    llm1={currentClient.llm1}
                    llm2={currentClient.llm2}
                    llm3={currentClient.llm3}
                />
            </div>
        </div>
    );
};
