export interface ResultsR {
  leagues:  League[];
  season:   ResultsRSeason;
  day:      Day;
  events:   Event[];
  provider: Provider;
}

export interface Day {
  date: Date;
}

export interface Event {
  id:           string;
  uid:          string;
  date:         string;
  name:         string;
  shortName:    string;
  season:       EventSeason;
  competitions: Competition[];
  links:        OddLink[];
  status:       Status;
}

export interface Competition {
  id:                    string;
  uid:                   string;
  date:                  string;
  attendance:            number;
  type:                  CompetitionType;
  timeValid:             boolean;
  neutralSite:           boolean;
  conferenceCompetition: boolean;
  playByPlayAvailable:   boolean;
  recent:                boolean;
  venue:                 CompetitionVenue;
  competitors:           Competitor[];
  notes:                 Note[];
  status:                Status;
  broadcasts:            Broadcast[];
  format:                Format;
  tickets:               Ticket[];
  startDate:             string;
  broadcast:             string;
  geoBroadcasts:         GeoBroadcast[];
  odds:                  Odd[];
  highlights:            any[];
}

export interface Broadcast {
  market: string;
  names:  string[];
}

export interface Competitor {
  id:         string;
  uid:        string;
  type:       TypeElement;
  order:      number;
  homeAway:   string;
  team:       CompetitorTeam;
  score:      string;
  statistics: Statistic[];
  records:    Record[];
  leaders:    CompetitorLeader[];
}

export interface CompetitorLeader {
  name:             string;
  displayName:      string;
  shortDisplayName: string;
  abbreviation:     string;
  leaders:          LeaderLeader[];
}

export interface LeaderLeader {
  displayValue: string;
  value:        number;
  athlete:      Athlete;
  team:         TeamClass;
}

export interface Athlete {
  id:          string;
  fullName:    string;
  displayName: string;
  shortName:   string;
  links:       LinkElement[];
  headshot:    string;
  jersey:      string;
  position:    Position;
  team:        TeamClass;
  active:      boolean;
}

export interface LinkElement {
  rel:  Rel[];
  href: string;
}

export type Rel = "athlete" | "dark" | "desktop" | "light" | "playercard" | string;

export interface Position {
  abbreviation: Abbreviation;
}

export type Abbreviation = "C" | "F" | "G" | string;

export interface TeamClass {
  id: string;
}

export interface Record {
  name:          Name;
  abbreviation?: string;
  type:          RecordType;
  summary:       string;
}

export type Name = "Home" | "overall" | "Road" | string;

export type RecordType = "home" | "road" | "total" | string;

export interface Statistic {
  name:              string;
  abbreviation:      string;
  displayValue:      string;
  rankDisplayValue?: string;
}

export interface CompetitorTeam {
  id:               string;
  uid:              string;
  location:         string;
  name:             string;
  abbreviation:     string;
  displayName:      string;
  shortDisplayName: string;
  color:            string;
  alternateColor:   string;
  isActive:         boolean;
  venue:            TeamClass;
  links:            TeamLink[];
  logo:             string;
}

export interface TeamLink {
  rel:        TypeElement[];
  href:       string;
  text:       string;
  isExternal: boolean;
  isPremium:  boolean;
}

export type TypeElement = "clubhouse" | "desktop" | "roster" | "schedule" | "stats" | "team" | string;

export interface Format {
  regulation: Regulation;
}

export interface Regulation {
  periods: number;
}

export interface GeoBroadcast {
  type:   GeoBroadcastType;
  market: Market;
  media:  Media;
  lang:   string;
  region: string;
}

export interface Market {
  id:   string;
  type: string;
}

export interface Media {
  shortName: string;
}

export interface GeoBroadcastType {
  id:        string;
  shortName: string;
}

export interface Note {
  type:     string;
  headline: string;
}

export interface Odd {
  provider:     Provider;
  details:      string;
  overUnder:    number;
  spread:       number;
  awayTeamOdds: TeamOdds;
  homeTeamOdds: TeamOdds;
  moneyline:    Moneyline;
  pointSpread:  PointSpread;
  total:        Total;
  link:         OddLink;
  header:       Header;
  footer:       Footer;
}

