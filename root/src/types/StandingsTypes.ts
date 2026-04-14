export interface StandingsTypes {
  uid:          string;
  id:           string;
  name:         string;
  abbreviation: string;
  shortName:    string;
  children:     Child[];
  isConference: boolean;
  season:       PurpleSeason;
  links:        Link[];
  seasons:      SeasonElement[];
}

export interface Child {
  uid:          string;
  id:           string;
  name:         string;
  abbreviation: string;
  isConference: boolean;
  standings:    Standings;
}

export interface Standings {
  id:                string;
  name:              StatName;
  displayName:       ShortText;
  links:             Link[];
  season:            number;
  seasonType:        number;
  seasonDisplayName: string;
  entries:           Entry[];
}

export type ShortText = "Clubhouse" | "Standings";

export interface Entry {
  team:  Team;
  stats: Stat[];
}

export interface Stat {
  name:             StatName;
  displayName:      DisplayName;
  shortDisplayName: ShortDisplayNameEnum;
  description:      string;
  abbreviation?:    ShortDisplayNameEnum;
  type:             TypeEnum;
  value?:           number;
  displayValue:     string;
  id?:              string;
  summary?:         string;
}

export type ShortDisplayNameEnum =
  | "AWAY"
  | "CLINCH"
  | "CONF"
  | "DIFF"
  | "DIV"
  | "DPCT"
  | "GB"
  | "GA"
  | "HOME"
  | "L"
  | "L10"
  | "LPCT"
  | "OPP PPG"
  | "OVER"
  | "PA"
  | "PCT"
  | "PF"
  | "POS"
  | "PPG"
  | "PTS"
  | "SEED"
  | "STRK"
  | "Total"
  | "W";

export type DisplayName =
  | "Average Point Differential"
  | "Clincher"
  | "CONF"
  | "DIV"
  | "Division Win Percentage"
  | "Games Ahead"
  | "Games Back"
  | "Home"
  | "Last Ten Games"
  | "League Win Percentage"
  | "Losses"
  | "Opponent Points Per Game"
  | "Overall"
  | "Point Differential"
  | "Points"
  | "Points Against"
  | "Points For"
  | "Points Per Game"
  | "Position"
  | "Road"
  | "Streak"
  | "Wins"
  | "Win Percentage";

export type StatName =
  | "avgPointsAgainst"
  | "avgPointsFor"
  | "clincher"
  | "differential"
  | "divisionWinPercent"
  | "gamesAhead"
  | "gamesBehind"
  | "Home"
  | "Last Ten Games"
  | "leagueWinPercent"
  | "losses"
  | "overall"
  | "playoffSeed"
  | "pointDifferential"
  | "points"
  | "pointsAgainst"
  | "pointsFor"
  | "Road"
  | "streak"
  | "vs. Conf."
  | "vs. Div."
  | "wins"
  | "winPercent";

export type TypeEnum =
  | "avgpointsagainst"
  | "avgpointsfor"
  | "clincher"
  | "differential"
  | "divisionwinpercent"
  | "gamesahead"
  | "gamesbehind"
  | "home"
  | "lasttengames"
  | "leaguewinpercent"
  | "losses"
  | "playoffseed"
  | "pointdifferential"
  | "points"
  | "pointsagainst"
  | "pointsfor"
  | "road"
  | "streak"
  | "total"
  | "vsconf"
  | "vsdiv"
  | "wins"
  | "winpercent";

export interface Team {
  id:               string;
  uid:              string;
  location:         string;
  name:             string;
  abbreviation:     string;
  displayName:      string;
  shortDisplayName: string;
  isActive:         boolean;
  logos:            Logo[];
  links:            Link[];
}

export interface Link {
  language:   Language;
  rel:        LinkRel[];
  href:       string;
  text:       Text;
  shortText:  ShortText;
  isExternal: boolean;
  isPremium:  boolean;
}

export type Language = "en-US";

export type LinkRel = "clubhouse" | "desktop" | "standings" | "team";

export type Text = "Clubhouse" | "Table";

export interface Logo {
  href:        string;
  width:       number;
  height:      number;
  alt:         string;
  rel:         LogoRel[];
  lastUpdated: string;
}

export type LogoRel = "dark" | "default" | "full" | "scoreboard";

export interface PurpleSeason {
  year:        number;
  startDate:   string;
  endDate:     string;
  displayName: string;
}

export interface SeasonElement {
  year:        number;
  startDate:   string;
  endDate:     string;
  displayName: string;
  types:       TypeElement[];
  seasonYears: string;
}

export interface TypeElement {
  id:           string;
  name:         TypeName;
  abbreviation: TypeAbbreviation;
  startDate:    string;
  endDate:      string;
  hasStandings: boolean;
}

export type TypeAbbreviation = "off" | "playin" | "post" | "pre" | "reg";

export type TypeName =
  | "Off Season"
  | "Play-In Season"
  | "Postseason"
  | "Preseason"
  | "Regular Season";
