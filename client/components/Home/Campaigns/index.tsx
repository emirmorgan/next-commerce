import { campaigns } from "@/lib/constants";

import CampaignCard from "./CampaignCard";

export default function Campaings() {
  return (
    <section id="campaigns">
      <article className="w-full px-5 my-3">
        <h1 className="text-gray-700 font-bold text-xl select-none mb-2">
          Campaigns
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 content-center gap-3">
          {campaigns.map((item) => (
            <CampaignCard
              key={crypto.randomUUID()}
              brand={item.brand}
              desc={item.desc}
              src={item.src}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
