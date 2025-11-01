import { useState, useEffect } from "react"
import { getAllTrades } from "../api/tradesApi"

export function useTrades() {
    const [trades, setTrades] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllTrades()
            .then(data => setTrades(data))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    return { trades, loading }
}
