'use client'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted py-8 text-sm text-muted-foreground border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} SpeakLab English Academy</p>
          <p className="text-xs text-gray-400 mt-1">Made with ❤️ in Poland</p>
        </div>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition">
            Polityka prywatności
          </Link>
          <Link href="/terms" className="hover:text-primary transition">
            Regulamin
          </Link>
        </div>
      </div>
    </footer>
  )
}
