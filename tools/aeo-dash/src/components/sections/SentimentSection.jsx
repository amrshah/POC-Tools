import { useClient } from '../../context/ClientContext';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { FaComments, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

export const SentimentSection = () => {
    const { currentClient } = useClient();
    const { isDark } = useTheme();

    const historyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sentiment Score',
            data: currentClient.sentimentData.history,
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { color: isDark ? '#374151' : '#E5E7EB' },
                ticks: { color: isDark ? '#9CA3AF' : '#6B7280' }
            },
            y: {
                grid: { color: isDark ? '#374151' : '#E5E7EB' },
                ticks: { color: isDark ? '#9CA3AF' : '#6B7280' }
            }
        }
    };

    const getSentimentIcon = (sentiment) => {
        switch (sentiment) {
            case 'positive': return <FaSmile className="text-green-500" />;
            case 'neutral': return <FaMeh className="text-yellow-500" />;
            case 'negative': return <FaFrown className="text-red-500" />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <FaComments className="text-red-500" />
                Sentiment Analysis
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Sentiment Trend</h3>
                    <div style={{ height: '300px' }}>
                        <Line data={historyData} options={options} />
                    </div>
                </div>

                {/* Recent Mentions */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Recent Mentions</h3>
                    <div className="space-y-4">
                        {currentClient.sentimentData.mentions.map((mention, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {getSentimentIcon(mention.sentiment)}
                                        <span className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                                            {mention.source}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{mention.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
