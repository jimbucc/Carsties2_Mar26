import Search from "./Search"
import Logo from "./Logo"
import LoginButton from "./LoginButton"
import { getCurrentUser } from "../actions/authActions"
import UserActions from "./UserActions"
import { headers } from "next/headers"

const NavBar = async () => {
  const user = await getCurrentUser();
  const headerList = await headers();

  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md cursor-pointer  ">
        <Logo />
          <Search />
          {user ? (
            <UserActions user={user}/>
          ) : (
            <LoginButton />
          )}        
    </header>
  )
}
export default NavBar