import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Title } from "../components/Title/Title";
import { H2Title } from "../components/H2Title/H2Title";
import type { TeamPage } from "../types/TeamPageTypes";

export function TeamPage() {
  const { id } = useParams();
  console.log("Route param id:", id);


  const {
    data: teamData,
    isLoading: teamLoading,
    error: teamError,
  } = useFetch<TeamPage>(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${id}`
  );
  console.log("Fetched teamData:", teamData);


  const teamId = teamData?.team?.id;
  const rosterUrl = teamId
    ? `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}/roster`
    : null;
  const {
    data: rosterData,
    isLoading: rosterLoading,
    error: rosterError,
  } = useFetch<TeamPage>(rosterUrl || "");
  console.log("Fetched rosterData:", rosterData);

  if (teamLoading || (teamId && rosterLoading)) {
    return <h2>Loading data...</h2>;
  }
  if (teamError) {
    return <h2>Error: {teamError}</h2>;
  }
  if (rosterError) {
    return <h2>Error loading roster: {rosterError}</h2>;
  }


  return (
    <>
      <header className="flex flex-col items-center gap-5">
        <div>
          {teamData?.team?.logos?.[0] && (
            <img
              src={teamData.team.logos[0].href}
              alt={`${teamData.team.displayName} logo`}
              width={200}
            />
          )}
        </div>
        <Title title={teamData?.team?.displayName || "Team Details"} />
      </header>
      <section>
        <H2Title title="Roster" />
        <div>
          <H2Title title={`Season Record: ${teamData?.team?.record?.items[0]?.summary}`} />
        </div>
        <div className="w-full">
          <ul className="flex flex-col p-6">
            {rosterData?.athletes?.map((athlete) => (
              <li key={athlete.id} className="flex p-2 items-center odd:bg-gray-200 even:bg-gray-300">
                <a className="flex w-full items-center gap-2" href={`/player/${athlete.id}`}>
                  <p className="">{athlete.position?.abbreviation}</p>
                  <div className="grid grid-cols-3 w-full px-4 items-center gap-4">
                    <p className="">{athlete.displayName}</p>
                    <p className="">Age: {athlete.age}</p>
                    <div className="flex justify-between items-center gap-4">
                    <p>Height: {athlete.displayHeight}</p>
                    <p>Weight: {athlete.displayWeight}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* need a better api endpoint
      <section>
        <h2>Contracts</h2>
        <div>
          {rosterData?.athletes?.map((athlete) => (
            <ul className="grid grid-cols-7 gap-4 p-6" key={athlete.id}>
              <li>{athlete.displayName}</li>
              <li>{athlete.contracts?.[1]?.salary}</li>
            </ul>
            
          ))}
        </div>
      </section> */}
    </>
  );
}