// Source: ndov-ri-cdm-dvs.xsd

import {
    AankomstOfVertrekTijd,
    AchterBlijvenAchtersteTreinDeel,
    AfstandPerronEindKopVertrekTrein,
    ExacteVertraging,
    Foutnummer,
    GedempteVertraging,
    indicatie,
    InfoStatus,
    LijnNummer,
    MaterieelAanduiding,
    MaterieelDeelVolgorde,
    MaterieelLengte,
    MaterieelNummer,
    MaterieelSoort,
    MeertaligeUitingen,
    NietInstappen,
    RangeerBeweging,
    ReisInformatieProductID,
    ReisTip,
    Reserveren,
    RIPAdministratie,
    RitDatum,
    RitId,
    SpeciaalKaartje,
    Spoor,
    SpoorPlannedActueel,
    Station,
    StationPlannedActueel,
    Toeslag,
    TreinFormule,
    TreinNaam,
    treinnummer,
    TreinSoort,
    TreinStatus,
    versie,
    Vervoerder,
    Wijziging
} from './common';

/**
 * Het actuele overzicht van alle vertrekkende ritten die binnen een bepaalde tijdshorizon
 * vertrekken van een bepaald station.
 */
export type ActueleVertrekTijden = {
    /** Het station waarvan de actuele vertrektijden worden gegeven. */
    VertrekStation: Station;
    VertrekInformatie: VertrekInformatie[];
    '@_Versie': versie;
};

/**
 * Het element DynamischeVertrekStaat bevat de geplande en actuele gegevens van één vertrekkende
 * trein op één station op één bepaalde geldigheidsdatum.
 */
export type DynamischeVertrekStaat = {
    RitId: RitId;
    RitDatum: RitDatum;
    RitStation: Station;
    VerstoringOnderweg?: VerstoringOnderweg;
    Trein: Trein;
    PresentatieOpmerkingen?: MeertaligeUitingen;
};

/**
 * Geeft een beschrijving van de eindbestemming van de treinvleugel. Middels het InfoStatus
 * attribuut wordt de actualiteitsstatus weergegeven (bijv. "Actueel").
 */
export type EindBestemmingPlannedActueel = Station & InfoStatus;

export type GeefActueleVertrekTijdenFaultMessage = {
    Foutnummer: Foutnummer;
    Omschrijving: string;
    GeefActueleVertrekTijdenRequestMessage: GeefActueleVertrekTijdenRequestMessage;
    /** Geeft de datum en tijd weer wanneer het antwoord is samengesteld. */
    '@_TimeStamp': string;
};

/*
 * De vraag voor actuele vertrektijden
 */
export type GeefActueleVertrekTijdenRequestMessage = {
    StationCode: string;
    /**
     * Geeft aan hoeveel resultaten er minimaal terugverwacht worden (deze waarde kan HorizonEinde
     * verruimen).
     */
    MinimumResultaten?: number;
    /**
     * Geeft aan hoeveel resultaten er maximaal teruggegeven mogen worden (deze waarde kan
     * HorizonEinde beperken).
     */
    MaximumResultaten?: number;
    /** Geeft het begin van het tijdsvenster aan waarvoor vertrekkende treinen worden teruggegeven. */
    HorizonStart?: string;
    /** Geeft het einde van het tijdsvenster aan waarvoor vertrekkende treinen worden teruggegeven. */
    HorizonEnd?: string;
    /** Als er het TaalCodes element ontbreekt dan wordt de Nederlandse redactie gebruikt. */
    TaalCodes?: string[];
    /** Geeft aan wie de aanvrager is (voor statistieken). */
    Aanvrager: string;
    /** Geeft de datum en tijd weer wanneer deze vraag is gesteld. */
    '@_TimeStamp': string;
};

/*
 * Dit element bevat een actueel overzicht van alle vertrekkende ritten die binnen een bepaalde tijdshorizon vertrekken van een bepaald station.
 */
export type GeefActueleVertrekTijdenResponseMessage = {
    /**
     * Status van het antwoord. 10=succesvolle afhandeling, 20=geen actuele reisinformatie
     * beschikbaar. 30=geen reisinformatie beschikbaar.
     */
    BerichtStatus: number;
    GeefActueleVertrekTijdenRequestMessage: GeefActueleVertrekTijdenRequestMessage;
    ActueleVertrekTijden?: ActueleVertrekTijden;
    /** Geeft de datum en tijd weer wanneer het antwoord is samengesteld. */
    '@_TimeStamp': string;
};

