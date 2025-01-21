import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Destination } from "@/hooks/destinationInterface";
import usetopDestination from "@/hooks/useTopDestination"
import Image from "next/image";
import { useEffect, useState } from "react";
import imageDefault from "@/public/assets/fallbackImage.webp"
import ImageFallback from "@/components/imageFallback"
import Link from "next/link";

export default function TopDestinationSection() {

    const { data, handleRedirect } = usetopDestination();
    const [sortedData, setSortedData] = useState<Destination[]>([]);
    const [isLoading, setIsloading] = useState(true);
    const [imageError, setImageError] = useState(false);
    const topLimit = 6;
    useEffect(() => {

        setTimeout(() => {
            setIsloading(false);
            if (data) {
                const sorted = [...data]
                    .sort((a, b) => b.total_reviews - a.total_reviews)
                    .slice(0, topLimit);

                setSortedData(sorted);
            }
        }, 2000);
    }, [data]);



    return (
        <section className="mb-20">
            <div className="flex 
                          flex-col
                          items-center
                          justify-between
                          container 
                          max-w-6xl
                          gap-10
                          mb-10
                          ">
                <div className="flex
                                items-center
                                justify-between
                                gap-5
                                w-full
                                ">
                    <div className="flex 
                                    flex-col
                                    items-start
                                    justify-between
                                    ">
                        <h1 className="text-3xl font-bold">Plan your best trip ever</h1>
                        <p className="text-md font-medium text-accent-foreground">Making the Most of Your Travel Experience</p>
                    </div>
                    <Link href='/destination'>
                        <Button variant="outline"
                            className="border-accent-foreground 
                                   font-semibold 
                                   text-accent-foreground
                                   hover:text-[#1D5B3B]
                                   hover:border-[#1D5B3B]
                                   ">
                            View All Destination
                        </Button>
                    </Link>
                </div>
                {isLoading ? (
                    <div className="grid grid-cols-3 gap-5 w-full">
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                            <Skeleton className="w-[350px] h-[220px] rounded-xl" />
                            <Skeleton className="w-[200px] h-[32px]" />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-3 w-full">
                        {sortedData.map((item: Destination) => {
                            return (
                                <div className="flex flex-col items-center justify-between w-[350px] h-[300px] rounded-xl p-5 ">
                                    <ImageFallback
                                        src={item.imageUrls[0]}
                                        alt="Destination photo"
                                        fallbackSrc={imageDefault}
                                        width={350}
                                        height={120}
                                        className="object-cover object-center rounded-lg"
                                    />

                                    <Button key={item.id}
                                        className="bg-background text-foreground hover:bg-background text-xl"
                                        onClick={() => handleRedirect(`/destination/${item.id}`)}>
                                        {item.province}
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
