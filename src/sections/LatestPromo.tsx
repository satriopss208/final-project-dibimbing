'use client';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import usePromo from "@/hooks/usePromo";
import { useEffect, useState } from "react";
import imageDefault from "@/public/assets/fallbackImage.webp";
import ImageFallback from "@/components/imageFallback";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LatestPromo() {
  const { data } = usePromo();
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && data[currentIndex]) {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false), 100);
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
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="flex flex-col items-start justify-between">
            <div className="flex justify-start w-full">
            <h1 className="text-3xl font-bold text-start">Special sales for better experience</h1>
            </div>
            <p className="text-md font-medium text-accent-foreground">
              Here are the latest special offers for you
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`bg-accent-foreground font-semibold text-background hover:bg-[#1D5B3B] rounded-full h-[48px] ${(currentIndex === 0) ? "opacity-50 cursor-not-allowed" : ""
                }`}
              aria-label="Previous"
            >
              <ArrowLeft/>
            </Button>
            <Button
              onClick={handleNext}
              disabled={data && currentIndex === data.length - 1 }
              className={`bg-accent-foreground font-semibold text-background hover:bg-[#1D5B3B] rounded-full h-[48px] ${(data && currentIndex === data.length - 1 ) ? "opacity-50 cursor-not-allowed" : ""}`}
              aria-label="Next"
            >
              <ArrowRight/>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border rounded-xl px-20">
          {isLoading ? (

            <div className="flex flex-col justify-between w-full h-[450px] rounded-xl p-5">
              <div className="w-full h-[300px] overflow-hidden rounded-lg">
                <Skeleton className="w-full h-full rounded-lg" />
              </div>
              <Skeleton className="w-[200px] h-[32px] rounded-md" />
              <Skeleton className="w-[600px] h-[24px] rounded-md" />
            </div>
          ) : data && data.length > 0 ? (

            <Link href={`/promo/${data[currentIndex].id}`}>
              <div className="flex flex-col items-center justify-between w-full h-[450px] rounded-xl p-5 gap-5">
                <div className="w-full h-[300px] overflow-hidden rounded-lg">
                  <ImageFallback
                    src={data[currentIndex].imageUrl || imageDefault}
                    alt="Promo Photo"
                    fallbackSrc={imageDefault}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1
                  className="bg-background text-foreground hover:bg-background text-xl font-semibold w-full"
                >
                  {data[currentIndex].title}
                </h1>
                <p className="text-foreground text-md w-[600px]">
                {data[currentIndex].description.length > 75 ? `${data[currentIndex].description.substring(0, 75)} ...` : data[currentIndex].description}
                </p>
              </div>
            </Link>
          ) : (
            // No Promo Data Available
            <div className="text-center">
              <p className="text-xl font-semibold text-accent-foreground">
                No promotions available at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </section >
  );
}