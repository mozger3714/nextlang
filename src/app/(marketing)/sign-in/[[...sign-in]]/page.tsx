import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex items-center justify-center bg-background gap-16 py-8">
      <SignIn />
      <Image
        src="/sign-image.jpg"
        alt="Przyotwarty laptop"
        width={460}
        height={680}
        className="w-full h-auto object-cover object-center rounded-lg shadow-lg"
      />
    </div>
  )
}
