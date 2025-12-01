// Source: ri-cdm-common-vi-v3.xsd

/** Een alternatief vervoermiddel omdat de trein vanwege de beperking niet rijdt. */
export type alternatiefVervoerMaatregel = {
    /**
     * Uniek ID binnen bericht. Blijft gelijk bij aanpassingen in opvolgende
     * berichten.
     */
    id: string;
    /** Een omschrijving van het type vervoermiddel. */
    omschrijving: omschrijving;
    /** De trajecten waarvoor het vervoermiddel een alternatief biedt. */
    trajecten: traject[];
    /**
     * Heen: het vervoermiddel rijdt in de richting van de stops. Beide: het
     * vervoermiddel rijdt in beide richtingen.
     */
    richting: richting;
    /**
     * Mogelijk toegevoegde of verwijderde stations die onderdeel zijn van de
     * tijdelijke aanpassing. Bijvoorbeeld: omgeleid via Hilversum en Hilversum
     * Sportpark.
     */
    stops: alternatiefVervoerStop[];
    presentatie: presentatie;
};

export type interval = {
    beginTijdstip: string;
    eindTijdstip: string;
};

export type landelijkPublicatie = {
    /** Het unieke ID van het bericht. */
    publicatieId: string;
    /** Het tijdstip vanaf wanneer het bericht geldig is. */
    publicatieTijdstip: string;
    /** Het tijdstip tot wanneer het bericht geldig is. */
    publicatieGeldigheidTijdstip: string;
    publicatieType: publicatieType;
    /** Het unieke volgnummer binnen een reeks van berichten. */
    publicatieVolgnummer: number;
    dossierNummer: number;
    dossierNaam: string;
    /** Het tijdstip van de laatste wijziging in het dossier. */
    registratieTijdstip: string;
};

/**
 * Geeft de situatie weer in een tijdsperiode van begintijdstip tot
 * eindtijdstip. Het eindtijdstip is exclusief.
 */
export type situatieTijdvak = {
    interval: interval;
    /**
     * Uniek ID binnen bericht. Blijft gelijk bij aanpassingen in opvolgende
     * berichten.
     */
    id: string;
    geheleTekst?: geheleTekst;
};

export type stationPublicatie = landelijkPublicatie & {
    publicatieStation: station;
};

export type treinseriePublicatie = landelijkPublicatie & {
    landelijkPublicatie: landelijkPublicatie;
    /** De treinserie waarvoor het bericht bestemd is. */
    publicatieTreinserie: treinserie;
};

/** Stopstation waarnaar een trein uit de treinserie onderweg is. */
export type treinserieStation = {
    station: station;
    geheleTekst?: geheleTekst;
    omroepTekst?: omroep;
};

/**
 * Een tijdelijke aanpassing van de dienstregeling voor een of meerdere
 * treinseries.
 */
export type treinMaatregel = {
    /**
     * Uniek ID binnen bericht. Blijft gelijk bij aanpassingen in opvolgende
     * berichten.
     */
    id: string;
    /** Een omschrijving van de tijdelijke aanpassing. */
    omschrijving: omschrijving;
    /** Het station vanaf waar de tijdelijke aanpassing geldt. */
    vanStation: station;
    /** Het station tot waar de tijdelijke aanpassing geldt. */
    totStation: station;
    /**
     * Heen: de tijdelijke aanpassing loopt van de van-stations naar de
     * tot-stations. Beide: de tijdelijke aanpassing loopt in beide richtingen.
     */
    richting: richting;
    treinseries?: treinserie[];
    /**
     * Mogelijk toegevoegde of verwijderde stations die onderdeel zijn van de
     * tijdelijke aanpassing. Bijvoorbeeld: omgeleid via Hilversum en Hilversum
     * Sportpark.
     */
    maatregelStations?: station[];
    presentatie: presentatie;
};

export type verstoringEigenschappen = {
    verstoringType: verstoringType;
    ernstigeVerstoringEigenschappenVerzameling?: ernstigeVerstoringEigenschappen;
    geplandeWijzigingEigenschappenVerzameling?: geplandeWijzigingEigenschappen;
};

