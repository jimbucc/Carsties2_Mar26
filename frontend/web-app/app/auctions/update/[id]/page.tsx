import { getDetailedViewData } from "@/app/actions/auctionActions"
import Heading from "@/app/components/Heading";
import AuctionForm from "../../AuctionForm";

const Update = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getDetailedViewData(id);

  return (
    <div className="mx-auto max-w-[75%]">
      <Heading title="Update your auction" subtitle="Please update the details of your car (only these auction properties can be updated)"/>
      <AuctionForm auction={data}/>
    </div>
  ) 
}
export default Update
