import {
    AankomstOfVertrekTijd,
    ExacteVertraging,
    Foutnummer,
    GedempteVertraging,
    HalteplaatsPlannedActueel,
    indicatie,
    InfoStatus,
    LijnNummer,
    LogischeRitNummer,
    MaterieelDeelAanduiding,
    MaterieelDeelID,
    MaterieelDeelLengte,
    MaterieelDeelSoort,
    MaterieelDeelToegankelijk,
    MaterieelDeelVertrekPositie,
    MaterieelDeelVolgordeVertrek,
    MaterieelNummer,
    MeertaligeUitingen,
    NietInstappen,
    ReisInformatieProductID,
    Reisplanner,
    Reserveren,
    RIPAdministratie,
    SpeciaalKaartje,
    Spoor,
    Station,
    StationnementType,
    StationPlannedActueel,
    StationReisAssistentie,
    StationToegankelijk,
    TaalCodes,
    Toeslag,
    TreinDatum,
    treinnummer,
    TreinRangeertVolledigAf,
    TreinSoort,
    Vervoerder,
    Wijziging
} from './common-v5';

/**
 * Het element ActueleRitTijden bevat de geplande en actuele gegevens van één
 * gehele rit op één bepaalde geldigheidsdatum.
 */
export type ActueleRitTijden = {
    ReisInformatieProductID: ReisInformatieProductID;
    RitInfo: TreinRit;
    '@_TimeStamp': RitInfoAanmaaktijd;
};

export type HerkenbareBestemming = {
    Station: Station;
    PresentatieHerkenbareBestemming: MeertaligeUitingen;
};

/** Foutbericht van een pull request actuele rittijden. */
export type GeefActueleRitTijdenFaultMessage = {
    Foutnummer: Foutnummer;
    Omschrijving: string;
    GeefActueleRitTijdenRequestMessage: GeefActueleRitTijdenRequestMessage;
    /** Geeft de datum en tijd weer wanneer het antwoord is samengesteld. */
    '@_TimeStamp': string;
};

/** De vraag voor het pull request actuele rittijden. */
export type GeefActueleRitTijdenRequestMessage = {
    /** Startend treinnummer van de actuele rit. */
    TreinNummer: treinnummer;
    /**
     * Als de TreinDatum niet is ingevuld wordt het RitInfo bericht met de
     * huidige datum (lokaal) geretourneerd.
     */
    TreinDatum?: string;
    /**
     * Als er het TaalCodes element ontbreekt dan wordt de Nederlandse redactie
     * gebruikt.
     */
    TaalCodes?: TaalCodes;
    /** Geeft aan wie de aanvrager is (voor statistieken). */
    Aanvrager: string;
    /** Geeft de datum en tijd weer wanneer deze vraag is gesteld. */
    '@_TimeStamp': string;
};

/** Response van het pull request van actuele rittijden. */
export type GeefActueleRitTijdenResponseMessage = {
    /**
     * Status van het antwoord. 10=succesvolle afhandeling, 20=geen actuele
     * reisinformatie beschikbaar. 30=geen reisinformatie beschikbaar.
     */
    BerichtStatus: number;
    GeefActueleRitTijdenRequestMessage: GeefActueleRitTijdenRequestMessage;
    ActueleRitTijden?: ActueleRitTijden;
    /** Geeft de datum en tijd weer wanneer het antwoord is samengesteld. */
    '@_TimeStamp': string;
};

/** Dit element geeft het gewijzigde materieel aan. */
export type GewijzigdMaterieel = {
    MaterieelDeelID: MaterieelDeelID;
    MaterieelNummer?: MaterieelNummer;
};

/** Het element InstapTip bevat instapinformatie. */
export type InstapTip = {
    InstapTipTreinSoort: InstapTipTreinSoort;
    InstapTipUitstapStation: Station;
    /**
     * Station liggend op de route tussen het huidige station en de
     * InstapTipEindBestemming.
     */
    InstapTipTreinEindBestemming: Station;
    /**
     * Eerstvolgende geplande vertrektijd, na actuele vertrektijd van de huidige
     * rit, van een rit die volgens zijn actuele aankomsttijd eerder dan de
     * huidige rit op de InstapTipBestemming zal aankomen.
     */
    InstapTipVertrekTijd: string;
    /** Het actuele vertrekspoor van de alternatieve trein. */
    InstapTipVertrekSpoor: Spoor[];
    PresentatieInstapTip?: MeertaligeUitingen;
};

