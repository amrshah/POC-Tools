import { useState } from 'react';
import { FaChartLine, FaPenFancy, FaEye, FaCogs, FaMicrophone, FaChartBar, FaMoon, FaSun, FaChartPie, FaTachometerAlt, FaComments, FaBalanceScale, FaGlobe, FaHashtag, FaRobot, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { Badge } from '../ui/Badge';

const NavLink = ({ icon: Icon, label, badge, onClick, active }) => {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${active
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
        >
            <Icon className="w-4" />
            <span>{label}</span>
            {badge && <Badge>Soon</Badge>}
        </a>
    );
};

const SubMenu = ({ icon: Icon, label, items, activeSection, onSectionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-4" />
                    <span>{label}</span>
                </div>
                <FaChevronDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="ml-4 mt-1 space-y-1">
                    {items.map((item) => (
                        <NavLink
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            onClick={() => onSectionChange(item.id)}
                            active={activeSection === item.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const Sidebar = ({ activeSection, onSectionChange }) => {
    const { isDark, toggleTheme } = useTheme();

    const visibilityItems = [
        { id: 'overview', icon: FaChartPie, label: 'Overview' },
        { id: 'visibility', icon: FaEye, label: 'Visibility' },
        { id: 'performance', icon: FaTachometerAlt, label: 'Performance' },
        { id: 'sentiment', icon: FaComments, label: 'Sentiment' },
        { id: 'comparison', icon: FaBalanceScale, label: 'Comparison' },
        { id: 'global', icon: FaGlobe, label: 'Global' },
    ];

    const optimizationItems = [
        { id: 'topics', icon: FaHashtag, label: 'Topics' },
    ];

    const analyticsItems = [
        { id: 'agents', icon: FaRobot, label: 'AI Agents' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <span className="text-xl font-bold dark:text-white">AEO Suite</span>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
                    >
                        {isDark ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                <NavLink
                    icon={FaChartLine}
                    label="Dashboard"
                    onClick={() => onSectionChange('dashboard')}
                    active={activeSection === 'dashboard'}
                />

                <NavLink
                    icon={FaPenFancy}
                    label="AI Content Writer"
                    badge="soon"
                    onClick={() => onSectionChange('content')}
                    active={activeSection === 'content'}
                />

                <SubMenu
                    icon={FaEye}
                    label="AI Visibility"
                    items={visibilityItems}
                    activeSection={activeSection}
                    onSectionChange={onSectionChange}
                />

                <SubMenu
                    icon={FaCogs}
                    label="AI Optimization"
                    items={optimizationItems}
                    activeSection={activeSection}
                    onSectionChange={onSectionChange}
                />

                <NavLink
                    icon={FaMicrophone}
                    label="Audio Modality"
                    badge="soon"
                    onClick={() => onSectionChange('audio')}
                    active={activeSection === 'audio'}
                />

                <SubMenu
                    icon={FaChartBar}
                    label="Agent Analytics"
                    items={analyticsItems}
                    activeSection={activeSection}
                    onSectionChange={onSectionChange}
                />
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">© 2025 AEO Suite</div>
            </div>
        </aside>
    );
};
