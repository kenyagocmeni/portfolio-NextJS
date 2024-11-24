import Link from "next/link";

// app/works/page.js
export default function WorksPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div>
        <h1 className="text-4xl font-bold mb-4">Çalışmalarımdan Bazıları</h1>
        </div>
      <div className="w-96 h-60 flex flex-col justify-around">
        <ul className="grid col-auto">
          <li className="hover:text-lg transition-all">
            <Link href="https://github.com/kenyagocmeni/Minimal-Car-Dealer-App-Redux">
              Car Dealer App with Redux Toolkit
            </Link>
          </li>
          <li className="hover:text-lg transition-all">
            <Link href="https://github.com/kenyagocmeni/Basic-Football-Team-Management-System-Redux">
              Football Manager App with Redux Toolkit
            </Link>
          </li>
          <li className="hover:text-lg transition-all">
            <Link href="https://github.com/kenyagocmeni/Movie-app-w-NextJS">
              SEMIHFLIX with Next.js
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
