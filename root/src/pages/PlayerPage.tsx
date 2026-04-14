import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { H2Title } from "../components/H2Title/H2Title";
import type { PlayerPageTypes, PlayerStats } from "../types/PlayerPageTypes";

export function PlayerPage() {

  const { id } = useParams();

  const { data, isLoading, error } = useFetch<PlayerPageTypes>(
    `http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/athletes/${id}?lang=en&region=us`
  );

  const statsUrl = data?.statistics?.$ref;
  const {
    data: statsData,
    isLoading: statsLoading,
    error: statsError,
  } = useFetch<PlayerStats>(statsUrl || "");

  if (isLoading || statsLoading) {
    return <h2>Loading data...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  if (statsError) {
    return <h2>Error loading stats: {statsError}</h2>;
  }

  console.log("Player data:", data);
  console.log("Stats data:", statsData);

  const formattedDob = data?.dateOfBirth
    ? new Date(data.dateOfBirth).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main className="bg-gray-100">
      <H2Title title={data?.displayName || "Player Details"} />
      
      
      <div className="flex justify-center items-center gap-4">
        {data?.headshot?.href && (
          <img className="w-45 h-45 object-cover rounded-full" src={data.headshot.href} alt={data.headshot.alt || data.displayName} />
        )}
        <div className="">
          <p>Age: {data?.age} - {formattedDob}</p>
          <p>Draft {data?.draft?.displayText}</p>
          <p>Position: {data?.position?.abbreviation}</p>
          <p>Height: {data?.displayHeight}</p>
          <p>Weight: {data?.displayWeight}</p>
        </div>
        {/* <p>Team: {data?.team}</p> */}
        {/* <p>Contract {data?.contract.salary}</p> */}
      </div>
        
      {statsData && (
        <div>
          <h2></h2>
          <H2Title title="Stats Per Game - Current Season" />
          <ul className="">
            <li className="flex gap-4 justify-between items-center bg-gray-200  py-2 px-4">
              PTS: {
                statsData?.splits?.categories?.[2]?.stats?.find(
                  (stat: any) =>
                    stat?.name === "avgPoints" ||
                    stat?.displayName === "Points Per Game"
                )?.displayValue || "N/A"
              }
            </li>
            <li className="flex gap-4 justify-between items-center bg-gray-300  py-2 px-4">
              REB: {
                statsData?.splits?.categories?.[1]?.stats?.find(
                  (stat: any) =>
                    stat?.name === "avgRebounds" ||
                    stat?.displayName === "Rebounds Per Game"
                )?.displayValue || "N/A"
              }
            </li>
            <li className="flex gap-4 justify-between items-center bg-gray-200  py-2 px-4">
              AST: {
                statsData?.splits?.categories?.[2]?.stats?.find(
                  (stat: any) =>
                    stat?.name === "avgAssists" ||
                    stat?.displayName === "Assists Per Game"
                )?.displayValue || "N/A"
              }
            </li>
            <li className="flex gap-4 justify-between items-center bg-gray-300  py-2 px-4">
              STL: {
                statsData?.splits?.categories?.[0]?.stats?.find(
                  (stat: any) =>
                    stat?.name === "avgSteals" ||
                    stat?.displayName === "Steals Per Game"
                )?.displayValue || "N/A"
              }
            </li>
            <li className="flex gap-4 justify-between items-center bg-gray-200  py-2 px-4">
              BLK: {
                statsData?.splits?.categories?.[0]?.stats?.find(
                  (stat: any) =>
                    stat?.name === "avgBlocks" ||
                    stat?.displayName === "Blocks Per Game"
                )?.displayValue || "N/A"
              }
            </li>
          </ul>
        </div>
      )}
      
    </main>
  );
}