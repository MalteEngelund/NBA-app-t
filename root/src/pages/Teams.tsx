import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";

export function Teams() {
  
  const { data, isLoading, error } = useFetch(
        `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`,
      )
  
      if (isLoading) {
        return <h2>Loading data... {error}</h2>
      }
  
      if (error) {
        return <h2>Error: {error}</h2>
      }
      console.log(data);
  
  return (
    <main className="flex flex-col justify-center">
      <Title title="Teams" />
      <div className="">
        <ul className="grid grid-cols-3 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {data?.sports?.[0]?.leagues?.[0]?.teams.map(team => (
            <li key={team.team.id} className="flex justify-center bg-gray-300 rounded-2xl" >
              <a href={`/teams/${team.team.id}`} className="flex flex-col justify-center items-center w-full p-4">
                {team.team.logos?.[0] && <img src={team.team.logos[0].href} alt={`${team.team.displayName} logo`} width={50} />}
                <p className="text-center">{team.team.displayName}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

    </main>
  )
}