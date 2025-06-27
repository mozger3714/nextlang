export function Footer() {
  return (
    <footer className="bg-muted py-8 text-sm text-muted-foreground border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} SpeakLab English Academy</p>
          <p className="text-xs text-gray-400 mt-1">
            Made with ❤️ in Poland by Stanisław Kyrylczuk
          </p>
        </div>

        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-primary transition">
            Polityka prywatności
          </a>
          <a href="/terms" className="hover:text-primary transition">
            Regulamin
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  )
}
