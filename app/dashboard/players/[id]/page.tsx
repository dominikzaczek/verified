import PlayerStats from "@/app/components/PlayerStats";
import PlayerDetailsHeader from "@/app/components/PlayerDetailsHeader";
import SinglePlayer from "@/app/components/SinglePlayer";

import players from "@/static/players";
import matches from "@/static/matches";
import player_stats from "@/static/player_stats";
import { PlayerStats as TypePlayerStats } from "@/app/lib/types";
import { Stat } from "@/app/lib/types";

function findPlayerById(id:number) {
    return players.find(player => player.$id === Number(id));
}

function aggregateStats(data:TypePlayerStats[]) {
    type Result = {
        [key: string]: number[];
    };

    const result:Result = {};

    data.forEach((game:TypePlayerStats) => {
        game.stats.forEach((stat:Stat) => {
            if (!result[stat.type]) {
                result[stat.type] = [];
            }
            result[stat.type].push(stat.value);
        });
    });

    return Object.keys(result).map(type => ({
        type: type,
        values: result[type]
    }));

}

function OtherPlayersInTeam({teamId}:{teamId:number}) {
    const playersInTeam = players.filter(player => player.team_id === teamId)

    return <>
    <h2>Other players in the team</h2>
    <div className="grid grid-cols-1 xl:grid-cols-3 mt-5">
        {playersInTeam.map((player, key) => {
            return <SinglePlayer data={player} key={`player-${key}`}/>
        })}
    </div></>
}
export default function PlayerDetails({params}:{params:{id:number}}){
    const data = findPlayerById(params.id)
    if(!data) return null;

    const playerStats = player_stats.filter(stat => stat.player_id === data.$id);
    const aggregatedStats = aggregateStats(playerStats);
    const playersTeam = matches[data.team_id - 1]

    return <>
        <PlayerDetailsHeader playerData={data} team={playersTeam} />
        <PlayerStats data={aggregatedStats} />
        <OtherPlayersInTeam teamId={data.team_id} />
    </>
}