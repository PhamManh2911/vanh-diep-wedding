import { airtableAccessToken, airtableBaseId, airtableNhaGaiTable, airtableNhaTraiTable, airtableTableId } from "@/configs/airtable";
import Airtable, { base } from "airtable";

Airtable.configure({ apiKey: airtableAccessToken });

export const genTable = (nhaTrai) => {
  if (nhaTrai) return base(airtableBaseId).table(airtableNhaTraiTable);
  return base(airtableBaseId).table(airtableNhaGaiTable);
}

export const table = base(airtableBaseId).table(airtableTableId);
