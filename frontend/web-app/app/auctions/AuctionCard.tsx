import CountdownTimer from "./CountdownTimer"
import CarImage from "./CarImage"
import { Auction } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

type Props = {
    auction: Auction
}

const AuctionCard = ({auction}: Props) => {
  return (
    <a href="#">
      <div className="relative w-full bg-gray-200 aspect-16/10 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105">
        <CarImage imageUrl={auction.imageUrl}/>

        {/* Position countdown time on image */}
        <div className="absolute bottom-2 left-2">
            <CountdownTimer auctionEnd={auction.auctionEnd} />
        </div>
      </div>
      
      {/* Model and Year */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700 text-sm">
          {auction.make} {auction.model}
        </h3>
        
      <Button variant="default" className="bg-blue-700">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>

        <p className="font-semibold text-sm">{auction.year}</p>
      </div>
    </a>
  )
}
export default AuctionCard