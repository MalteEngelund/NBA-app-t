import { H2Title } from "../components/H2Title/H2Title";
import { Title } from "../components/Title/Title";
import { useFetch } from "../hooks/useFetch";
import type { ResultsR } from "../types/ResultsRTypes";

export function HomePage() {

  const { data, isLoading, error } = useFetch<ResultsR>(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`,
  )
  
  if (isLoading) {
    return <h2>Loading data... {error}</h2>
  }
  
  if (error) {
   return <h2>Error: {error}</h2>
  }
  console.log("events Data:", data);




  return (
    <main className="p-4">
      <Title title="Home" />
      <div className=" p-4 bg-gray-800 text-white rounded-lg">
        <H2Title title="Games" />
        <div className="">
          {data?.events?.map((event:any) => (
            <div className="py-4" key={event.id}>
              <p>{event.name}</p>
              <p>{event.status.type.detail}</p>
              {(() => {
                const competitors = event.competitions[0].competitors;
                const home = competitors.find((c: any) => c.homeAway === "home");
                const away = competitors.find((c: any) => c.homeAway === "away");
                return (
                  <p>
                    Score:  {away?.team.abbreviation} {away?.score}   -   {home?.score}   {home?.team.abbreviation}
                  </p>
                );
              })()}
              <p>{event.competitions[0].notes[0]?.headline}</p>
            </div>
          ) 
          )}
        </div>
      </div>
    </main>
  )
}