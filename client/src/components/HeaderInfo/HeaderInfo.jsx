export default function HeaderInfo() {
    return (
        <header className="glass-card items-ceneter flex justify-between border border-white/20 bg-white/10 p-6 text-left backdrop-blur-md">
            {/* Profile picture + greeting */}
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
                        Your total net-worth:{' '}
                        <span className="font-semibold text-white">15,987$</span>{' '}
                        <span className="font-semibold text-green-500">29% change</span>
                    </p>
                </div>
            </div>
        </header>
    )
}
