import IEventMapper from "../interfaces/mapper";
import { IProviderMapper } from "../interfaces/mapper";
export declare class firebaseMapper implements IProviderMapper {
    eventMapper: IEventMapper;
    contextMapper?: any;
}
