import RecentGamesWidget from "../components/RecentGamesWidget"
import TrendingPlayersWidget from "../components/TrendingPlayersWidget"

export default function DashboardIndex(){
    return <>
        <h2>Recent games</h2>
        <RecentGamesWidget />
       
        <TrendingPlayersWidget />
    </>
}