export type verstoringMomentopname = {
    verstoringSituatie: verstoringSituatie;
    treinMaatregelen?: treinMaatregel[];
    alternatiefVervoerMaatregelen?: alternatiefVervoerMaatregel[];
    geheleTekst: geheleTekst;
    omroepTekst: omroep;
};

export type verstoringSituatie = {
    /**
     * Laagste impact is 1 (vertraging), hoogste impact is 5 (strategisch punt
     * getroffen).
     */
    impact: omschrijving;
    oorzaak: omschrijving;
    baanvakBeperkingen: baanvakBeperking[];
    alternatiefVervoerMaatregelenSamenvatting?: omschrijving;
    baanvakBeperkingenExtraReistijdSamenvatting?: extraReistijd;
    aanvullendAdviesPresentatie?: presentatie;
    situatiePresentatie: presentatie;
    locatiePresentatie: presentatie;
};

export type verstoringStationImpact = {
    aantalReizenPerDag?: number;
    omreisAdviezenPerBestemming?: omreisAdviesBestemming[];
    omreisAdviezenPerRoute?: omreisAdviesRoute[];
};

export type verstoringTreinserieStation = treinserieStation &
    verstoringStationImpact;

export type vrijeTekstEigenschappen = {
    categorie: categorie;
};

export type vrijeTekstMomentopname = {
    vrijeTekstSituatie: vrijeTekstSituatie;
    /** Indicator of het bericht bestemd is voor publicatie op informatie borden. */
    beeld?: boolean;
    /** Indicator of het bericht bestemd is voor publicatie via de omroep. */
    omroep?: boolean;
    ritIDs?: string[];
    geheleTekst: geheleTekst;
    omroepTekst?: omroep;
};

export type vrijeTekstSituatie = {
    /**
     * Laagste impact is 1 (klein incident), hoogste impact is 5 (landelijk
     * incident).
     */
    impact?: omschrijving;
};

export type advies = {
    extraReistijdVan: string;
    extraReistijdTot: string;
    viaStations?: station[];
};

export type alternatiefVervoerMaatregelen = alternatiefVervoerMaatregel[];

export type alternatiefVervoerMaatregelTijdvak = {
    interval: interval;
    alternatiefVervoerMaatregel: alternatiefVervoerMaatregel;
};

export type alternatiefVervoerStopPlaats = {
    omschrijving: omschrijving;
    geoLocatie?: geoLocatie;
};

export type alternatiefVervoerStop = {
    station: station;
    /** De plaats waar het vervoermiddel stopt nabij het station. */
    plaats?: alternatiefVervoerStopPlaats;
    presentatie: presentatie;
};

/** Informatie over het baanvak waarop een treindienstbeperking aanwezig is. */
export type baanvakBeperking = {
    vanStation: station;
    /**
     * Indien het tot-station ontbreekt dan zijn de baanvakken tussen het
     * van-station en de aanpalende stations uit de trajecten beperkt.
     */
    totStation?: station;
    /**
     * Heen: de beperking loopt van het van-station naar het tot-station. Beide:
     * de beperking loopt in beide richtingen.
     */
    richting: richting;
    /** De gevolgen van de beperking op de treindienst. */
    gevolgenTreindienst: omschrijving;
    /** De verwachte extra reistijd als gevolg van de beperking. */
    extraReistijd?: extraReistijd;
    /** De relevante trajecten over de beperking. */
    trajecten: traject[];
    /**
     * Informatie over de stations waartussen de beperking aanwezig is. Indien
     * richting "BEIDE" dan zijn er twee beperkingen. Indien het tot-station
     * ontbreekt dan is iedere combinatie van een aanpalend station uit de
     * trajecten met het van-station een beperking.
     */
    beperkingen: beperking[];
    /**
     * Samenvatting van de alternatiefvervoermaatregelen die langs een van de
     * trajecten lopen.
     */
    alternatiefVervoerMaatregelenSamenvatting?: omschrijving;
    presentatie: presentatie;
};

export type beperkingStation = {
    stationCode: string;
};

/**
 * Aaneengesloten stations waartussen een beperking loopt in een enkele
 * richting.
 */
