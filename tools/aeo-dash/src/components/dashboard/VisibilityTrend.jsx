import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';

export const VisibilityTrend = ({ value }) => {
    const { isDark } = useTheme();

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Visibility Score',
            data: [75, 78, 82, 85, 88, value],
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    };

    const options = {
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

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold dark:text-white mb-4">Visibility Trend</h3>
            <div style={{ height: '250px' }}>
                <Line data={chartData} options={options} />
            </div>
        </div>
    );
};