/**
 * Geeft de commerciële benaming van de alternatieve trein aan. De InstapTipTreinSoort is gecodeerd
 * door middel van het Code attribuut. Het Code attribuut heeft maxLength=”3”. De maxLength van
 * InstapTipTreinSoort kan niet door de XSD worden afgedwongen, omdat een beperking op een element
 * dat tevens een attribuut heeft niet toegestaan is bij de constructie van een XSD. De stamtabel
 * TreinSoort bevat de toegestane waarden.
 */
export type InstapTipTreinSoort = {
    Code: string[];
};

/** Het element InstapTip bevat instapinformatie. */
export type InstapTip = {
    InstapTipTreinSoort: InstapTipTreinSoort;
    /* Station liggend op de route tussen het huidige station en de InstapTipEindBestemming. */
    InstapTipUitstapStation: Station;
    /* Station dat volgens de actuele aankomsttijden door een andere rit met een latere actuele vertrektijd, eerder wordt bereikt. */
    InstapTipTreinEindBestemming: Station;
    /* Eerstvolgende geplande vertrektijd, na actuele vertrektijd van de huidige rit, van een rit die volgens zijn actuele aankomsttijd eerder dan de huidige rit op de InstapTipBestemming zal aankomen. */
    InstapTipVertrekTijd: string;
    InstapTipVertrekSpoor: Spoor;
    PresentatieInstapTip?: MeertaligeUitingen;
};

/** Fysieke stukken materieel */
export type MaterieelDeelDVS = {
    MaterieelSoort: MaterieelSoort;
    MaterieelAanduiding: MaterieelAanduiding;
    MaterieelLengte: MaterieelLengte;
    MaterieelDeelVertrekPositie?: MaterieelDeelVertrekPositie;
    MaterieelDeelVolgordeVertrek?: MaterieelDeelVolgorde;
    MaterieelNummer?: MaterieelNummer;
    MaterieelDeelEindBestemming: StationPlannedActueel[];
    PresentatieMaterieelDeelEindBestemming?: MeertaligeUitingen;
    SpoorVak?: SpoorVak[];
    Wijziging?: Wijziging[];
};

/** Het element OverstapTip bevat overstapinformatie. */
export type OverstapTip = {
    /* De bestemming die bereikt moet worden door in het OverstapTipOverstapStation over te stappen. */
    OverstapTipBestemming: Station;
    /* Station waar overgestapt moet worden als de reiziger naar de OverstapTipBestemming moet. */
    OverstapTipOverstapStation: Station;
    PresentatieOverstapTip?: MeertaligeUitingen[];
};

export type ReisInformatieProductDVS = {
    RIPAdministratie: RIPAdministratie;
    DynamischeVertrekStaat: DynamischeVertrekStaat;
    '@_Versie': DVSVersie;
    '@_Timestamp': DVSAanmaaktijd;
};

/**
 * Het element Trein bevat alle informatie op Treinniveau. Een trein is een (geplande/uitgevoerde)
 * vervoersbeweging over spoorse infrastructuur met spoors materieel, aangeduid met een
 * treinnummer.
 */
export type Trein = {
    TreinNummer: treinnummer;
    TreinNaam?: TreinNaam;
    TreinSoort?: TreinSoort;
    TreinFormule?: TreinFormule;
    TreinStatus?: TreinStatus;
    LijnNummer?: LijnNummer;
    Vervoerder?: Vervoerder;
    Reserveren: Reserveren;
    PresentatieReserveren?: MeertaligeUitingen;
    Toeslag: Toeslag;
    PresentatieToeslag?: MeertaligeUitingen;
    NietInstappen?: NietInstappen;
    PresentatieNietInstappen?: MeertaligeUitingen;
    AchterBlijvenAchtersteTreinDeel: AchterBlijvenAchtersteTreinDeel;
    RangeerBeweging: RangeerBeweging;
    SpeciaalKaartje: SpeciaalKaartje;
    PresentatieSpeciaalKaartje?: MeertaligeUitingen;
    InstapTip?: InstapTip[];
    OverstapTip?: OverstapTip[];
    ReisTip?: ReisTip[];
    TreinEindBestemming: StationPlannedActueel[];
    PresentatieTreinEindBestemming?: MeertaligeUitingen;
    VertrekTijd: AankomstOfVertrekTijd[];
    ExacteVertrekVertraging: ExacteVertraging;
    PresentatieVertrekVertraging?: MeertaligeUitingen;
    GedempteVertrekVertraging: GedempteVertraging;
    TreinVertrekSpoor?: SpoorPlannedActueel[];
    PresentatieTreinVertrekSpoor?: MeertaligeUitingen;
    VertrekRichting: VertrekRichting;
    AfstandPerronEindKopVertrekTrein: AfstandPerronEindKopVertrekTrein;
    VerkorteRoute?: VerkorteRoute[];
    PresentatieVerkorteRoute?: MeertaligeUitingen;
    TreinVleugel: TreinVleugel[];
    VertrekPositieKop?: VertrekPositieKop;
    /* Het treinnummer van de trein die tegelijkertijd met de trein uit deze DVS een spoor(fase) deelt. */
    TreinNummer2Treinen1Fase?: treinnummer;
    Wijziging?: Wijziging[];
};

