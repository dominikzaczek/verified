import matches from "@/static/matches"

export default function RecentGamesWidget(){
    return <div className="mt-3 bg-white text-black rounded-lg overflow-hidden cursor-pointer hover:rounded-sm hover:box-shadow-xl shadow-zinc-200 transition-all duration-500">
        <div className="bg-indigo-300 p-2 text-white flex justify-center">
            USA FOOTBALL
            </div> 
            <div className="p-3  divide-y-2">
        {matches.map((team, i) => {
            const {name, stats} = team;

            return <div className={`flex flex-col ${i === 1 ? "items-end" : null}`}>
                <p>{name}</p>
                <p>{stats.points_per_game}</p>
            </div>
        })}
        </div>
    </div>
}