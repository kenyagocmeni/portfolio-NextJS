// app/page.js
export default function HomePage() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 transition-opacity delay-300 duration-1000 opacity-0 ready:opacity-100">
          Ben Semih.
        </h1>
        <p className="text-lg max-w-prose mb-6 transition-opacity delay-500 duration-1000 opacity-0 ready:opacity-100">
          Web geliştirici, müzisyen, sporcu.
        </p>
      </div>
    </section>
  );
}
