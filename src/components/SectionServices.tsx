import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from '@/assets/icon-phone.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'
import { ItemService } from "./ItemService";

import ImagePhone from '@/assets/phone.png'

export function SectionServices() {
    return (
        <section className=" relative w-full h-[965px]" >
            <Container>
                <div className="flex-1 max-w-[594px] pt-32" >
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9" >Serviços exclusivos</span>

                    <h2 className="text-primary-gray text-[56px] leading-tight font-bold mb-6" >Gerencie suas finanças sem sair de casa</h2>


                    <p className="text-lg max-w-[554px] mb-16 text-second-gray"
                    >Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto de sua casa.</p>


                    <ul className="flex flex-col items-start gap-9" >
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray" >
                            <ItemService
                                image={PhoneIcon}
                                text="Acompanhar sua conta, fazer transferencia e pagamentos de onde estiver"
                            />
                        </li>

                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray" >
                            <ItemService
                                image={SolutionsIcon}
                                text="Soluções de empŕestimos e renegociação para organizar suas finanças"
                            />
                        </li>

                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray" >
                            <ItemService
                                image={OptionsIcon}
                                text="Diversas opções de investimentos, de acordo com o seu perfil de investidor"
                            />
                        </li>

                        <li className="flex items-center gap-9  " >
                            <ItemService
                                image={CardIcon}
                                text="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão de virtual."
                            />
                        </li>


                    </ul>
                </div>
            </Container>

            <div
                className="flex items-center absolute top-0 right-0 w-[32%] h-full bg-gray-phone"
            >
                <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]" />
            </div>
        </section>
    )
}