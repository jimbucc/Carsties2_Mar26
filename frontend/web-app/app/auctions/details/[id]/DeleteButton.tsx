'use client'

import { deleteAuction } from "@/app/actions/auctionActions"
import { Button, Spinner } from "flowbite-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

type Props = {
    id: string
}

const DeleteButton = ({id}: Props) => {
    const [loading, setloading] = useState(false)
    const router = useRouter();

    const handleDelete = () => {
        setloading(true)
        deleteAuction(id)
            .then(res => {
                console.log(res.error)
                if(res.error) throw res.error
                router.push('/');                
            })
            .catch(error => {
                toast.error(error.status + ' ' + error.message);
            })
            .finally(() => setloading(false))
            
    }

  return (
    <Button outline color='red' onClick={handleDelete}>
        {loading && <Spinner size="sm" className="mr-3"/>}
        Delete Auction
      
    </Button>
  )
}
export default DeleteButton