import SimpleNotionPageGenerator from "@/components/notion";

export default function PolicyPage() {
  const id = process.env.POLICY_ID;
  if (!id) {
    throw new Error("No policy ID provided");
  }

  return <SimpleNotionPageGenerator title="개인정보 처리방침" id={id} />;
}
