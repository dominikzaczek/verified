import Link from "next/link";
import matches from "@/static/matches";


export default function SinglePlayer({data}:{data:{$id:number, first_name:string, last_name:string}}){
    const playersTeam = matches[data.team_id - 1]
    return <Link href={`/dashboard/players/${data.$id}`}>
        <div className="static-background rounded-lg mb-3 p-3 col-span-1 hover:scale-105 hover:bg-gray-800 transform-all duration-300 cursor-pointer">
        <p className="text-xl">{data.first_name} {data.last_name}</p>
        <p className="text-sm">{playersTeam.name}</p>
        <div className="mt-3 flex gap-5">
            <span>Games played: {data.games_played}</span>
            <span>Yards per game: {data.stats.yards_per_game}</span>
        </div>
    </div>
    </Link>
}