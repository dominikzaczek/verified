import matches from "@/static/matches"

export default function GameDetailsPage({ params }: { params: { id: number } }){
    const matchData = matches[params.id]

    if(!matchData){
        return "KOKO"
    }
    
    return <p>{JSON.stringify(matchData)}</p>
}