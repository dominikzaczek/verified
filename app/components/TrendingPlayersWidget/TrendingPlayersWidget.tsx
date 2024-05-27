import players from "@/static/players";
import SinglePlayer from "../SinglePlayer";

function generateUniquePlayerIds() {
    const min = 0;
    const max = players.length - 1;
    const numbers = new Set();

    while (numbers.size < 3) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumber);
    }

    return Array.from(numbers);
}

export default function TrendingPlayersWidget(){
    const randomPlayerIds = generateUniquePlayerIds();
    
    return <div>
         <h2>Trending players</h2>
         <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 lg:gap-4">{randomPlayerIds.map((id:any, i) => {
            return <SinglePlayer data={players[id]} key={`trending-player-${i}`} />
         })}</div>
    </div>
}