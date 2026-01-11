'use client'

import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

export default function CountdownTimer({ startDate }: { startDate: string }) {
  const webinarDate = new Date(startDate).getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = webinarDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-400/30">
      <Clock className="w-6 h-6 text-amber-300" />
      <div className="text-left">
        <div className="font-semibold text-white">Do webinaru pozostało</div>
        <div className="flex items-center gap-2 mt-1">
          <div className="bg-white/10 px-2 py-1 rounded text-sm">
            <span className="font-bold text-amber-300">{timeLeft.days}</span>d
          </div>
          <div className="bg-white/10 px-2 py-1 rounded text-sm">
            <span className="font-bold text-amber-300">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            h
          </div>
          <div className="bg-white/10 px-2 py-1 rounded text-sm">
            <span className="font-bold text-amber-300">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            m
          </div>
          <div className="bg-white/10 px-2 py-1 rounded text-sm">
            <span className="font-bold text-amber-300">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            s
          </div>
        </div>
      </div>
    </div>
  )
}