export type beperking = {
    /**
     * De volgorde van de stations komt overeen met de richting van de
     * beperking.
     */
    stations: beperkingStation[];
};

export type categorie = {
    code?: string;
    beschrijving?: string;
    internationaal?: boolean;
};

/** Enkel van toepassing wanneer het verstoringtype "ERNSTIGE_VERSTORING" is. */
export type ernstigeVerstoringEigenschappen = {
    verstoringFase: verstoringFase;
    spoorwebId?: string;
    beginTijdstip: string;
    beginTijdstipPresentatie: presentatie;
    prognose: prognose;
};

export type extraReistijd = {
    omschrijving: omschrijving;
    /** Alleen gevuld indien de reistijd bekend is. */
    vanReistijd?: string;
    /** Alleen gevuld indien er sprake is van een bereik tussen twee reistijden. */
    totReistijd?: string;
    presentatie: presentatie;
};

export type geheleTekstInTaal = {
    taalCode: taalCode;
    kort: tekst;
    middel: tekst;
    lang: tekst;
};

/** Geredigeerde tekst bestaande uit presentatie-elementen. */
export type geheleTekst = {
    tekstenPerTaal: geheleTekstInTaal[];
};

export type geoLocatie = {
    lengtegraad: number;
    breedtegraad: number;
};

/** Enkel van toepassing wanneer het verstoringtype "GEPLANDE_WIJZIGING" is. */
export type geplandeWijzigingEigenschappen = {
    periode: periode;
};

/** Omreisadvies voor een grote reizigersstroom. */
export type landelijkOmreisAdviezen = {
    omschrijving: omschrijving;
    /** De stations vanaf waar de reizigersstroom loopt. */
    vanStations: station[];
    /** De stations tot waar de reizigersstroom loopt. */
    totStations: station[];
    /** De geadviseerde stations om over te reizen. */
    adviesStations: station[];
    /**
     * Heen: de reizigersstroom loopt van de van-stations naar de tot-stations.
     * Beide: de reizigersstroom loopt in beide richtingen.
     */
    richting: richting;
    /** De verwachte extra reistijd als gevolg van de beperking. */
    extraReistijd: extraReistijd;
    presentatie: presentatie;
};

export type omreisAdviesBestemming = {
    omschrijving: omschrijving;
    /** Station waar de reizigers naartoe reizen. */
    bestemming: station;
    aantalReizenPerDag: number;
    /** Verschillende reisopties. */
    adviesRoutes?: advies[];
    presentatie: presentatie;
};

export type omreisAdviesRoute = {
    omschrijving: omschrijving;
    adviesRoute: advies;
    aantalReizenPerDag: number;
    /** Stations waar de reizigers naartoe reizen met dezelfde adviesroute. */
    bestemmingen?: station[];
    presentatie: presentatie;
};

/**
 * Geredigeerde tekst specifiek bedoeld voor omroepsystemen. Inclusief
 * uitspraakregels (bijvoorbeeld: pauze-elementen).
 */
export type omroep = {
    tekstenPerTaal: presentatieTekstInTaal[];
};

export type omschrijving = {
    code: string;
    presentatie: presentatie;
};

export type periode = interval & {
    presentatie: presentatie;
};

export type presentatieTekstInTaal = {
    taalCode: taalCode;
    kort: string;
    middel: string;
    lang: string;
};

export type presentatie = {
    tekstenPerTaal: presentatieTekstInTaal[];
};

/** De verwachting waarop de treindienst hersteld is. */
export type prognose = {
    omschrijving: omschrijving;
    /** Aanwezig indien het prognosetijdstip bekend is. */
    tijdstip?: string;
    presentatie: presentatie;
};

export type station = {
    stationCode: string;
    uicCode: string;
    evaCode?: string;
    type: stationType;
    geoLocatie?: geoLocatie;
    presentatie: presentatie;
};

export type tekst = {
    kop: string;
    body: string;
};

/** Voor reizigers goed herkenbare routedelen. */
export type traject = {
    code: string;
    type: trajectType;
    ligging: trajectLigging;
    /** De routestations waarover het traject loopt. */
    stations?: station[];
    /** Voor reizigers goed herkenbare plaatsaanduidingen. */
    uiting: trajectUiting;
    aantalReizenPerDag: number;
    vervoerder: omschrijving;
    presentatie: presentatie;
};

