import Image from 'next/image'
import Arrow from "@/assets/arrow-down.svg"

type Props = {
    name: string
}

export function ItemMenu( {name}: Props){
    return(
        <li>
                            <button className="flex items-center gap-3">
                                <span>
                                    {name}
                                </span>
                                <Image src={Arrow}
                                alt="Arrow dropdown" />
                            </button>
                        </li>
    )
}