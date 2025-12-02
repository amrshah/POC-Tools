import { useClient } from '../../context/ClientContext';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { FaMicrophone, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export const AudioSection = () => {
    const { currentClient } = useClient();
    const { isDark } = useTheme();

    const historyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Voice Search Score',
            data: currentClient.audio.trend,
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
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
                <FaMicrophone className="text-purple-500" />
                Audio Modality Optimization
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Score Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center text-center">
                    <div className="w-32 h-32 rounded-full border-8 border-purple-100 dark:border-purple-900/30 flex items-center justify-center mb-4 relative">
                        <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent animate-spin-slow" style={{ animationDuration: '3s' }}></div>
                        <span className="text-4xl font-bold dark:text-white">{currentClient.audio.score}</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">Voice Optimization Score</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Based on natural language processing analysis</p>
                </div>

                {/* Trend Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-6">Optimization Trend</h3>
                    <div style={{ height: '250px' }}>
                        <Line data={historyData} options={options} />
                    </div>
                </div>

                {/* Factors List */}
                <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold dark:text-white mb-4">Optimization Factors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {currentClient.audio.factors.map((factor, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-600">
                                <span className="font-medium dark:text-white">{factor.name}</span>
                                {factor.status === 'good' ? (
                                    <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                                        <FaCheckCircle /> Good
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                                        <FaExclamationTriangle /> Improve
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