/** Een deel van een logische rit en bestaat uit een (deel van) logistieke rit. */
export type LogischeRitDeel = {
    LogischeRitDeelNummer: treinnummer;
    LogischeRitDeelStation: RitStations[];
    Wijziging?: Wijziging[];
};

/**
 * Een logische rit begint bij het begin van een logistieke rit. Een logische
 * rit is de langste rit die met één gepland materieeldeel kan worden
 * uitgevoerd. Een logische rit kan bestaan uit meerdere (delen van) logistieke
 * ritten als er sprake is van een of meerdere doorgaande verbindingen.
 */
export type LogischeRit = {
    LogischeRitNummer: LogischeRitNummer;
    LogischeRitDeel: LogischeRitDeel[];
    Wijziging?: Wijziging[];
};

/**
 * Beschrijving van een fysiek stuk materieel dat deelneemt aan de beschreven
 * rit.
 */
export type MaterieelDeelRITInfo = {
    MaterieelDeelID: MaterieelDeelID;
    MaterieelDeelSoort: MaterieelDeelSoort;
    MaterieelDeelAanduiding: MaterieelDeelAanduiding;
    MaterieelDeelLengte: MaterieelDeelLengte;
    MaterieelDeelVertrekPositie?: MaterieelDeelVertrekPositie;
    MaterieelDeelVolgordeVertrek?: MaterieelDeelVolgordeVertrek;
    MaterieelNummer?: MaterieelNummer;
    MaterieelDeelToegankelijk?: MaterieelDeelToegankelijk;
    PresentatieMaterieelDeelToegankelijk?: MeertaligeUitingen;
    MaterieelDeelEindBestemming: StationPlannedActueel[];
    PresentatieMaterieelDeelEindBestemming?: MeertaligeUitingen;
    AchterBlijvenMaterieelDeel: AchterBlijvenMaterieelDeel;
    /**
     * Het volgend TreinNummer waar het genoemde materieeldeel onder verder
     * rijdt. Wordt alleen vermeld op het RitStation waar sprake is van een
     * doorgaandeverbinding voor de trein.
     */
    MaterieelDeelVolgendeLogischeRitDeel?: MaterieelDeelVolgendeLogischeRitDeel;
};

/**
 * Het volgend TreinNummer van een Trein op een bepaald RitStation voor een
 * trein op een bepaalde verkeers-/patroondag. Deze kan bepaald worden op basis
 * van de materieelrelatie.
 */
export type MaterieelDeelVolgendeLogischeRitDeel = {
    LogischeRitDeelNummer: treinnummer;
    TreinDatum: TreinDatum;
};

/**
 * Dit element geeft aan welke materieel wijzigingen er op dit station
 * plaatsvinden
 */
export type MaterieelWijziging = {
    MaterieelWijzigingType: MaterieelWijzigingType;
    GewijzigdMaterieel: GewijzigdMaterieel;
};

/**
 * Het element RITInfo bevat de geplande en actuele gegevens van één gehele rit
 * op één bepaalde geldigheidsdatum.
 */
export type ReisInformatieProductRitInfo = {
    RIPAdministratie: RIPAdministratie;
    RitInfo: TreinRit;
    '@_Versie'?: RitInfoVersie;
    '@_TimeStamp': RitInfoAanmaaktijd;
    '@_ApplicatieVersie'?: RitInfoApplicatieVersie;
};

/**
 * De verzameling van stations waar één of meerdere logische ritten langs gaan
 * volgens de planning inclusief eventuele extra ritstations.
 */
