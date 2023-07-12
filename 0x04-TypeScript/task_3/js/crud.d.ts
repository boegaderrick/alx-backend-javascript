/* ----------------------------------------------------------------------- */

import { RowID, RowElement } from './interface';

declare function insertRow(row): number;

declare function deleteRow(rowId): void;

declare function updateRow(rowId, row): RowID;
