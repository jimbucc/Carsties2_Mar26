import { Auction, PagedResult } from "@/types";
import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";

const getData = async (): Promise<PagedResult<Auction>> => {
    const res = await fetch("http://localhost:6001/search?pageSize=10")
    if(!res.ok) throw new Error('Failed to fetch data')

    return res.json();
}

const Listings = async () => {
    const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data && data.results.map(auction => (
            <AuctionCard key={auction.id} auction={auction}/>
        ))}

        
    </div>
  )
}
export default Listings