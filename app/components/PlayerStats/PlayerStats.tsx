import SingleStatChart from "./SingleStatChart";

export default function PlayerStats({ data }: { data: any }) {
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
        {data.map((stat:any, key:number) => {
            return <SingleStatChart data={stat} key={`player-stat-${key}`}/>
        })}
    </div>
}