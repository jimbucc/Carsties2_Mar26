'use client'

import { AiOutlineCar } from 'react-icons/ai'
import { useParamsStore } from '@/hooks/useParamsStore'
import { usePathname, useRouter } from 'next/navigation'


const Logo = () => {
  const router = useRouter();
  const pathname = usePathname();
  const reset = useParamsStore(state => state.reset)

  const handleReset = () => {
    if (pathname !== '/') router.push('/');
    reset();
  }


  return (
    <div
        onClick={handleReset}
        className="flex items-center gap-2 text-3xl font-semibold text-red-500">
      <AiOutlineCar size={34} />
      <div>Carsties Auctions</div>
    </div>
  )
}

export default Logo
