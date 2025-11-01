import TradesTable from "../../features/trades/TradesTable.jsx"
import { useTrades } from "../../hooks/useTrades.js"

export default function OpenTradesCard() {
    const { trades, loading } = useTrades()

    if (loading) {
        return <div className="h-6 w-full animate-pulse rounded bg-white/10"></div>
    }

    return (
        <div className="glass-card items-center justify-center border border-white/20 bg-white/10 p-2 backdrop-blur-md">
            {/* flex and flex-col stack elements vertically, one on top of the other */}
            <div className="flex flex-col gap-2">
                <h2 className="mb-3 text-sm font-semibold tracking-wide text-white/80 uppercase">
                    Open Trades
                </h2>
                <TradesTable trades={trades} />
            </div>
        </div>
    )
}
