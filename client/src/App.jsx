import './index.css'

// Shadcn UI components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Custom components
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Header from '@/components/Header/Header.jsx'
import OpenTradesCard from '@/components/Dashboard/OpenTradesCard.jsx'
import StatsGrid from '@/components/Dashboard/StatsGrid.jsx'

export default function App() {
    return (
        <div className="min-h-screen p-5">
            <div className="mt-10 mr-5 ml-5 grid grid-cols-[1fr_6fr] gap-4">
                <Sidebar />
                <main className="flex flex-col gap-5">
                    <Header />
                    <StatsGrid />
                    <OpenTradesCard />
                </main>
            </div>
        </div>
    )
}
