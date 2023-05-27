// Vendors
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex w-full flex-wrap lg:flex-nowrap h-[calc(100vh-80px)] justify-between items-center bg-primary-purple">
        <div className="self-start mt-28 pl-12">
          <h1 className="font-extrabold text-7xl max-w-2xl ">QUIERE QUE LE BAILE?</h1>
          <p className="font-light mt-8 text-2xl">
            Aquí encontrarás el lugar perfecto para aprender, practicar y consolidar tus pasos de baile.
            Nuestro objetivo es ayudarte a convertirte en un bailarín/a excepcional mientras te diviertes y conoces a otros amantes del baile
          </p>
          <Link href="/practice">
            <button className="p-2 rounded-md bg-primary-blue mt-8 text-xl">Empieza ahora</button>
          </Link>
        </div>
        <Image src="/dancers.png" alt="dancers" height="650" width="650" className="mb-20"/>
      </div>
  )
}
