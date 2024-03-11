import Image from "next/image";

type Props = {
    text: string
    image: any
}

export function ItemService({ text, image }: Props) {
    return (
        <>
            <div
                className="w-7 h-7 flex items-center justify-center">
                <Image
                    alt="Icon phone"
                    src={image}
                />
            </div>
            <p className="flex-1 text-txt-gray pr-2" >{text}</p>
        </>

    )
}