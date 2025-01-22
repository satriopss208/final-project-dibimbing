'use client';

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useBanner from "@/hooks/useBanner";
import { useEffect, useState } from "react";
import imageDefault from "@/public/assets/fallbackImage.webp";
import ImageFallback from "@/components/imageFallback";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LatestBanner() {
  const { data } = useBanner();
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data[currentIndex]) {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false),0);
      return () => clearTimeout(timeout);
    }
  }, [data, currentIndex]);

  const handleNext = () => {
    if (data && currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="mb-20">
      <div className="flex flex-col items-center justify-between container max-w-6xl gap-10 mb-10">
        <div className="flex items-center justify-center gap-5 w-full">
          <h1 className="text-3xl font-bold">Tell Us Your Wonderful Travel Gallery</h1>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-xl px-20">
          {isLoading ? (
            <div className="flex flex-col items-center justify-between w-full h-full rounded-xl p-5">
                <Skeleton className="w-[888px] h-[360px] rounded-lg" />            
            </div>
          ) : data && data.length > 0 ? (
            <Link href={`/promo/${data[currentIndex].id}`}>
              <div className="flex flex-col items-center justify-between w-full h-[400px] p-5">
                <div className="w-full h-[400px] overflow-hidden rounded-lg drop-shadow-sm">
                  <ImageFallback
                    src={data[currentIndex].imageUrl || imageDefault}
                    alt="Banner Photo"
                    fallbackSrc={imageDefault}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </Link>
          ) : (
            // No Banner Data Available
            <div className="text-center">
              <p className="text-xl font-semibold text-accent-foreground">
                No banners available at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`bg-accent-foreground font-semibold text-background hover:bg-[#1D5B3B] rounded-full h-[48px] ${(currentIndex === 0) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            aria-label="Previous"
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={handleNext}
            disabled={data && currentIndex === data.length - 1}
            className={`bg-accent-foreground font-semibold text-background hover:bg-[#1D5B3B] rounded-full h-[48px] ${(data && currentIndex === data.length - 1) ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label="Next"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}