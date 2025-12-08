import { SITE_DESCRIPTION, SITE_INFO } from "@/utils/site";

export default function Home() {
  return (
    <div>
      <h2 className="font-bold">{SITE_INFO}</h2>
      <p className="">{SITE_DESCRIPTION}</p>
    </div>
  );
}
