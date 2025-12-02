import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ClientProvider } from './context/ClientContext';
import { MainLayout } from './components/layout/MainLayout';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardSection } from './components/sections/DashboardSection';
import { ComingSoonSection } from './components/sections/ComingSoonSection';
import { ContentWriterSection } from './components/sections/ContentWriterSection';
import { VisibilityOverviewSection } from './components/sections/VisibilityOverviewSection';
import { PerformanceSection } from './components/sections/PerformanceSection';
import { SentimentSection } from './components/sections/SentimentSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { GlobalSection } from './components/sections/GlobalSection';
import { AudioSection } from './components/sections/AudioSection';
import { FaHashtag } from 'react-icons/fa';

function AppContent() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;

      case 'content':
        return <ContentWriterSection />;

      case 'overview':
        return <VisibilityOverviewSection />;

      case 'visibility':
        return <VisibilityOverviewSection />;

      case 'performance':
        return <PerformanceSection />;

      case 'sentiment':
        return <SentimentSection />;

      case 'comparison':
        return <ComparisonSection />;

      case 'global':
        return <GlobalSection />;

      case 'topics':
        return (
          <ComingSoonSection
            title="Topics"
            icon={FaHashtag}
            description="Topic performance and optimization strategies will appear here."
          />
        );

      case 'audio':
        return <AudioSection />;

      default:
        return <DashboardSection />;
    }
  };

  return (
    <MainLayout>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header activeSection={activeSection} />
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </MainLayout>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ClientProvider>
        <AppContent />
      </ClientProvider>
    </ThemeProvider>
  );
}

export default App;
