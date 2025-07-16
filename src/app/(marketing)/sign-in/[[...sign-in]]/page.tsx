import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-background gap-16 py-8">
      <SignIn />
      <Image
        src="/header.jpg"
        alt="Konwersacja w korporacji"
        width={530}
        height={530}
        className="rounded-lg shadow-lg"
      />
    </div>
  )
}
