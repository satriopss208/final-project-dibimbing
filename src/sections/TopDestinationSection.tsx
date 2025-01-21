import { Button } from "@/components/ui/button";

export default function TopDestinationSection() {
    return (
        <section>
            <div className="flex 
                          flex-col
                          items-center
                          justify-between
                          container 
                          max-w-6xl
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
                        <p className="text-md font-normal text-accent-foreground">Making the Most of Your Travel Experience</p>
                    </div>
                    <Button variant="outline"
                            className="border-accent-foreground font-semibold text-accent-foreground">
                                View All Destination
                    </Button>
                </div>
            </div>
        </section>
    )
}
