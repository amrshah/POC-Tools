import { Bar } from 'react-chartjs-2';
import { BarElement } from 'chart.js';
import { Chart as ChartJS } from 'chart.js';
import { useTheme } from '../../context/ThemeContext';

ChartJS.register(BarElement);

export const LLMComparison = ({ llm1, llm2, llm3 }) => {
    const { isDark } = useTheme();

    const chartData = {
        labels: ['Gemini', 'Perplexity', 'ChatGPT'],
        datasets: [{
            label: 'Performance Score',
            data: [llm1, llm2, llm3],
            backgroundColor: ['#A855F7', '#10B981', '#3B82F6'],
            borderRadius: 8
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
                grid: { display: false },
                ticks: { color: isDark ? '#9CA3AF' : '#6B7280' }
            },
            y: {
                grid: { color: isDark ? '#374151' : '#E5E7EB' },
                ticks: { color: isDark ? '#9CA3AF' : '#6B7280' },
                beginAtZero: false,
                min: 80
            }
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold dark:text-white mb-4">LLM Performance Comparison</h3>
            <div style={{ height: '250px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};
