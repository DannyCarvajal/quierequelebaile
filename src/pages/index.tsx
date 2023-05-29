// Vendors
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-container flex w-full flex-wrap items-center justify-between bg-primary-purple lg:flex-nowrap">
      <div className="mt-28 self-start pl-12">
        <h1 className="max-w-2xl text-7xl font-extrabold ">QUIERE QUE LE BAILE?</h1>
        <p className="mt-8 text-2xl font-light">
          Aquí encontrarás el lugar perfecto para aprender, practicar y consolidar tus pasos de baile. Nuestro objetivo es ayudarte a
          convertirte en un bailarín/a excepcional mientras te diviertes y conoces a otros amantes del baile
        </p>
        <Link href="/practice">
          <button className="btn mt-8 bg-primary-blue">Empieza ahora</button>
        </Link>
      </div>
      <Image src="/dancers.png" alt="dancers" height="650" width="650" className="mb-20" />
    </div>
  );
}
