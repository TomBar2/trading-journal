import { Home, History, PlusCircle, BarChart3, Notebook, User, Settings, LogOut } from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="flex w-[200px] flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
            {/* --- Top: Main navigation --- */}
            <nav className="flex flex-col gap-3 text-sm font-medium text-white/90">
                <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
                <SidebarItem icon={<History size={18} />} label="Past Trades" />
                <SidebarItem icon={<Notebook size={18} />} label="Strategy Notes" />
                <SidebarItem icon={<BarChart3 size={18} />} label="Insights" />
            </nav>

            {/* --- Bottom: Settings & Logout --- */}
            <div className="flex flex-col gap-3 text-sm">
                <SidebarItem icon={<User size={18} />} label="Profile" />
                <SidebarItem icon={<Settings size={18} />} label="Settings" />
                <SidebarItem icon={<LogOut size={18} />} label="Logout" subtle />
            </div>
        </aside>
    )
}

/* --- Reusable sidebar item --- */
function SidebarItem({ icon, label, active, subtle }) {
    return (
        <button
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200 ${
                active
                    ? 'bg-white/10 font-semibold text-white shadow-sm'
                    : subtle
                      ? 'text-white/40 hover:bg-white/5 hover:text-white/70'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
            }`}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    )
}