export type trajectUiting = {
    vanStation: omschrijving;
    viaStations?: omschrijving[];
    totStation: omschrijving;
    achtervoegsel?: presentatie;
};

/** Het laagste en hoogste treinnummer behorend bij de groepering. */
export type treinserieBereik = {
    vanNummer: number;
    totNummer: number;
};

export type treinserieRouteStation = {
    station: station;
    /** False: doorkomststation. True: stopstation. */
    stop: boolean;
};

/** De routestations waarover een trein rijdt. */
export type treinserieRoute = {
    stations?: treinserieRouteStation[];
};

export type treinserieStations = treinserieStation;

/**
 * Een groepering van treinen, individueel aangeduid met een treinnummer, die op
 * basis van een gezamenlijk patroon worden gepland. De combinatie van
 * serienummer en richting is uniek.
 */
export type treinserie = {
    /** Serienummer. */
    nummer: number;
    richting: treinserieRichting;
    bereik: treinserieBereik;
    vervoerder: omschrijving;
    /** Commerciële aanduiding, bv Intercity of ICE. */
    treinSoort: omschrijving;
    /** Gedragsaanduiding. */
    treinFormule: omschrijving;
    /** Verzameling van routes die individuele treinen kunnen afleggen. */
    routes?: treinserieRoute[];
};

export type treinMaatregelen = treinMaatregel;

export type treinMaatregelTijdvak = {
    interval: interval;
    treinMaatregel: treinMaatregel;
};

export type verstoringTreinserieStations = verstoringTreinserieStation[];

export type verstoringSituatieTijdvak = {
    interval: interval;
    verstoringSituatie: verstoringSituatie;
    periodePresentatie: presentatie;
    landelijkOmreisAdviezen?: landelijkOmreisAdviezen[];
};

export type vrijeTekstSituatieTijdvak = {
    interval: interval;
    vrijeTekstSituatie: vrijeTekstSituatie;
};

/**
 * Start publicatie is het eerste bericht uit een reeks, einde publicatie is het
 * laatste bericht uit een reeks, update publicatie is een tussenliggend bericht
 * uit een reeks.
 */
export type publicatieType =
    | 'START_PUBLICATIE'
    | 'UPDATE_PUBLICATIE'
    | 'EINDE_PUBLICATIE';

export type richting = 'HEEN' | 'BEIDE';

export type stationType =
    | 'STOPTREIN'
    | 'STOPTREIN_KNOOPPUNT'
    | 'SNELTREIN'
    | 'SNELTREIN_KNOOPPUNT'
    | 'INTERCITY'
    | 'INTERCITY_KNOOPPUNT'
    | 'MEGA'
    | 'FACULTATIEF';

/** Ondersteunde taalcodes volgens ISO 639-1 standaard. */
export type taalCode = 'nl' | 'en' | 'de' | 'fr';

/**
 * NL: binnenlands vervoer, BUURLAND: regionaal grensoverschrijdend vervoer,
 * HSL: hogesnelheid binnenlands vervoer, INTERNATIONAAL: hogesnelheid
 * grensoverschrijdend vervoer.
 */
export type trajectType = 'NL' | 'BUURLAND' | 'HSL' | 'INTERNATIONAAL';

export type trajectLigging = 'VOLLEDIG_NL' | 'DEELS_NL' | 'NIET_NL';

/** De pariteit van de treinnummers die binnen de groepering vallen. */
export type treinserieRichting = 'EVEN' | 'ONEVEN';

/**
 * 1A: situatie onduidelijk, 1B: situatie duidelijk, 2: treinmaatregelen
 * toegevoegd, 3: alternatiefvervoermaatregel toegevoegd, 4: treindienst
 * opgestart, 5: treindienst hersteld.
 */
export type verstoringFase = '1A' | '1B' | '2' | '3' | '4' | '5';

export type verstoringType = 'ERNSTIGE_VERSTORING' | 'GEPLANDE_WIJZIGING';
