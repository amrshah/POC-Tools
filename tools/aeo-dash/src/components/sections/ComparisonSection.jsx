import { useClient } from '../../context/ClientContext';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';
import { FaBalanceScale } from 'react-icons/fa';

export const ComparisonSection = () => {
    const { currentClient } = useClient();
    const { isDark } = useTheme();

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Your Brand',
                data: currentClient.comparison.data.us, // Using 'us' as 'our brand' data for now, assuming mock structure
                borderColor: '#3B82F6',
                backgroundColor: '#3B82F6',
                borderWidth: 3,
                tension: 0.4
            },
            {
                label: currentClient.comparison.competitors[0],
                data: currentClient.comparison.data.competitor1,
                borderColor: '#10B981',
                backgroundColor: '#10B981',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4
            },
            {
                label: currentClient.comparison.competitors[1],
                data: currentClient.comparison.data.competitor2,
                borderColor: '#EF4444',
                backgroundColor: '#EF4444',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: isDark ? '#D1D5DB' : '#374151' }
            }
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

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <FaBalanceScale className="text-indigo-500" />
                Competitor Comparison
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold dark:text-white mb-6">Market Visibility Share</h3>
                <div style={{ height: '400px' }}>
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};
