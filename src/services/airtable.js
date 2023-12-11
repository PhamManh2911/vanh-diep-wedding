import { airtableAccessToken, airtableBaseId, airtableTableId } from "@/configs/airtable";
import Airtable, { base } from "airtable";

Airtable.configure({ apiKey: airtableAccessToken });

export const table = base(airtableBaseId).table(airtableTableId);
