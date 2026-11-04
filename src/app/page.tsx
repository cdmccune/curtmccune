export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Curt McCune
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Senior Software Engineer
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          I`m a software engineer passionate about building
          products, solving interesting problems, and creating
          great user experiences.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/projects"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            View Projects
          </a>

          <a
            href="/about"
            className="rounded-lg border border-gray-300 px-6 py-3"
          >
            About Me
          </a>
        </div>
      </div>
    </main>
  );
}