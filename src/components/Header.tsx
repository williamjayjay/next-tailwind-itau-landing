import Image from "next/image";
import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";
import { Container } from "./Container";

export function Header() {
    return (
        <header className=" flex items-center w-full h-20 bg-primary-orange" >

            <Container >
                <div className="w-[80%]" >

                    <div className="flex flex-1 items-center justify-between" >
                        <div className="flex items-center gap-14" >
                            <Image
                                src={Logo}
                                alt="Logo"
                            />

                            <ul className="flex items-center gap-12" >
                                <li>
                                    <ItemMenu name="Para você" />
                                </li>

                                <li>
                                    <ItemMenu name="Para empresas" />
                                </li>

                                <li>
                                    <ItemMenu name="Serviços" />
                                </li>

                                <li>
                                    <ItemMenu name="Ajuda" />
                                </li>
                            </ul>
                        </div>

                        <Search />
                    </div>
                </div>

                <div className="w-[20%] h-full bg-primary-blue" >

                    <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10" >
                        <Image src={IconUser} alt="Icon user" />
                        <span className="text-white font-bold" >  Acessar conta</span>
                    </button>
                </div>

            </Container>

        </header>
    )
}