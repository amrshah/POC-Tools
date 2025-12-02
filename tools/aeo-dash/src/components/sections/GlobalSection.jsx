import { useClient } from '../../context/ClientContext';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

export const GlobalSection = () => {
    const { currentClient } = useClient();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                <FaGlobe className="text-blue-400" />
                Global Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentClient.global.regions.map((region, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FaGlobe className="text-6xl" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                                <FaMapMarkerAlt />
                                <span className="text-sm font-medium uppercase tracking-wider">Region</span>
                            </div>
                            <h3 className="text-xl font-bold dark:text-white mb-2">{region.name}</h3>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">{region.score}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">/ 100 Visibility</span>
                            </div>
                            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${region.score}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
