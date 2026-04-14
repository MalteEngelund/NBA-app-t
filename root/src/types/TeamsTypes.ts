export interface TeamsTypes {
  sports: Sport[];
}

export interface Sport {
  id:      string;
  uid:     string;
  name:    string;
  slug:    string;
  leagues: League[];
}

export interface League {
  id:           string;
  uid:          string;
  name:         string;
  abbreviation: string;
  shortName:    string;
  slug:         string;
  teams:        TeamElement[];
  year:         number;
  season:       Season;
}

export interface Season {
  year:        number;
  displayName: string;
}

export interface TeamElement {
  team: TeamTeam;
}

export interface TeamTeam {
  id:               string;
  uid:              string;
  slug:             string;
  abbreviation:     string;
  displayName:      string;
  shortDisplayName: string;
  name:             string;
  nickname:         string;
  location:         string;
  color:            string;
  alternateColor:   string;
  isActive:         boolean;
  isAllStar:        boolean;
  logos:            Logo[];
  links:            Link[];
}

export interface Link {
  language:   Language;
  rel:        LinkRel[];
  href:       string;
  text:       Text;
  shortText:  Text;
  isExternal: boolean;
  isPremium:  boolean;
  isHidden:   boolean;
}

export type Language = "en-US";

export type LinkRel =
  | "clubhouse"
  | "depthchart"
  | "desktop"
  | "roster"
  | "schedule"
  | "stats"
  | "team"
  | "tickets";

export type Text =
  | "Clubhouse"
  | "Depth Chart"
  | "Roster"
  | "Schedule"
  | "Statistics"
  | "Tickets";

export interface Logo {
  href:   string;
  alt:    string;
  rel:    LogoRel[];
  width:  number;
  height: number;
}

export type LogoRel =
  | "dark"
  | "default"
  | "full"
  | "primary_logo_black"
  | "primary_logo_on_black_color"
  | "primary_logo_on_primary_color"
  | "primary_logo_on_secondary_color"
  | "primary_logo_on_white_color"
  | "primary_logo_white"
  | "scoreboard"
  | "secondary_logo_black"
  | "secondary_logo_on_black_color"
  | "secondary_logo_on_primary_color"
  | "secondary_logo_on_secondary_color"
  | "secondary_logo_on_white_color"
  | "secondary_logo_white";
