// Source: ndov-ri-cdm-common-v4.0.xsd

/**
 * Het gedeelte van een perron dat aan de rails ligt, waar een trein stopt en
 * reizigers kunnen in- en uitstappen. Het spoor datatype bevat een spoornummer
 * en een optioneel spoorfase element.
 */
export type Spoor = {
    SpoorNummer: SpoorNummer;
    SpoorFase?: SpoorFase;
};

/**
 * Gedeelte van de spoorweg, bestemd (en ingericht) om treinen te doen stoppen,
 * beginnen, eindigen, inhalen of kruisen en voorzien van ten minste één wissel
 * en tevens bestemd (en ingericht) om reizigers te laten in- of uitstappen
 * en/of goederen aan te nemen en /of af te leveren. Het station datatype bevat
 * elementen met informatie over een station.
 */
export type Station = {
    StationCode: stationCode;
    Type: Type;
    KorteNaam: KorteNaam;
    MiddelNaam: MiddelNaam;
    LangeNaam: LangeNaam;
    UICCode?: UICCode;
};

/** Spoor waarop een MaterieelDeel vertrekt. */
export type SpoorPlannedActueel = InfoStatus & Spoor;

/**
 * Het element AankomstTijd geeft een tijdstip weer, waarop een trein van een
 * station aankomst. Het attribuut InfoStatus geeft aan of het de geplande of de
 * actuele aankomsttijd is.
 */
export type AankomstOfVertrekTijd = InfoStatus & {
    value: string;
};

/**
 * Geeft een beschrijving van het station. Middels het InfoStatus attribuut
 * wordt de actualiteitsstatus weergegeven (bijv. "Actueel").
 */
export type StationPlannedActueel = InfoStatus & Station;

export type MeertaligeUitingen = {
    Uitingen: Uiting[];
};

/**
 * Het element ReisTip bevat reistipinformatie. Geldt bij afwijkend stopgedrag
 * ten opzichte van de de treinformule. Voorbeeld: "De stoptrein richting
 * Amsterdam stopt niet in Bussum-Zuid".
 */
export type ReisTip = {
    ReisTipStation?: Station[];
    /** Station waar een trein wel of niet stopt. */
    ReisTipCode: ReisTipCode;
    PresentatieReisTip?: MeertaligeUitingen;
};

/**
 * De gegevens benodigd voor de identificatie van het bericht met een
 * reisinformatieproduct
 */
export type RIPAdministratie = {
    ReisInformatieProductID: ReisInformatieProductID;
    AbonnementId: AbonnementId;
    ReisInformatieTijdstip: ReisInformatieTijdstip;
};

export type TaalCodes = {
    TaalCode: TaalCodeEnum[];
};

/**
 * Geeft de commerciële benaming van de soort trein aan. De maxLength van
 * InstapTipTreinSoort kan niet door de XSD worden afgedwongen, omdat een
 * beperking op een element dat tevens een attribuut heeft niet toegestaan is
 * bij de constructie van een XSD. De stamtabel TreinSoort bevat de toegestane
 * waarden.
 */
export type TreinSoort = {
    value: string;
    '@_Code': string;
};

export type Uitingen = {
    Uiting: Uiting[];
    '@_Taal'?: TaalCodeEnum;
};

export type Uiting = {
    value: string;
    '@_Prioriteit'?: string;
    '@_ReferentieType'?: string;
    '@_ReferentieWaarde'?: string;
};

/**
 * Dit element bevat informatie over een wijziging van een trein ten opzichte
 * van de dienstregeling richting eindbestemming van de rit.
 */
export type Wijziging = {
    WijzigingType: WijzigingType;
    WijzigingOorzaakKort?: WijzigingOorzaakKort;
    WijzigingOorzaakLang?: WijzigingOorzaakLang;
    /**
     * Het station (of stations) dat relevant is voor de wijziging. Niet bij
     * ieder WijzigingType hoort een WijzigingStation. Als bijvoorbeeld de rit
     * ingekort wordt dan is het WijzigingStation de actuele
     * TreinEindBestemming.
     */
    WijzigingStation?: Station[];
    TVVOmschrijving?: TVVOmschrijving;
    PresentatieWijziging?: MeertaligeUitingen;
};

/** Een ja/nee indicator. Kan de waarde "J" (ja) en "N" (nee) aannemen. */
export type indicatie = 'J' | 'N';

