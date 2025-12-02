import { useClient } from '../../context/ClientContext';
import { Select } from '../ui/Select';
import { sectionTitles } from '../../data/clients';

export const Header = ({ activeSection }) => {
    const { currentClientId, switchClient, clients } = useClient();

    const periodOptions = [
        { value: 'apr-may', label: 'Apr - May' },
        { value: 'may-jun', label: 'May - Jun' },
    ];

    const intervalOptions = [
        { value: 'monthly', label: 'Monthly' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'daily', label: 'Daily' },
    ];

    const clientOptions = clients.map(client => ({
        value: client.id,
        label: client.name
    }));

    return (
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold dark:text-white">
                        {sectionTitles[activeSection] || 'Dashboard'}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Displaying Data from 12:00AM EST today
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Select
                        value="apr-may"
                        onChange={() => { }}
                        options={periodOptions}
                    />
                    <Select
                        value="monthly"
                        onChange={() => { }}
                        options={intervalOptions}
                    />
                    <Select
                        value={currentClientId}
                        onChange={(e) => switchClient(Number(e.target.value))}
                        options={clientOptions}
                    />
                </div>
            </div>
        </header>
    );
};
