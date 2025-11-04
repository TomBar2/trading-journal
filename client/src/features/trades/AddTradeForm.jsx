import { useState } from 'react'
import { createTrade } from '@/api/tradesApi.js'

export default function AddTradeForm() {
    const [form, setForm] = useState({ symbol: '' })
    const [success, setSuccess] = useState(true)
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)

        try {
            await createTrade({ ...form, user_id: 1, stop_loss: 200 })
            setSuccess(true)
            // Reset form
            setForm({ symbol: '' })
        } catch (error) {
            console.error(error)
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            <input
                name="symbol"
                value={form.symbol}
                onChange={handleChange}
                placeholder="Symbol (e.g. AAPL)"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:ring-1 focus:ring-white/30 focus:outline-none"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-lg bg-white/20 py-2 text-sm font-medium text-white transition hover:bg-white/30 disabled:opacity-50"
            >
                {loading ? 'Adding…' : 'Add Trade'}
            </button>
        </form>
    )
}
