'use client'

import { signOut } from "next-auth/react"
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react"
import { User } from "next-auth"
import Link from "next/link"
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai"
import { HiCog, HiUser } from "react-icons/hi2"
import { useParamsStore } from "@/hooks/useParamsStore"
import { usePathname, useRouter } from "next/navigation"

type Props = {
  user: User
}

const UserActions = ({user}: Props) => {
  const setParams = useParamsStore(state => state.setParams)
  const router = useRouter();
  const pathname = usePathname();

  const setWinner = () => {
    setParams({winner: user.username, seller: undefined})
    if (pathname !== '/') router.push('/')

  }
  const setSeller = () => {
    setParams({seller: user.username, winner: undefined})
    if (pathname !== '/') router.push('/')
  }
  
  return (
    <Dropdown inline label={`Welcome ${user.name}`} className="cursor-pointer">
      <DropdownItem icon={HiUser} onClick={setSeller}>My Auctions</DropdownItem>
      <DropdownItem icon={AiFillTrophy} onClick={setWinner}>Auctions won</DropdownItem>
      <DropdownItem icon={AiFillCar}>
        <Link href="/auctions/create">
          Sell my car
        </Link>
      </DropdownItem>
      <DropdownItem icon={HiCog}>
        <Link href="/session">Session (dev only!)</Link>
      </DropdownItem>
      
      <DropdownDivider />

      <DropdownItem icon={AiOutlineLogout}
        onClick={() => signOut({redirectTo: '/'})}>
        Sign Out
      </DropdownItem>
    </Dropdown>
  )
}
export default UserActions