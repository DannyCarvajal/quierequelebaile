import Image from "next/image"
import Link from "next/link"

const Navbar = () => { 
    return (
        <div className="h-20 bg-dark-blue flex justify-between items-center p-2 z-20 relative">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width="45" height="60" className="cursor-pointer ml-8"  />
            </Link>
            <div className="flex gap-12 mr-16">
                <Link className="text-xl" href="/practice"><h1>Practica</h1></Link>
                <Link className="text-xl" href="/learn"> <h1>Aprende</h1> </Link>
            </div>
        </div>
    )
}

export default Navbar