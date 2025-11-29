// Source: ri-cdm-vtb-trb-v3.xsd

import {
    treinseriePublicatie,
    treinserieStations,
    vrijeTekstEigenschappen,
    vrijeTekstMomentopname
} from './common-vi';

/**
 * Treinseriebericht voor een vrije tekst. De combinatie van dossiernummer, publicatievolgnummer en
 * treinserie is uniek.
 */
export type vrijeTekstTreinserieBericht = treinseriePublicatie &
    vrijeTekstEigenschappen &
    vrijeTekstMomentopname & {
        stations?: treinserieStations[];
    };
