import { useClient } from '../../context/ClientContext';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { FaTachometerAlt, FaQuoteRight, FaAlignLeft, FaTrophy } from 'react-icons/fa';

export const PerformanceSection = () => {
    const { currentClient } = useClient();
    const { isDark } = useTheme();

    const historyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Avg Response Time (s)',
            data: currentClient.performance.history,
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
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

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <FaTachometerAlt className="text-green-500" />
                Performance Metrics
            </h2>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                            <FaTachometerAlt />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Avg Response Time</span>
                    </div>
                    <div className="text-2xl font-bold dark:text-white">{currentClient.performance.avgResponseTime}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <FaQuoteRight />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Citation Rate</span>
                    </div>
                    <div className="text-2xl font-bold dark:text-white">{currentClient.performance.citationRate}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                            <FaAlignLeft />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Avg Answer Length</span>
                    </div>
                    <div className="text-2xl font-bold dark:text-white">{currentClient.performance.answerLength}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Response Time Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Response Time Trend</h3>
                    <div style={{ height: '250px' }}>
                        <Line data={historyData} options={options} />
                    </div>
                </div>

                {/* Top Queries */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Top Performing Queries</h3>
                    <div className="space-y-4">
                        {currentClient.performance.topQueries.map((query, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-bold">
                                        {query.rank}
                                    </span>
                                    <span className="text-sm font-medium dark:text-white">{query.query}</span>
                                </div>
                                <FaTrophy className="text-gray-300 dark:text-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
