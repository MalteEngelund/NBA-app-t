export interface TeamPage {
  timestamp: Date;
  status:    string;
  season:    TeamPageSeason;
  athletes:  Athlete[];
  coach:     Coach[];
  team:      TeamPageTeam;
}

export interface Athlete {
  id:            string;
  uid:           string;
  guid:          string;
  alternateIds:  AlternateIDS;
  firstName:     string;
  lastName:      string;
  fullName:      string;
  displayName:   string;
  shortName:     string;
  weight:        number;
  displayWeight: string;
  height:        number;
  displayHeight: string;
  age:           number;
  dateOfBirth:   string;
  links:         Link[];
  birthPlace:    BirthPlace;
  slug:          string;
  headshot:      Headshot;
  jersey:        string;
  position:      Position;
  injuries:      Injury[];
  teams:         TeamElement[];
  contracts:     ContractElement[];
  experience:    Experience;
  contract?:     PurpleContract;
  status:        StatusClass;
  debutYear?:    number;
  college?:      College;
  hand?:         Hand;
}

export interface AlternateIDS {
  sdr: string;
}

export interface BirthPlace {
  city?:    string;
  state?:   string;
  country?: string;
}

export interface College {
  id:        string;
  guid:      string;
  mascot:    string;
  name:      string;
  shortName: string;
  abbrev:    string;
  logos:     Logo[];
}

export type LogoRel = "dark" | "default" | "full";

export interface PurpleContract {
  birdStatus:             number;
  baseYearCompensation:   Ion;
  poisonPillProvision:    Ion;
  incomingTradeValue:     number;
  outgoingTradeValue:     number;
  minimumSalaryException: boolean;
  optionType:             number;
  salary:                 number;
  salaryRemaining:        number;
  yearsRemaining:         number;
  season:                 ContractSeason;
  tradeKicker:            TradeKicker;
  tradeRestriction:       boolean;
  unsignedForeignPick:    boolean;
  active:                 boolean;
}

export interface Ion {
  active: boolean;
}

export interface ContractSeason {
  year:      number;
  startDate: string;
  endDate:   string;
}

export interface TradeKicker {
  active:     boolean;
  percentage: number;
  value:      number;
  tradeValue: number;
}

export interface ContractElement {
  salary:  number;
  season?: ContractSeason;
}

export interface Experience {
  years: number;
}

export interface Hand {
  type:         string;
  abbreviation: string;
  displayValue: string;
}

export interface Headshot {
  href: string;
  alt:  string;
}

export interface Injury {
  status: StatusEnum;
  date:   string;
}

export type StatusEnum = "Day-To-Day" | "Out";

export interface Link {
  language:   Language;
  rel:        LinkRel[];
  href:       string;
  text:       Text;
  shortText:  Text;
  isExternal: boolean;
  isPremium:  boolean;
}

export interface Logo {
  href: string;
  alt: string;
  rel: LogoRel[];
  width: number;
  height: number;
}

export type Language = "en-US";

export type LinkRel =
  | "advancedstats"
  | "athlete"
  | "bio"
  | "desktop"
  | "gamelog"
  | "news"
  | "overview"
  | "playercard"
  | "splits"
  | "stats";

export type Text =
  | "Advanced Stats"
  | "Bio"
  | "Game Log"
  | "News"
  | "Overview"
  | "Player Card"
  | "Splits"
  | "Stats";

export interface Position {
  id:           string;
  name:         Name;
  displayName:  Name;
  abbreviation: PositionAbbreviation;
  leaf:         boolean;
}

export type PositionAbbreviation = "C" | "F" | "G";

export type Name = "Center" | "Forward" | "Guard";

export interface StatusClass {
  id:           string;
  name:         NameEnum;
  type:         Type;
  abbreviation: NameEnum;
}

export type NameEnum = "Active";

export type Type = "active";

export interface TeamElement {
  $ref: string;
}

export interface Coach {
  id:         string;
  firstName:  string;
  lastName:   string;
  experience: number;
}

export interface TeamPageSeason {
  year:        number;
  displayName: string;
  type:        number;
  name:        string;
}

export interface TeamPageTeam {
  id: string;
  abbreviation: string;
  location: string;
  name: string;
  displayName: string;
  clubhouse: string;
  color: string;
  logo: string;
  recordSummary: string;
  seasonSummary: string;
  standingSummary: string;
  logos: Logo[];
  record?: TeamRecord;
}

export interface TeamRecord {
  items: TeamRecordItem[];
}

export interface TeamRecordItem {
  summary: string;
}
