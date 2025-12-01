// Source: ri-cdm-vi-trb-v3.xsd

import {
    treinseriePublicatie,
    verstoringEigenschappen,
    verstoringMomentopname,
    verstoringTreinserieStations
} from './common-vi';

/**
 * Treinseriebericht voor een ernstige verstoring of geplande wijziging. De
 * combinatie van dossiernummer, publicatievolgnummer en treinserie is uniek.
 */
export type verstoringTreinserieBericht = treinseriePublicatie &
    verstoringEigenschappen &
    verstoringMomentopname & {
        stations?: verstoringTreinserieStations[];
    };
