// This files isolates all communication with the backend
export async function getAllTrades() {
    const res = await fetch('http://localhost:5000/api/trades')
    console.log(res)
    if (!res.ok) throw new Error('Failed to fetch trades')
    return res.json()
}
