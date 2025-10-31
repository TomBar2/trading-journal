import TradeList from "../../features/trades/TradeList.jsx";
import {useTrades} from "../../hooks/useTrades.js";

export default function Dashboard() {
    const {trades, loading} = useTrades()


    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className='bg-white rounded-lg shadow pb-4'>
            Dashboard
            <TradeList trades={trades}/>
        </div>
    )
}