import StatsCard from "./StatsCard/StatsCard.jsx"

export default function StatsGrid() {
    return (
        <div className="grid grid-cols-4 grid-rows-16 gap-4">
            <div className="col-span-2 row-span-16">
                <StatsCard title="Win Rate" value="68%" />
            </div>

            <div className="row-span-8">
                <StatsCard
                    title="Avg Return"
                    value={<span className="text-green-600">+3.2%</span>}
                />
            </div>

            <div className="row-span-16">
                <StatsCard title="Stop-Loss Usage" value="82%" />
            </div>

            <div className="row-span-8">
                <StatsCard title="New Trades This Week" value="12" />
            </div>
        </div>
    )
}
