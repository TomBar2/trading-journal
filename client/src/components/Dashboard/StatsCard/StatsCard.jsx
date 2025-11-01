import "./StatsCard.css"

export default function StatsCard({ title, value }) {
    return (
        <div className="stats-card border border-white/20 bg-white/10 backdrop-blur-md">
            <div className="stats-card-title">{title}</div>
            <div className="stats-card-value">{value}</div>
        </div>
    )
}
