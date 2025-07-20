import { SignUp } from '@clerk/nextjs'

import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-background gap-16 py-8">
      <SignUp />
      <Image
        src="/header.jpg"
        alt="Konwersacja w korporacji"
        width={530}
        height={530}
        className="hidden lg:flex w-auto h-full rounded-lg shadow-lg"
      />
    </div>
  )
}
