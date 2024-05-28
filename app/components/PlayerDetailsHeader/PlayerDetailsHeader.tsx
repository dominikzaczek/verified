import { Player, Team } from "@/app/lib/types";

export default function PlayerDetailsHeader({playerData, team}:{playerData:Player, team:Team}){
    return <div className="bg-gray-900 text-white mb-5 rounded-lg p-5">
        <h1>{playerData.first_name} {playerData.last_name}</h1>
        <h2>{team.name}</h2>
    </div>
}