export type RitStations = {
    Station: Station;
    StationToegankelijk?: StationToegankelijk;
    PresentatieStationToegankelijk?: MeertaligeUitingen;
    StationReisAssistentie?: StationReisAssistentie;
    PresentatieStationReisAssistentie?: MeertaligeUitingen;
    TreinEindBestemming?: StationPlannedActueel[];
    PresentatieTreinEindBestemming?: MeertaligeUitingen;
    /**
     * Indicatie of de trein wel (=”J”) of niet (=”N”) op het desbetreffende
     * ritstation stopt. Het element komt niet voor of het komt zowel gepland
     * als actueel voor. Het attribuut InfoStatus bevat hiertoe de waarde
     * 'Actueel' en 'Gepland'
     */
    Stopt?: Stopt[];
    /** Het element InstapTip bevat instapinformatie. */
    InstapTip?: InstapTip[];
    /**
     * Het element HerkenbareBestemming is een station dat op de route van een
     * treinrit voor reizigers beter aanduidt waar de trein heenrijdt dan de
     * feitelijke eindbestemming. Met daarbij de meertalige presentatieteksten.
     */
    HerkenbareBestemming?: HerkenbareBestemming;
    AankomstTijd?: AankomstOfVertrekTijd[];
    ExacteAankomstVertraging?: ExacteVertraging;
    PresentatieAankomstVertraging?: MeertaligeUitingen;
    GedempteAankomstVertraging?: GedempteVertraging;
    TreinAankomstSpoor?: Spoor[];
    PresentatieTreinAankomstSpoor?: MeertaligeUitingen;
    UitstapHalteplaats?: HalteplaatsPlannedActueel[];
    VertrekTijd?: AankomstOfVertrekTijd[];
    ExacteVertrekVertraging?: ExacteVertraging;
    PresentatieVertrekVertraging?: MeertaligeUitingen;
    GedempteVertrekVertraging?: GedempteVertraging;
    TreinVertrekSpoor?: Spoor[];
    PresentatieTreinVertrekSpoor?: MeertaligeUitingen;
    InstapHalteplaats?: HalteplaatsPlannedActueel[];
    StationnementType?: StationnementType;
    MaterieelDeel?: MaterieelDeelRITInfo[];
    NietInstappen?: NietInstappen;
    PresentatieNietInstappen?: MeertaligeUitingen;
    TreinRangeertVolledigAf?: TreinRangeertVolledigAf;
    MaterieelWijziging?: MaterieelWijziging[];
    Wijziging?: Wijziging[];
};

/**
 * Indicatie of de trein wel (=”J”) of niet (=”N”) op het desbetreffende
 * ritstation stopt. Het element komt zowel gepland als actueel voor. Het
 * attribuut InfoStatus bevat hiertoe de waarde 'Actueel' en 'Gepland'
 */
export type Stopt = { value: indicatie } & InfoStatus;

/**
 * Het element TreinRit bevat informatie over de trein en alle logische ritten
 * die met het materieel van deze trein afgelegd worden.
 */
export type TreinRit = {
    TreinNummer: treinnummer;
    TreinDatum: TreinDatum;
    TreinNaam?: string;
    TreinSoort?: TreinSoort;
    LijnNummer?: LijnNummer;
    Vervoerder?: Vervoerder;
    Reserveren: Reserveren;
    PresentatieReserveren?: MeertaligeUitingen;
    Toeslag: Toeslag;
    PresentatieToeslag?: MeertaligeUitingen;
    SpeciaalKaartje: SpeciaalKaartje;
    PresentatieSpeciaalKaartje?: MeertaligeUitingen;
    Reisplanner: Reisplanner;
    LogischeRit: LogischeRit[];
};

/**
 * Geeft de commerciële benaming van de alternatieve trein aan. De
 * InstapTipTreinSoort is gecodeerd door middel van het Code attribuut,
 * voorbeeld van een Code is SPC. Het Code attribuut heeft maxLength=”3”. De
 * maxLength van InstapTipTreinSoort kan niet door de XSD worden afgedwongen,
 * omdat een beperking op een element dat tevens een attribuut heeft niet
 * toegestaan is bij de constructie van een XSD. De stamtabel TreinSoort bevat
 * de toegestane waarden.
 */
export type InstapTipTreinSoort = { value: string; '@_Code': string };

/**
 * Indicatie of het materieeldeel van de trein wel (=”J”) of niet (=”N”)
 * achterblijft.
 */
export type AchterBlijvenMaterieelDeel = indicatie;

/**
 * Dit element geeft aan wat voor soort materieelwijziging er plaatsvind.
 * (Combineer, splits, bijplaatsen, aftrappen)
 */
export type MaterieelWijzigingType =
    | 'Combineren'
    | 'Splitsen'
    | 'Bijplaatsen'
    | 'Aftrappen';

/** Bevat de actuele tijd ten tijde van het opstellen van de RitInfo */
export type RitInfoAanmaaktijd = string;

/** Versienummer van RitInfo zoals door InfoPlus aangegeven. */
export type RitInfoVersie = string;

/** Applicatie versienummer van RitInfo zoals door InfoPlus aangegeven. */
export type RitInfoApplicatieVersie = string;
