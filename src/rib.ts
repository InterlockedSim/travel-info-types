import { ReisInformatieProductDVS } from './dvs';
import { verstoringStationBericht } from './vi-stb';
import { verstoringTreinserieBericht } from './vi-trb';
import { vrijeTekstLandelijkBericht } from './vtb-lab';
import { vrijeTekstStationBericht } from './vtb-stb';
import { vrijeTekstTreinserieBericht } from './vtb-trb';
import { verstoringLandelijkBericht } from './vi-lab';

export type ReisInformatieBoodschap<T = MessageMap> = {
    PutReisInformatieBoodschapIn: T extends MessageMap
        ? { [K in keyof T]?: T[K] }
        : { [K in KeyOfValue<T>]: T };
};

export type PutReisInformatieBoodschapIn<
    T extends Record<string, any> = MessageMap
> = {
    [K in keyof T]?: T[K];
};

type KeyOfValue<V> = {
    [K in keyof MessageMap]: MessageMap[K] extends V ? K : never;
}[keyof MessageMap];

type MessageMap = {
    ReisInformatieProductDVS: ReisInformatieProductDVS;
    VerstoringLandelijkBericht: verstoringLandelijkBericht;
    VerstoringStationBericht: verstoringStationBericht;
    VerstoringTreinserieBericht: verstoringTreinserieBericht;
    VrijeTekstLandelijkBericht: vrijeTekstLandelijkBericht;
    VrijeTekstStationBericht: vrijeTekstStationBericht;
    VrijeTekstTreinserieBericht: vrijeTekstTreinserieBericht;
};
