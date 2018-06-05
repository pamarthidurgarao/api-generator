import { RelationModel } from './relationmodel';

export class ColumnModel {
     name: string;
     type: string;
     mandatory: boolean;
     primary: boolean;
     unique: boolean;
     autoGen: boolean;
     relation: RelationModel;
}
