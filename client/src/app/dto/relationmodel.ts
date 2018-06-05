import {RelationType} from './relationtype';

export class RelationModel {
  source: boolean;
  columnName: string;
  tableName: string;
  relationType: RelationType;
}
