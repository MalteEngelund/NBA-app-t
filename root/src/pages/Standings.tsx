import { H2Title } from "../components/H2Title/H2Title";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch"

export function Standings() {


  const { data, isLoading, error } = useFetch(
      `https://site.api.espn.com/apis/v2/sports/basketball/nba/standings`,
    )

    if (isLoading) {
      return <h2>Loading data... {error}</h2>
    }

    if (error) {
      return <h2>Error: {error}</h2>
    }
    console.log(data);
    

  const sortByPlayoffSeed = (entries) => {
    if (!entries) return [];
    return [...entries].sort((a, b) => {
      const aSeed = a.stats?.find(stat => stat.name === "playoffSeed")?.value ?? 99;
      const bSeed = b.stats?.find(stat => stat.name === "playoffSeed")?.value ?? 99;
      return aSeed - bSeed;
    });
  };

  const eastEntries = sortByPlayoffSeed(data?.children?.[0]?.standings?.entries);
  const westEntries = sortByPlayoffSeed(data?.children?.[1]?.standings?.entries);

  return (
    <main className=" flex flex-col gap-2 bg-gray-100">
      <Title title="Standings" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <H2Title title="East" />
          
          <ul className="">
            {eastEntries.map((entry, idx) => (
              <li key={entry.team.id} className="flex justify-between items-center odd:bg-gray-200 even:bg-gray-300 py-2 px-4">
                <div className="flex gap-4 items-center">
                  <p>{entry.stats?.find(stat => stat.name === "playoffSeed")?.displayValue || idx + 1}.</p>
                  <div className="flex flex-row gap-2 items-center"><img src={entry.team.logos?.[0]?.href} alt={`${entry.team.displayName} logo`} width={30} /> <p>{entry.team.displayName}</p> </div>
                </div>
                <p>{entry.stats?.find(stat => stat.name === "overall")?.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <H2Title title="West" />
          <div className="flex justify-between px-4">
            <h3>Ranking</h3>
            <h3>Team</h3>
            <h3>Record</h3>
          </div>
          <ul>
            {westEntries.map((entry, idx) => (
              <li key={entry.team.id} className="flex gap-4 justify-between items-center odd:bg-gray-200 even:bg-gray-300 py-2 px-4">
                <div className="flex gap-4 items-center">
                  <p className="">{entry.stats?.find(stat => stat.name === "playoffSeed")?.displayValue || idx + 1}.</p>
                  <div className="flex flex-row gap-2 items-center"><img src={entry.team.logos?.[0]?.href} alt={`${entry.team.displayName} logo`} width={30} /> <p>{entry.team.displayName}</p> </div>
                </div>
                <p className="">{entry.stats?.find(stat => stat.name === "overall")?.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}