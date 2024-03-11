
import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export function Search() {
    return (
        <div className='flex items-center gap-4' >
            <Image
                src={IconSearch}
                alt="Search"
            />
            <input type="text" className=' pr-4 bg-transparent outline-none text-white placeholder:text-white' placeholder='Buscar' />
        </div>
    )
}