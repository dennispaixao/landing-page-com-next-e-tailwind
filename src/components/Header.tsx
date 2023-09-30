import Image from 'next/image'
import { ItemMenu } from './Item-menu'
import { Search } from './Search'
import {Container} from './Container'
import Logo from "@/assets/logo.svg"
import IconUser from "@/assets/icon-user.svg"

export function Header(){
    return (
        <header className="relative flex items-center w-full h-20 bg-primary-orange">
            
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            <Container>            <div className='flex flex-1 justify-between items-center'>
                <div className="flex items-center gap-14">
                    <Image
                     src={Logo}
                     alt="Logo" 
                    />
                    <ul className='flex items-center gap-12'>
                        <ItemMenu name="Para você" />       
                        <ItemMenu name="Para empresas" />       
                        <ItemMenu name="Serviços" />       
                        <ItemMenu name="Ajuda" />       
                    </ul>
                </div>
                <div className='flex items-center justify-between'>
                    <Search />  
                    <button className="flex z-10 items-center bg-primary-blue h-20 pl-10 gap-4">
                        <Image src={IconUser} alt="Icon user" />
                        <span className="text-white font-bold">
                            Acessar conta
                        </span>
                    </button>
                 </div>  
            </div>
           </Container>
       </header>
    )
}