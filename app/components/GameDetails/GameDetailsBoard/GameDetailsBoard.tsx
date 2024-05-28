import { Team } from "@/app/lib/types"
import generateNameFromKey from "@/app/functions/generateNameFromKey"

function GameDetailsTable({ team1, team2 }:{team1:Team, team2:Team}) {

  const keys = Object.keys(team1.stats)

  return <div className="bg-white text-black rounded-lg p-4 lg:p-9">
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th><h1 className="table-team-name">{team1.name}</h1></th>
          <th className="hidden lg:table-cell">vs.</th>
          <th><h1 className="table-team-name">{team2.name}</h1></th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {keys.map((key:any, i) => {
          const name = generateNameFromKey(key)
          const team1Better = team1.stats[key] > team2.stats[key]
          return <tr key={`team-stat-${key}`}>
            <td className="text-center p-2">
              <p className="text-sm xl:hidden">{name}</p>
              <p className={`${team1Better ? "better-stat rounded-xl" : "rounded-xl"}`}>{team1.stats[key]}</p>
            </td>
            <td className="text-center p-2 hidden lg:table-cell">
              {name}
            </td>
            <td className="text-center p-2">
              <p className="text-sm xl:hidden">{name}</p>
              <p className={`${!team1Better ? "better-stat rounded-xl" : "rounded-xl"}`}>{team2.stats[key]}</p>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}

export default function GameDetailsBoard({ data }: { data: any }) {
  return <>
    <GameDetailsTable team1={data[0]} team2={data[1]} />
  </>


}