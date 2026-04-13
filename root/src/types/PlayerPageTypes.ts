export interface PlayerPageTypes {
  $ref:           string;
  id:             string;
  uid:            string;
  guid:           string;
  type:           string;
  alternateIds:   AlternateIDS;
  firstName:      string;
  lastName:       string;
  fullName:       string;
  displayName:    string;
  shortName:      string;
  weight:         number;
  displayWeight:  string;
  height:         number;
  displayHeight:  string;
  age:            number;
  dateOfBirth:    string;
  links:          Link[];
  birthPlace:     BirthPlace;
  college:        College;
  slug:           string;
  headshot:       Headshot;
  jersey:         string;
  position:       Position;
  linked:         boolean;
  team:           College;
  statistics:     College;
  contracts:      College;
  experience:     Experience;
  collegeAthlete: College;
  active:         boolean;
  contract:       Contract;
  draft:          Draft;
  status:         Status;
  statisticslog:  College;
  seasons:        College;
}

export interface AlternateIDS {
  sdr: string;
}

export interface BirthPlace {
  city:    string;
  country: string;
}

export interface College {
  $ref: string;
}

export interface Contract {
  $ref:                   string;
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
  season:                 College;
  team:                   College;
  tradeKicker:            TradeKicker;
  tradeRestriction:       boolean;
  unsignedForeignPick:    boolean;
  active:                 boolean;
}

export interface Ion {
  active: boolean;
}

export interface TradeKicker {
  active:     boolean;
  percentage: number;
  value:      number;
  tradeValue: number;
}

export interface Draft {
  displayText: string;
  round:       number;
  year:        number;
  selection:   number;
  team:        College;
}

export interface Experience {
  years: number;
}

export interface Headshot {
  href: string;
  alt:  string;
}

export interface Link {
  language:   string;
  rel:        string[];
  href:       string;
  text:       string;
  shortText:  string;
  isExternal: boolean;
  isPremium:  boolean;
}

export interface Position {
  $ref:         string;
  id:           string;
  name:         string;
  displayName:  string;
  abbreviation: string;
  leaf:         boolean;
}

export interface Status {
  id:           string;
  name:         string;
  type:         string;
  abbreviation: string;
}
