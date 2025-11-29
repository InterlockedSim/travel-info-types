// Source: ri-cdm-vtb-stb-v3.xsd

import { stationPublicatie, vrijeTekstEigenschappen, vrijeTekstMomentopname } from './common-vi';

/**
 * Stationsbericht voor een vrije tekst. De combinatie van dossiernummer, publicatievolgnummer en
 * station is uniek.
 */
export type vrijeTekstStationBericht = stationPublicatie &
    vrijeTekstEigenschappen &
    vrijeTekstMomentopname;
