import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex justify-end items-end py-2.5 mx-auto mb-20 mt-2.5 border-b border-gray-600">
            <div className="mr-auto w-48">
                <Image src="/images/logo.png" width={284} height={177} layout="intrinsic"></Image>
            </div>
            <Link href="/" ><a className="mr-3">Home</a></Link>
            <Link href="/about" ><a className="mr-3">About</a></Link>
            <Link href="/evenementen" ><a className="mr-3">Lijst evenementen</a></Link>
        </nav>
    );
}
 
export default Navbar;