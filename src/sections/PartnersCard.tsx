import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image, { StaticImageData } from "next/image";

import company_logo_1 from "@/public/assets/company_logo_1.webp"
import company_logo_2 from "@/public/assets/company_logo_2.webp"
import company_logo_3 from "@/public/assets/company_logo_3.webp"
import company_logo_4 from "@/public/assets/company_logo_4.webp"
import company_logo_5 from "@/public/assets/company_logo_5.webp"
import company_logo_6 from "@/public/assets/company_logo_6.webp"

type Review = {
    name: string;
    img: StaticImageData;
}

const reviews:Review[] = [
  {
    name: "TechNova Labs",
    img: company_logo_1,
  },
  {
    name: "Nexora Innovations",
    img: company_logo_2,
  },
  {
    name: "CloudSphere Sys",
    img: company_logo_3,
  },
  {
    name: "CyberFort Solutions",
    img: company_logo_4,
  },
  {
    name: "DataPulse Analytics",
    img: company_logo_5,
  },
  {
    name: "ByteWave Systems",
    img: company_logo_6,
  },
];

const PartnersCard = ({
  img,
  name,
}: {
  img: StaticImageData;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex justify-center items-center gap-4">
        <Image className="" width={64} height={64} alt="logo" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-md font-semibold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueePartnersCard() {
  return (
    <div className="relative flex h-[500px] w-full flex-col justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex justify-center h-20">
        <h1 className="font-bold text-3xl">OUR PARTNERS</h1>
      </div>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <PartnersCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
