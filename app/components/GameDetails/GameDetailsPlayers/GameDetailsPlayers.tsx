import React from "react";
import { Player, Team } from "@/app/lib/types"

import SinglePlayer from "../../SinglePlayer";
import MobilePlayersList from "./MobilePlayersList";

function PlayersList({ players }: { players: Player[] }) {
    return <div>
        {players.map((player, index) => {
            return <SinglePlayer data={player} key={`player-list-${index}`}/>
        })}</div>;
}

export default function GameDetailsPlayers({ players, teams }: { players: Player[], teams: Team[] }) {
    return <>
        <h1 className="mt-5">Players</h1>
        <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-5">
                {teams.map((team, k) => {
                    const listOfPlayers = players.filter(player => player.team_id === team.$id);
                    return <PlayersList players={listOfPlayers} key={`listed-players-${k}`} />
                })}
            </div>
        </div>
        <div className="block lg:hidden">
            <MobilePlayersList players={players} defaultSelectedTeam={players[0].team_id}/>
        </div>
    </>
}