// Source: ri-cdm-vi-lab-v3.xsd

import {
    alternatiefVervoerMaatregelTijdvak,
    geheleTekst,
    landelijkPublicatie,
    treinMaatregelTijdvak,
    verstoringEigenschappen,
    verstoringSituatieTijdvak
} from './common-vi';

/**
 * Landelijk bericht voor een ernstige verstoring of een geplande wijziging. De combinatie van
 * dossiernummer en publicatievolgnummer is uniek.
 */
export type verstoringLandelijkBericht = landelijkPublicatie &
    verstoringEigenschappen & {
        /**
         * Een tijdslijn van de verstoring bestaande uit niet overlappende tijdvakken. Een ernstige
         * verstoring bevat slechts een enkel tijdvak.
         */
        tijdvakken: verstoringSituatieTijdvak[];
        treinMaatregelen?: treinMaatregelTijdvak[];
        alternatiefVervoerMaatregelen?: alternatiefVervoerMaatregelTijdvak[];
        geheleTekst: geheleTekst;
    };
