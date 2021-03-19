import { IVoyageCardData } from "./IVoyageCardData";
import { IVoyageInfoData } from "./IVoyageInfoData";

export interface IVoyageData {
    info: IVoyageInfoData,
    rotation: IVoyageCardData,
    customs: IVoyageCardData,
    terminal: IVoyageCardData,
    callRequest: IVoyageCardData,
    manifest: IVoyageCardData,
    discharge: IVoyageCardData,
    loading: IVoyageCardData
}