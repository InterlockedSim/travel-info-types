// Source: ri-cdm-vtb-lab-v3.xsd

import {
    landelijkPublicatie,
    vrijeTekstEigenschappen,
    vrijeTekstSituatieTijdvak
} from './common-vi';

/**
 * Landelijk bericht voor een vrije tekst. De combinatie van dossiernummer en publicatievolgnummer
 * is uniek.
 */
export type vrijeTekstLandelijkBericht = landelijkPublicatie &
    vrijeTekstEigenschappen & {
        /** Een tijdslijn van de vrijetekstuitingen bestaande uit niet overlappende tijdvakken. */
        tijdvakken: vrijeTekstSituatieTijdvak[];
        /** Indicator of het bericht bestemd is voor publicatie op Teletekst. */
        teletekst?: boolean;
    };
