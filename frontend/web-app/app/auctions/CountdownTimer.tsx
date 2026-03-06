'use client'

import Countdown, { zeroPad } from "react-countdown"

type Props = {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

type CountdownProps = {
    auctionEnd: string
}

const renderer = ({ days, hours, minutes, seconds, completed }: Props) => {
    return (
      <div
        className={`
            border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center ${completed ? 'bg-red-600' : days === 0 && hours < 10 ? 'bg-amber-600' : 'bg-green-600'}`}
      >
        {completed ? (
          <span>Auction Finished</span>
        ) : (
          <span suppressHydrationWarning={true} className="text-sm font-semibold">
            {days} days - {zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s
          </span>
        )}
      </div>
    )
}


const CountdownTimer = ({auctionEnd}: CountdownProps) => {
  return (
    <div><Countdown date={auctionEnd} renderer={renderer}/></div>
  )
}
export default CountdownTimer