import { FaInfoCircle, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export const StatCard = ({ title, value, change, isPositive, chart, info }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
                {info && <FaInfoCircle className="text-gray-400 text-xs" />}
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <div className="text-3xl font-bold dark:text-white">{value}</div>
                    {change !== undefined && (
                        <div className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {isPositive ? <FaArrowUp className="inline" /> : <FaArrowDown className="inline" />}
                            {' '}
                            <span>{Math.abs(change)}%</span>
                        </div>
                    )}
                </div>
                {chart && (
                    <div style={{ width: '120px', height: '60px' }}>
                        {chart}
                    </div>
                )}
            </div>
            <p className="text-xs text-gray-400 mt-4">Displaying data from all time</p>
        </div>
    );
};
