import { ReisInformatieProductDVS } from './dvs';
import { ReisInformatieProductRitInfo } from './rit';
import { verstoringLandelijkBericht } from './vi-lab';
import { verstoringStationBericht } from './vi-stb';
import { verstoringTreinserieBericht } from './vi-trb';
import { vrijeTekstLandelijkBericht } from './vtb-lab';
import { vrijeTekstStationBericht } from './vtb-stb';
import { vrijeTekstTreinserieBericht } from './vtb-trb';

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
    ReisInformatieProductRitInfo: ReisInformatieProductRitInfo;
    VerstoringLandelijkBericht: verstoringLandelijkBericht;
    VerstoringStationBericht: verstoringStationBericht;
    VerstoringTreinserieBericht: verstoringTreinserieBericht;
    VrijeTekstLandelijkBericht: vrijeTekstLandelijkBericht;
    VrijeTekstStationBericht: vrijeTekstStationBericht;
    VrijeTekstTreinserieBericht: vrijeTekstTreinserieBericht;
};
