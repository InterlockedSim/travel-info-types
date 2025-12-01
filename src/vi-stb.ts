// Source: ri-cdm-vi-stb-v3.xsd

import {
    stationPublicatie,
    verstoringEigenschappen,
    verstoringMomentopname,
    verstoringStationImpact
} from './common-vi';

/**
 * Stationsbericht voor een ernstige verstoring of geplande wijziging. De
 * combinatie van dossiernummer, publicatievolgnummer en station is uniek.
 */
export type verstoringStationBericht = stationPublicatie &
    verstoringEigenschappen &
    verstoringMomentopname &
    verstoringStationImpact;
