export interface Region {
    name:           string;
    topLevelDomain: string[];
    alpha2Code:     string;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    region:         RegionEnum;
    subregion:      Subregion;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number | null;
    gini:           number | null;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    string;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
}

export interface Currency {
    code:   null | string;
    name:   null | string;
    symbol: null | string;
}

export interface Language {
    iso639_1:   null | string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export enum RegionEnum {
    Asia = "Asia",
}

export interface RegionalBloc {
    acronym:       Acronym;
    name:          Name;
    otherAcronyms: string[];
    otherNames:    OtherName[];
}

export enum Acronym {
    Al = "AL",
    Asean = "ASEAN",
    Eeu = "EEU",
    Saarc = "SAARC",
}

export enum Name {
    ArabLeague = "Arab League",
    AssociationOfSoutheastAsianNations = "Association of Southeast Asian Nations",
    EurasianEconomicUnion = "Eurasian Economic Union",
    SouthAsianAssociationForRegionalCooperation = "South Asian Association for Regional Cooperation",
}

export enum OtherName {
    JāmiAtAdDuwalAlArabīyah = "Jāmiʻat ad-Duwal al-ʻArabīyah",
    LeagueOfArabStates = "League of Arab States",
    جامعةالدولالعربية = "جامعة الدول العربية",
}

export enum Subregion {
    CentralAsia = "Central Asia",
    EasternAsia = "Eastern Asia",
    SouthEasternAsia = "South-Eastern Asia",
    SouthernAsia = "Southern Asia",
    WesternAsia = "Western Asia",
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: null | string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}