/** Geeft de actualiteitsstatus aan van informatie. Voorbeeld: "Actueel" */
export type InfoStatus = {
    '@_InfoStatus': 'Gepland' | 'Actueel';
};

/**
 * Unieke afkorting van een stationsnaam gebruikt om een station te
 * identificeren. stationCode is een CRIS-specifiek datatype. stationCode is
 * afgeleid van het string standaard datatype met restrictie: maxLength = "6".
 */
export type stationCode = string;

/** Een unieke identificatie voor een trein op een bepaalde verkeers-/patroondag. */
export type treinnummer = number;

/** Versienummer. */
export type versie = string;

/** Bevat de actuele tijd ten tijde van het opstellen van de bericht */
export type Aanmaaktijd = string;

/**
 * Uniek ID van een abonnement. Wordt toegekend door CRIS bij het afsluiten van
 * een abonnement.
 */
export type AbonnementId = number;

/**
 * Indicatie of het achterste gedeelte van de trein wel (=”J”) of niet (=”N”)
 * achterblijft.
 */
export type AchterBlijvenAchtersteTreinDeel = indicatie;

/**
 * De afstand in meters vanaf het einde van het perron (ook wel met "B_Einde"
 * aangeduid) tot aan de kop van de vertrekkende trein. Dit element krijgt
 * default de waarde 0, omdat er op dit moment nog geen bedrijfsregels zijn om
 * het element te maken.
 */
export type AfstandPerronEindKopVertrekTrein = number;

/**
 * Een aankomstvertraging is het verschil tussen het geplande en actuele
 * aankomsttijd van een trein op een station. Deze vertraging wordt vastgelegd
 * op de seconde nauwkeurig.
 */
export type ExacteVertraging = string;

/**
 * @constant 40: RPA niet beschikbaar
 * @constant 41: RPA geeft een SOAP Fault
 * @constant 50: Redactie niet mogelijk
 * @constant 51: Onbekende fout in mediation opgetreden
 * @constant 100: Ongeldige input
 */
export type Foutnummer = number;

/**
 * Een aankomstvertraging is het verschil tussen het geplande en actuele
 * aankomsttijd van een trein op een station. Deze vertraging is de exacte
 * vertraging afgerond op 5 minuten nauwkeurig.
 */
export type GedempteVertraging = string;

/**
 * @constant nl: Dutch; Flemish
 * @constant en: English
 */
export type ISO6391LanguageCodeContent = 'nl' | 'en';

/**
 * Het element KorteNaam bevat een verkorte naam van een station. Maximale
 * lengte is 10 karakters.
 */
export type KorteNaam = string;

/**
 * Het element LangeNaam bevat de volledige naam van een station. Maximale
 * lengte is 25 karakters.
 */
export type LangeNaam = string;

/** Het nummer van bijvoorbeel lightrail, metro of bus. */
export type LijnNummer = string;

/** Dit element zal gaan vervallen tijdens de XSD opschoning. */
export type MaterieelAanduiding = string;

/** Identificatie van een MaterieelDeel. */
export type MaterieelDeelID = string;

/**
 * Geeft de positie van een MaterieelDeel aan binnen een trein bij aankomst op
 * een bepaald ritstation.
 */
export type MaterieelDeelVolgorde = number;

/** Lengte van een MaterieelDeel in centimeters. */
export type MaterieelLengte = number;

/** Materieelnummer van een fysiek stuk materieel. */
export type MaterieelNummer = string;

/** Soort materieel wat ingezet is in een bepaalde treinbeweging. */
export type MaterieelSoort = string;

/**
 * Het element MiddelNaam bevat een gedeeltelijk ingekorte naam van een station.
 * Maximale lengte is 16 karakters.
 */
export type MiddelNaam = string;

/**
 * Als er bij een treinstop op een station alleen uitgestapt mag worden, dan
 * bevat dit element de waarde 'J'. Als er alleen ingestapt of in- en uitgestapt
 * mag worden, dan bevat dit element de waarde 'N'. Het element in het bericht
 * is niet aanwezig wanneer de trein niet stopt.
 */
export type NietInstappen = indicatie;

/**
 * Indicatie of de activiteit wel ("J") of niet ("N") betrekking heeft op een
 * rangeerbeweging
 */
export type RangeerBeweging = indicatie;

/** Uniek ID van een bericht met een ReisInformatieProduct. */
export type ReisInformatieProductID = number;

