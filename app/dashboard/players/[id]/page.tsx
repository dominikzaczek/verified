import players from "@/static/players";
import matches from "@/static/matches";

function findPlayerById(id:number) {
    return players.find(player => player.$id === Number(id));
}


export default function PlayerDetails({params}:{params:{id:number}}){
    const data = findPlayerById(params.id)

    if(!data) return null;

    const playersTeam = matches[data.team_id - 1]
    return <><p>{playersTeam.name}</p></>
}