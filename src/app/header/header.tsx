import Image from 'next/image'
import dariahLogo from './../assets/dariah-logo.png'
import psncLogo from './../assets/PSNC_blue_logo_RGB_.png'

export default function Header(){
    return (
        <header className="flex justify-between items-center p-4">
            <Image src={dariahLogo} alt="Logo" width={100} height={100} />
            <h2 className='text-xl md:text-3xl'>Mapper schemas</h2>
            <Image src={psncLogo} alt="Logo" width={100} height={100} />
            </header>
    )
}