/**
 * Het voor het ReisInformatieProduct van belang zijnde tijdstip. Met
 * ReisInformatieTijdstip wordt bedoeld de samenstelling van kalenderdatum en de
 * geplande vertrektijd bij een vertrekstaat, de geplande aankomsttijd bij een
 * aankomststaat of de geplande vertrektijd van het eerste ritstation bij een
 * RitInfo. Dit veld bevat net als de andere tijden een UTC-tijd inclusief zone
 * indicator.
 */
export type ReisInformatieTijdstip = string;

export type ReisTipCode =
    | 'STNS'
    | 'STO'
    | 'STVA'
    | 'STNVA'
    | 'STT'
    | 'STNT'
    | 'STAL'
    | 'STN';

/**
 * Datum waarop de activiteit van de rit op het betreffende station wordt
 * uitgevoerd.
 */
export type RitDatum = string;

/**
 * Unieke identifier voor de Rit uit de voor de reiziger bekende dienstregeling.
 * Het type is een positiveInteger.
 */
export type RitId = number;

/**
 * Indicatie of er wel (=”J”) of niet (=”N”) voor deze rit een plaats moet
 * worden besproken.
 */
export type Reserveren = indicatie;

/** Indicatie of er wel (=”J”) of niet (=”N”) een speciaal kaartje nodig is. */
export type SpeciaalKaartje = indicatie;

/**
 * Het gedeelte van een spoor dat nader aangeduid wordt met een kleine letter:
 * a, b, c of d.
 */
export type SpoorFase = 'a' | 'b' | 'c' | 'd';

/**
 * Het SpoorNummer element bevat een numerieke waarde (1 t/m 99) ter
 * identificatie van een spoor.
 */
export type SpoorNummer = number;

/**
 * Dit element geeft het stationnementtype aan. U = alleen uitstappen, I =
 * alleen instappen, D = doorkomst, " " = In- en uitstappen..
 */
export type StationnementType = string;

/**
 * Het element StationCode bevat een unieke afkorting en identificatie van een
 * station.
 */
export type StationCode = stationCode;

export type TaalCodeEnum = ISO6391LanguageCodeContent;

/**
 * Indicatie of er wel (=”J”) of niet (=”N”) voor deze rit een extra bedrag moet
 * worden betaald.
 */
export type Toeslag = indicatie;

/**
 * Een treinformule geeft aan welk gedrag een trein heeft. Bijvoorbeeld:
 * stoptrein = 1, sneltrein=2, intercity=3, internationale trein=4, speciale
 * trein=5
 */
export type TreinFormule = number;

/**
 * Statusinformatie m.b.t. de trein. 0 = Onbekend, 1 = Trein nadert, 2 =
 * Binnenkomst trein, 3 = Deuren open, 4 = Deuren dicht, 5 = Trein vertrokken.
 */
export type TreinStatus = '0' | '1' | '2' | '3' | '4' | '5';

/** Modaliteit van het treinvervangendvervoer. */
export type TVVOmschrijving = string;

/** "Roepnaam" van een internationale trein. Maximale lengte is 30 karakters. */
export type TreinNaam = string;

/**
 * Het element Type geeft een type-aanduiding van een station. 0 =
 * stoptreinstation, 1 = knooppunt stoptreinstation, 2 = Sneltreinstation, 3 =
 * knooppunt sneltreinstation, 4 = Intercitystation, 5 = knooppunt
 * intercitystation, 6 = Megastation, 7 = facultatief station.
 */
export type Type = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

/**
 * Het element UICCode bevat een codering voor een station volgens UIC. Maximale
 * lengte is 7 karakters.
 */
export type UICCode = string;

/**
 * Organisatie die toestemming heeft om personen, goederen en/of materieel te
 * vervoeren binnen het werkingsgebied van het RRV en daadwerkelijk vervoert.
 */
export type Vervoerder = string;

/** Xsd accepteert versie nummer in de range 0.00 - 9.99. */
export type Versie = string;

/** Korte beschrijving van de oorzaak die geleid heeft tot de wijziging. */
export type WijzigingOorzaakKort = string;

/** Lange beschrijving van de oorzaak die geleid heeft tot de wijziging. */
export type WijzigingOorzaakLang = string;

/** Geeft het type wijziging aan via een code lopend van 00 tot en met 99. */
export type WijzigingType = number;
