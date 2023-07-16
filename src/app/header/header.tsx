import Image from 'next/image'
import mapper from './../assets/mapper.png'

export default function Header(){
    return (
        <header className="flex justify-center items-center p-4">
            <Image src={mapper} alt="Logo" width={100} height={100} />
            <h2 className='text-xl md:text-3xl'>Mapping System for Schemas</h2>
            </header>
    )
}