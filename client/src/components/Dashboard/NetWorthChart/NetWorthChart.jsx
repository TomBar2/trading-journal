import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Mock data until get it from the server
const data = [
    { month: 'Jan', netWorth: 8500 },
    { month: 'Feb', netWorth: 10000 },
    { month: 'Mar', netWorth: 14000 },
    { month: 'Apr', netWorth: 9000 },
    { month: 'May', netWorth: 12300 },
    { month: 'Jun', netWorth: 12800 },
    { month: 'Jul', netWorth: 12900 },
    { month: 'Aug', netWorth: 9500 },
    { month: 'Sep', netWorth: 14500 },
    { month: 'Oct', netWorth: 15000 },
    { month: 'Nov', netWorth: 15987 },
]

export default function NetWorthChart() {
    return (
        <div className="flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md">
            <h2 className="mb-2 text-lg font-semibold">Net Worth Over Time</h2>
            <p className="mb-4 text-sm text-white/70">Showing total portfolio value</p>

            <div className="h-40 w-full">
                <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="month" stroke="#ffffff80" fontSize={12} />
                        <YAxis stroke="#ffffff80" fontSize={12} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                border: 'none',
                                borderRadius: '8px',
                            }}
                            labelStyle={{ color: '#fff' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="netWorth"
                            stroke="#818CF8"
                            fill="url(#colorNet)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/*Add an insight here about the current trend */}
            <p className="mt-4 text-sm text-green-400">Trending up by 5.2% this month</p>
            {/*<p className="text-xs text-white/60">{($data[0], $data[-1])}</p>*/}
        </div>
    )
}