export interface TeamOdds {
  favorite:       boolean;
  underdog:       boolean;
  team:           AwayTeamOddsTeam;
  favoriteAtOpen: boolean;
}

export interface AwayTeamOddsTeam {
  id:           string;
  uid:          string;
  abbreviation: string;
  name:         string;
  displayName:  string;
  logo:         string;
}

export interface Footer {
  disclaimer: string;
}

export interface Header {
  logo: HeaderLogo;
  text: string;
}

export interface HeaderLogo {
  dark:                string;
  light:               string;
  exclusivesLogoDark:  string;
  exclusivesLogoLight: string;
}

export interface OddLink {
  language:   Language;
  rel:        string[];
  href:       string;
  text:       string;
  shortText:  string;
  isExternal: boolean;
  isPremium:  boolean;
  tracking?:  Tracking;
}

export type Language = "en-US" | string;

export interface Tracking {
  campaign: Campaign;
  tags:     Tags;
}

export type Campaign = "betting-integrations" | string;

export interface Tags {
  league:      Slug;
  sport:       Sport;
  gameId:      number;
  betSide:     string;
  betType:     BetType;
  betDetails?: string;
}

export type BetType = "straight" | string;

export type Slug = "nba" | string;

export type Sport = "basketball" | string;

export interface Moneyline {
  displayName:      string;
  shortDisplayName: string;
  home:             MoneylineAway;
  away:             MoneylineAway;
}

export interface MoneylineAway {
  close: PurpleClose;
  open:  PurpleOpen;
}

export interface PurpleClose {
  odds: string;
  link: OddLink;
}

export interface PurpleOpen {
  odds: string;
}

export interface PointSpread {
  displayName:      string;
  shortDisplayName: string;
  home:             OverClass;
  away:             OverClass;
}

export interface OverClass {
  close: OverClose;
  open:  OverOpen;
}

export interface OverClose {
  line: string;
  odds: string;
  link: OddLink;
}

export interface OverOpen {
  line: string;
  odds: string;
}

export interface Provider {
  id:           string;
  name:         string;
  priority:     number;
  logos:        LinkElement[];
  displayName?: string;
}

export interface Total {
  displayName:      string;
  shortDisplayName: string;
  over:             OverClass;
  under:            OverClass;
}

export interface Status {
  clock:        number;
  displayClock: string;
  period:       number;
  type:         StatusType;
}

export interface StatusType {
  id:          string;
  name:        string;
  state:       string;
  completed:   boolean;
  description: string;
  detail:      string;
  shortDetail: string;
}

export interface Ticket {
  summary:         string;
  numberAvailable: number;
  links:           TicketLink[];
}

export interface TicketLink {
  href: string;
}

export interface CompetitionType {
  id:           string;
  abbreviation: string;
}

export interface CompetitionVenue {
  id:       string;
  fullName: string;
  address:  Address;
  indoor:   boolean;
}

export interface Address {
  city:  string;
  state: string;
}

export interface EventSeason {
  year: number;
  type: number;
  slug: string;
}

export interface League {
  id:                  string;
  uid:                 string;
  name:                string;
  abbreviation:        string;
  slug:                Slug;
  season:              LeagueSeason;
  logos:               LeagueLogo[];
  calendarType:        string;
  calendarIsWhitelist: boolean;
  calendarStartDate:   string;
  calendarEndDate:     string;
  calendar:            string[];
}

export interface LeagueLogo {
  href:        string;
  width:       number;
  height:      number;
  alt:         string;
  rel:         string[];
  lastUpdated: string;
}

export interface LeagueSeason {
  year:        number;
  startDate:   string;
  endDate:     string;
  displayName: string;
  type:        SeasonType;
}

export interface SeasonType {
  id:           string;
  type:         number;
  name:         string;
  abbreviation: string;
}

export interface ResultsRSeason {
  type: number;
  year: number;
}
