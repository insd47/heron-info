import { NotionAPI } from "notion-client";
import NotionView from "./notion";
import { isValidApp } from "@/utilities/isValidApp";

export default async function Home() {
  const collection_id = process.env.COLLECTION_ID;
  if (!collection_id) {
    throw new Error("No collection ID provided");
  }

  if (!isValidApp()) {
    return null;
  }

  const notion = new NotionAPI();
  const infoPage = await notion.getPage(collection_id);

  return <NotionView recordMap={infoPage} />;
}
