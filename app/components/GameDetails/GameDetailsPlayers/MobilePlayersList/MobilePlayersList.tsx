"use client"
import SinglePlayer from "@/app/components/SinglePlayer";
import { Player } from "@/app/lib/types";
import React from "react";

function divideByTeamId(array: Player[]) {
    return array.reduce((result: any, obj) => {
        // Extract the team_id from the current object
        const { team_id } = obj;

        // If the team_id does not exist in the result object, create a new array for it
        if (!result[team_id]) {
            result[team_id] = [];
        }

        // Add the current object to the array corresponding to its team_id
        result[team_id].push(obj);

        // Return the updated result object for the next iteration
        return result;
    }, {});
}

export default function MobilePlayersList({ players, defaultSelectedTeam }: { players: Player[], defaultSelectedTeam: number }) {
    const [selectedTeam, setSelectedTeam] = React.useState(defaultSelectedTeam);

    const playersByTeam = divideByTeamId(players);
    const listOfTeams = Object.keys(playersByTeam);
    return <>
        <div className="grid grid-cols-2 gap-5 mb-5">
            {listOfTeams.map((team, key) => {
                return <h2 key={`team-id-${key}`} className={`${selectedTeam === Number(team) ? "bg-white text-black" : null} cursor-pointer text-center`} onClick={() => setSelectedTeam(Number(team))}>Team {team}</h2>
            })}
        </div>
        <div>
            {playersByTeam[selectedTeam].map((player: any, key: number) => {
                return <SinglePlayer data={player} key={`list-player-${key}`} />
            })}
        </div>
    </>
}