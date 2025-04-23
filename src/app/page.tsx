export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--background)] text-[var(--foreground)] transition-colors">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Build your future with{' '}
          <span className="text-[var(--color-accent)]">orange fire</span>
        </h1>
        <p className="text-lg  font-semibold sm:text-xl max-w-2xl mb-8 text-[var(--color-secondary)]">
          Fast. Modern. Beautiful. Powered by Tailwind, Next.js, and your
          unstoppable vision.
        </p>
        <button className="bg-[var(--color-accent)] cursor-pointer text-white px-6 py-3 rounded-2xl shadow-md hover:brightness-110 transition">
          Get Started
        </button>
      </section>
      <section className="px-8 py-20 bg-background text-foreground text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Welcome to the Dark Side
        </h2>
        <p className="text-lg text-secondary">
          Experience our sleek, modern design powered by dark mode and a bold
          orange accent.
        </p>
      </section>
    </main>
  )
}
