import { client } from "./sanity";

export async function getNav() {
  return await client.fetch(`*[_type=="navigation"][0].items`);
}

export async function getFooter() {
  return await client.fetch(`*[_type=="footer"][0]`);
}
