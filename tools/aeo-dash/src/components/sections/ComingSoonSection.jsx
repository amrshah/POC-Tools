import { Badge } from '../ui/Badge';

export const ComingSoonSection = ({ title, icon: Icon, description, features }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />

            <div className="flex items-center justify-between mb-6 relative z-10">
                <h2 className="text-2xl font-bold dark:text-white flex items-center gap-2">
                    {Icon && <Icon className="mr-2" />}
                    {title}
                </h2>
                <Badge className="!text-xs !px-3 !py-1">Coming Soon</Badge>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10">
                {description}
            </p>

            {features && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 ${feature.colorClass}`}>
                                <feature.icon />
                            </div>
                            <h3 className="font-semibold dark:text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
        </div>
    );
};
