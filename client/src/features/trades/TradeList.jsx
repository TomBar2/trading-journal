export default function TradeList({trades}) {
    if (!trades.length)
        return <p>No trades found.</p>;

    return (
        <table className="border w-full text-left">
            <thead>
            <tr>
                <th>Symbol</th>
                <th>Entry</th>
                <th>Exit</th>
            </tr>
            </thead>
            <tbody>
            {trades.map((t) => (
                <tr key={t.id}>
                    <td>{t.symbol}</td>
                    <td>{t.entry_price}</td>
                    <td>{t.exit_price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
