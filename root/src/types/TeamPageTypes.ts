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

export interface Logo {
  href:        string;
  width:       number;
  height:      number;
  alt:         string;
  rel:         LogoRel[];
  lastUpdated: string;
}

export enum LogoRel {
  Dark = "dark",
  Default = "default",
  Full = "full",
}

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

export enum StatusEnum {
  DayToDay = "Day-To-Day",
  Out = "Out",
}

export interface Link {
  language:   Language;
  rel:        LinkRel[];
  href:       string;
  text:       Text;
  shortText:  Text;
  isExternal: boolean;
  isPremium:  boolean;
}

export enum Language {
  EnUS = "en-US",
}

export enum LinkRel {
  Advancedstats = "advancedstats",
  Athlete = "athlete",
  Bio = "bio",
  Desktop = "desktop",
  Gamelog = "gamelog",
  News = "news",
  Overview = "overview",
  Playercard = "playercard",
  Splits = "splits",
  Stats = "stats",
}

export enum Text {
  AdvancedStats = "Advanced Stats",
  Bio = "Bio",
  GameLog = "Game Log",
  News = "News",
  Overview = "Overview",
  PlayerCard = "Player Card",
  Splits = "Splits",
  Stats = "Stats",
}

export interface Position {
  id:           string;
  name:         Name;
  displayName:  Name;
  abbreviation: PositionAbbreviation;
  leaf:         boolean;
}

export enum PositionAbbreviation {
  C = "C",
  F = "F",
  G = "G",
}

export enum Name {
  Center = "Center",
  Forward = "Forward",
  Guard = "Guard",
}

export interface StatusClass {
  id:           string;
  name:         NameEnum;
  type:         Type;
  abbreviation: NameEnum;
}

export enum NameEnum {
  Active = "Active",
}

export enum Type {
  Active = "active",
}

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
  id:              string;
  abbreviation:    string;
  location:        string;
  name:            string;
  displayName:     string;
  clubhouse:       string;
  color:           string;
  logo:            string;
  recordSummary:   string;
  seasonSummary:   string;
  standingSummary: string;
}
