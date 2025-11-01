import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import "./TradeList.css"

export default function TradesTable({ trades }) {
    if (!trades.length) return <p className="py-6 text-center text-white/70">No trades found.</p>

    return (
        <div className="table-wrapper rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <Table className="min-w-full text-sm leading-relaxed">
                <TableHeader className="border-b border-white/20 bg-white/[0.07]">
                    <TableRow className="border-b border-white/40 hover:bg-transparent">
                        <TableHead className="text-md text-white/70 uppercase">Symbol</TableHead>
                        <TableHead className="text-md text-white/70 uppercase">Current</TableHead>
                        <TableHead className="text-md text-white/70 uppercase">
                            Entry Price
                        </TableHead>
                        <TableHead className="text-md text-white/70 uppercase">Quantity</TableHead>
                        <TableHead className="text-xs text-white/70 uppercase">Total</TableHead>
                        <TableHead className="text-xs text-white/70 uppercase">Stop Loss</TableHead>
                        <TableHead className="text-xs text-white/70 uppercase">
                            Take Profit
                        </TableHead>
                        <TableHead className="text-xs text-white/70 uppercase">
                            Entry Date
                        </TableHead>
                        <TableHead className="text-xs text-white/70 uppercase">Horizon</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="divide-y divide-white/[0.07]">
                    {trades.map(t => (
                        <TableRow
                            key={t.id}
                            className="transition-colors odd:bg-white/[0.02] even:bg-transparent hover:bg-white/[0.05]"
                        >
                            <TableCell className="font-semibold text-white">{t.symbol}</TableCell>
                            <TableCell className="text-white/80 tabular-nums">
                                {t.current_price}
                            </TableCell>
                            <TableCell className="text-white/80 tabular-nums">
                                {t.entry_price}
                            </TableCell>
                            <TableCell className="text-white/80 tabular-nums">
                                {t.quantity}
                            </TableCell>
                            <TableCell className="text-white/80 tabular-nums">
                                {(t.entry_price * t.quantity).toFixed(2)}
                            </TableCell>
                            <TableCell className="font-medium text-red-400">
                                {t.stop_loss}
                            </TableCell>
                            <TableCell className="font-medium text-green-400">
                                {t.take_profit}
                            </TableCell>
                            <TableCell className="text-white/70">
                                {new Date(t.entry_date).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-white/80 capitalize">
                                {t.investment_horizon}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
