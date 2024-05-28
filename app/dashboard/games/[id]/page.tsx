import GameDetailsBoard from "@/app/components/GameDetails/GameDetailsBoard"
import GameDetailsPlayers from "@/app/components/GameDetails/GameDetailsPlayers"

import matches from "@/static/matches"
import players from "@/static/players"

export default function GameDetailsPage({ params }: { params: { id: number } }){

    if(!matches){
        return "No matches found"
    }
    
    return <>
    <GameDetailsBoard data={matches} />
    <GameDetailsPlayers players={players} teams={matches} />
    </>
}