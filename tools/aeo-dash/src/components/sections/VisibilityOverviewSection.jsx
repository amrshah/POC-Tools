import { useClient } from '../../context/ClientContext';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../../context/ThemeContext';
import { FaEye, FaSearch, FaRobot } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

export const VisibilityOverviewSection = () => {
    const { currentClient } = useClient();
    const { isDark } = useTheme();

    const historyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Overall Visibility',
            data: currentClient.visibilityMetrics.history,
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    };

    const platformData = {
        labels: ['Google SGE', 'Bing Chat', 'Perplexity', 'Other'],
        datasets: [{
            data: Object.values(currentClient.visibilityMetrics.platforms),
            backgroundColor: ['#4285F4', '#008080', '#10B981', '#9CA3AF'],
            borderWidth: 0
        }]
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
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

    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: { color: isDark ? '#D1D5DB' : '#374151' }
            }
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <FaEye className="text-blue-500" />
                Visibility Analysis
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Visibility Trend (6 Months)</h3>
                    <div style={{ height: '300px' }}>
                        <Line data={historyData} options={lineOptions} />
                    </div>
                </div>

                {/* Platform Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Platform Share</h3>
                    <div style={{ height: '250px' }}>
                        <Doughnut data={platformData} options={doughnutOptions} />
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                <FaSearch className="text-blue-500" /> Google SGE
                            </span>
                            <span className="font-medium dark:text-white">{currentClient.visibilityMetrics.platforms.google}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                <FaRobot className="text-teal-600" /> Bing Chat
                            </span>
                            <span className="font-medium dark:text-white">{currentClient.visibilityMetrics.platforms.bing}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
