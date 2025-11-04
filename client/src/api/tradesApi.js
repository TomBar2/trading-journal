// This files isolates all communication with the backend

export async function getAllTrades() {
    const res = await fetch('http://localhost:5000/api/trades')
    console.log(res)
    if (!res.ok) throw new Error('Failed to fetch trades')
    return res.json()
}

export async function createTrade(tradeData) {
    const res = await fetch('http://localhost:5000/api/trades/createTrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tradeData),
    })

    if (!res.ok) {
        const errorText = await res.text()
        throw new Error(`Failed to create trade: ${errorText}`)
    }

    return res.json()
}