/**
 * Een TreinVleugel is een functionele opdeling van de trein, waarbij een andere route wordt gereden
 * en een MaterieelDeel is hierbij het fysieke materieel, eventueel uniek gentificeerd door
 * MaterieelNummer. Een MaterieelDeel, dat een deel van de route meerijdt en halverwege de rit
 * achterblijft, behoort tot hetzelfde TreinVleugel als de MaterieelDelen, die de gehele route
 * rijden.
 */
export type TreinVleugel = {
    TreinVleugelVertrekSpoor?: SpoorPlannedActueel[];
    PresentatieTreinVleugelVertrekSpoor?: MeertaligeUitingen;
    TreinVleugelEindBestemming: EindBestemmingPlannedActueel[];
    PresentatieTreinVleugelEindBestemming?: MeertaligeUitingen;
    StopStations: StopStations[];
    Wijziging?: Wijziging[];
    ReisTip?: ReisTip[];
    MaterieelDeelDVS?: MaterieelDeelDVS[];
};

export type StopStations = InfoStatus & {
    Station: Station[];
};

/**
 * De regels van Actuele VertrekTijden bestaande uit een aantal administratieve velden plus een
 * aantal Trein -elementen.
 */
export type VertrekInformatie = {
    RitId: RitId;
    ReisInformatieProductID: ReisInformatieProductID;
    VerstoringOnderweg?: VerstoringOnderweg;
    Trein: Trein;
    PresentatieOpmerkingen?: MeertaligeUitingen;
};

/** Beschrijft de verstoring op de route. Alleen aanwezig indien er een verstoring is. */
export type VerstoringOnderweg = {
    /**
     * Uniek ID van het Dossier waar de andere gegevens betrekking op hebben. Bij meer verstoringen
     * is dit de eerstvolgende verstoring waar de trein last van zou hebben.
     */
    VerstoringDossierNr: number;
    /**
     * Geeft de soort verstoring aan, mogelijke waarden EV = Ernstige Verstoring, GV = Geplande
     * Verstoring en ET = Evenement.
     */
    VerstoringSoort: Verstoring;
    /**
     * J indien het RitStation op een verstoord traject ligt (en de route van de trein minstens 2
     * opeenvolgende stations gemeen heeft met het verstoorde baanvak) N indien de rest van de Route
     * van de trein over het Verstoorde baanvak loopt, maar het Ritstation ligt niet op het
     * verstoorde Baanvak. Afwezig als de rest van de route van de trein niet over een verstoord
     * baanvak loopt maar wel een WA uit een dossier aanwezig is.
     */
    RitStationInVerstoordBvk?: indicatie;
};

/** Een selectie van maximaal 4 nog resterende stations tot de logische eindbestemming. */
export type VerkorteRoute = InfoStatus & {
    Station: Station[];
};

/**
 * Geeft de positie van een MaterieelDeel aan binnen een trein bij vertrek op een bepaald
 * ritstation.
 */
export type MaterieelDeelVertrekPositie = number;

/**
 * Het SpoorVak element geeft met een letter in de reeks A t/m Z een vak aan op een spoor. Door
 * middel van het Fysiek attribuut wordt onderscheid gemaakt tussen "fysieke" en "virtuele"
 * spoorvakken. Als het Fysiek attribuut niet aanwezig is of de waarde "N" heeft is het spoorvak
 * "virtueel".
 */
export type SpoorVak = string;

/** Bevat de actuele tijd ten tijde van het opstellen van de DVS */
export type DVSAanmaaktijd = string;

/** Xsd accepteert versie nummer in de range 6.0 - 6.99. */
export type DVSVersie = string;

/**
 * De exacte plaats in cm van de kop van de trein ten opzichte van het begin van het Perron (kant A)
 * bij vertrek.
 */
export type VertrekPositieKop = number;

/** Richting waarin een trein vertrekt ten opzichte van het perron: A of B. */
export type VertrekRichting = 'A' | 'B';

/**
 * Geeft de soort verstoring aan, mogelijke waarden EV = Ernstige Verstoring, GV = Geplande
 * Verstoring en ET = Extra Trein.
 */
export type Verstoring = 'EV' | 'GV' | 'ET';
