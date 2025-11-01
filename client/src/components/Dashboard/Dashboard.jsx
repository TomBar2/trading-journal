import TradesTable from "../../features/trades/TradesTable.jsx"
import { useTrades } from "../../hooks/useTrades.js"

export default function Dashboard() {
    const { trades, loading } = useTrades()

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="rounded-lg bg-white pb-4 shadow">
            Dashboard
            <TradesTable trades={trades} />
        </div>
    )
}
