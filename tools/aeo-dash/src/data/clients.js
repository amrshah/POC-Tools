export const clients = [
    {
        id: 0,
        name: 'PixelOne AV',
        visibility: 86.2,
        visibilityChange: 1.8,
        sentiment: 64.7,
        sentimentChange: -1.7,
        llm1: 96.1,
        llm2: 94.2,
        llm3: 93.9,
        lowAVI: 135,
        mediumAVI: 101,
        highAVI: 237,
        topics: [
            'Best AV systems',
            'Top audio solutions',
            'Home theater setup',
            'Commercial AV',
            'Smart conference rooms',
            'AV installation'
        ],
        // New Data Sections
        content: {
            recent: [
                { title: 'Top 10 Home Theater Trends 2025', type: 'Blog Post', date: '2024-05-15', status: 'Published' },
                { title: 'Commercial AV Solutions Guide', type: 'Whitepaper', date: '2024-05-10', status: 'Draft' },
                { title: 'Smart Conference Room Setup', type: 'Case Study', date: '2024-05-05', status: 'Published' }
            ]
        },
        visibilityMetrics: {
            history: [75, 78, 82, 85, 88, 86.2],
            platforms: { google: 45, bing: 30, perplexity: 15, other: 10 }
        },
        performance: {
            avgResponseTime: '1.2s',
            citationRate: '85%',
            answerLength: '150 words',
            history: [1.5, 1.4, 1.3, 1.2, 1.2, 1.2],
            topQueries: [
                { query: 'Best commercial AV installer', rank: 1 },
                { query: 'Home theater design services', rank: 2 },
                { query: 'Conference room audio systems', rank: 1 }
            ]
        },
        sentimentData: {
            history: [60, 62, 65, 63, 64, 64.7],
            mentions: [
                { text: 'Great service and installation!', sentiment: 'positive', source: 'Google Reviews' },
                { text: 'Audio quality is amazing.', sentiment: 'positive', source: 'Twitter' },
                { text: 'Installation took longer than expected.', sentiment: 'neutral', source: 'Facebook' }
            ]
        },
        comparison: {
            competitors: ['TechSound', 'AudioPro', 'VisualSystems'],
            data: {
                us: [86.2, 82.1, 79.5, 75.0],
                competitor1: [80.0, 81.5, 82.0, 81.0, 80.5, 82.1],
                competitor2: [70.0, 72.0, 75.0, 76.0, 78.0, 79.5]
            }
        },
        global: {
            regions: [
                { name: 'North America', score: 92 },
                { name: 'Europe', score: 78 },
                { name: 'Asia Pacific', score: 65 }
            ]
        },
        audio: {
            score: 78,
            trend: [70, 72, 74, 75, 76, 78],
            factors: [
                { name: 'Natural Language Optimization', status: 'good' },
                { name: 'Featured Snippet Potential', status: 'warning' },
                { name: 'Local Voice Search', status: 'good' }
            ]
        }
    },
    {
        id: 1,
        name: 'TomkenVet',
        visibility: 78.5,
        visibilityChange: 2.3,
        sentiment: 71.2,
        sentimentChange: 0.8,
        llm1: 89.4,
        llm2: 87.8,
        llm3: 91.2,
        lowAVI: 98,
        mediumAVI: 156,
        highAVI: 289,
        topics: [
            'Best veterinary clinic',
            'Emergency vet services',
            'Pet surgery specialists',
            'Animal hospital near me',
            'Exotic pet care',
            'Vet checkup services'
        ],
        content: {
            recent: [
                { title: 'Summer Pet Safety Tips', type: 'Blog Post', date: '2024-05-12', status: 'Published' },
                { title: 'Puppy Vaccination Schedule', type: 'Guide', date: '2024-05-08', status: 'Published' },
                { title: 'Senior Dog Care', type: 'Article', date: '2024-05-01', status: 'Draft' }
            ]
        },
        visibilityMetrics: {
            history: [70, 72, 74, 76, 77, 78.5],
            platforms: { google: 50, bing: 25, perplexity: 15, other: 10 }
        },
        performance: {
            avgResponseTime: '0.8s',
            citationRate: '92%',
            answerLength: '120 words',
            history: [0.9, 0.9, 0.8, 0.8, 0.8, 0.8],
            topQueries: [
                { query: 'Emergency vet near me', rank: 1 },
                { query: 'Dog vaccination cost', rank: 3 },
                { query: 'Cat dental cleaning', rank: 2 }
            ]
        },
        sentimentData: {
            history: [68, 69, 70, 71, 70, 71.2],
            mentions: [
                { text: 'Dr. Smith is the best!', sentiment: 'positive', source: 'Yelp' },
                { text: 'Very caring staff.', sentiment: 'positive', source: 'Google Reviews' },
                { text: 'Wait time was a bit long.', sentiment: 'neutral', source: 'Facebook' }
            ]
        },
        comparison: {
            competitors: ['CityVet', 'PetCare', 'AnimalHealth'],
            data: {
                us: [78.5, 75.0, 72.0, 70.0],
                competitor1: [72.0, 73.0, 74.0, 74.5, 75.0, 75.0],
                competitor2: [68.0, 69.0, 70.0, 71.0, 71.5, 72.0]
            }
        },
        global: {
            regions: [
                { name: 'North America', score: 88 },
                { name: 'Europe', score: 45 },
                { name: 'Asia Pacific', score: 30 }
            ]
        },
        audio: {
            score: 85,
            trend: [80, 81, 82, 83, 84, 85],
            factors: [
                { name: 'Natural Language Optimization', status: 'good' },
                { name: 'Featured Snippet Potential', status: 'good' },
                { name: 'Local Voice Search', status: 'good' }
            ]
        }
    },
    {
        id: 2,
        name: 'GBVets',
        visibility: 92.1,
        visibilityChange: -0.5,
        sentiment: 68.9,
        sentimentChange: 1.2,
        llm1: 94.7,
        llm2: 96.3,
        llm3: 89.1,
        lowAVI: 112,
        mediumAVI: 134,
        highAVI: 267,
        topics: [
            'Top veterinary services',
            'Pet wellness programs',
            'Veterinary diagnostics',
            'Dog vaccination',
            'Cat dental care',
            'Pet grooming services'
        ],
        content: {
            recent: [
                { title: 'Pet Nutrition Guide', type: 'E-book', date: '2024-05-14', status: 'Published' },
                { title: 'Dental Health Month', type: 'Campaign', date: '2024-05-02', status: 'Completed' },
                { title: 'New Grooming Services', type: 'Announcement', date: '2024-04-28', status: 'Published' }
            ]
        },
        visibilityMetrics: {
            history: [90, 91, 92, 93, 92.5, 92.1],
            platforms: { google: 40, bing: 35, perplexity: 20, other: 5 }
        },
        performance: {
            avgResponseTime: '1.0s',
            citationRate: '88%',
            answerLength: '140 words',
            history: [1.1, 1.1, 1.0, 1.0, 1.0, 1.0],
            topQueries: [
                { query: 'Best vet for dogs', rank: 1 },
                { query: 'Pet wellness plans', rank: 1 },
                { query: 'Veterinary diagnostics lab', rank: 2 }
            ]
        },
        sentimentData: {
            history: [65, 66, 67, 68, 68, 68.9],
            mentions: [
                { text: 'Professional and clean facility.', sentiment: 'positive', source: 'Google Reviews' },
                { text: 'Prices are a bit high.', sentiment: 'negative', source: 'Yelp' },
                { text: 'Good service overall.', sentiment: 'positive', source: 'Twitter' }
            ]
        },
        comparison: {
            competitors: ['VetPlus', 'PetHealth', 'CareVet'],
            data: {
                us: [92.1, 88.0, 85.0, 82.0],
                competitor1: [85.0, 86.0, 87.0, 87.5, 88.0, 88.0],
                competitor2: [80.0, 81.0, 82.0, 83.0, 84.0, 85.0]
            }
        },
        global: {
            regions: [
                { name: 'North America', score: 95 },
                { name: 'Europe', score: 82 },
                { name: 'Asia Pacific', score: 70 }
            ]
        },
        audio: {
            score: 72,
            trend: [68, 69, 70, 71, 71, 72],
            factors: [
                { name: 'Natural Language Optimization', status: 'warning' },
                { name: 'Featured Snippet Potential', status: 'good' },
                { name: 'Local Voice Search', status: 'warning' }
            ]
        }
    }
];

export const sectionTitles = {
    dashboard: 'Dashboard',
    content: 'AI Content Writer',
    overview: 'Overview',
    visibility: 'Visibility Analysis',
    performance: 'Performance Metrics',
    sentiment: 'Sentiment Analysis',
    comparison: 'Comparison',
    global: 'Global Insights',
    topics: 'Topics',
    audio: 'Audio Modality'
};
