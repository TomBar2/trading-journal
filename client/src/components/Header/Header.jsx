import { useState } from 'react'
import { PlusCircle } from 'lucide-react'

import AddTradeForm from '@/features/trades/AddTradeForm.jsx'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function Header() {
    // Set default selectedRange as '1M'
    const [selectedRange, setSelectedRange] = useState('1M')

    return (
        <header className="glass-card items-ceneter flex justify-between border border-white/20 bg-white/10 px-8 py-6 text-left backdrop-blur-md">
            {/* Profile info section */}
            <div className="flex items-center gap-4">
                <img
                    src="/profile.png"
                    alt="Profile"
                    className="h-14 w-14 rounded-full border border-white/20 object-cover shadow-md"
                />

                <div>
                    <p className="text-lg font-medium text-white">Hi Tom!</p>
                    <p className="text-white/80">
                        {/* The {" "} is to make sure we have a space */}
                        Your total net-worth: <span className="font-semibold text-white">15,987$</span>{' '}
                        <span className="font-semibold text-green-500">29% change</span>
                    </p>

                    {/* Timeframe selector */}
                    <div className="mt-3 flex gap-2">
                        {/* Iterate through every time-range and create a button for it */}
                        {['1D', '1W', '1M', '1Y', 'ALL'].map(range => (
                            <button
                                key={range}
                                onClick={() => setSelectedRange(range)}
                                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                                    selectedRange === range
                                        ? // Make selected range look active
                                          'bg-white/20 text-white'
                                        : // Make others look choosable
                                          'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80'
                                }`}
                            >
                                {range}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex h-full items-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-[0.35rem] text-sm text-white/80 shadow-sm transition-all hover:bg-white/20">
                            <PlusCircle size={16} />
                            New Trade
                        </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl">
                        <DialogHeader>
                            <DialogTitle className="text-lg font-semibold">Add New Trade</DialogTitle>
                        </DialogHeader>
                        <AddTradeForm />
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    )
}
