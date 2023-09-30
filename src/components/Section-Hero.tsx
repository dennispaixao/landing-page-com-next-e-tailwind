import { Container } from "./Container";
import Image from "next/image";
import imgAppleStore from "@/assets/btn-apple-store.svg";
import imgGooglePlay from "@/assets/btn-google-play.svg";
import arrow from "@/assets/arrow-explorer.svg"
import woman from "@/assets/woman.png"
export function SectionHero(){
    return (
      <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center">
      <Container>
        <div className="flex-1 max-w-[500px]">
            <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
            <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo, e feito para você.</p>
            <div className="flex gap-4 mb-24">
                <button>
                    <Image 
                    src={imgAppleStore}
                    alt="apple store"
                    />
                </button>
                <button>
                    <Image 
                    src={imgGooglePlay}
                    alt="google play"
                    />
                </button>
            </div>
            <button className="flex gap-4 items-center">
                <Image 
                    src={arrow}
                    alt='arrow explorer'
                />
                <span className="text-white text-sm font-bold">Continue explorando</span>
            </button>
       
        </div>
        <Image className="mr-[-41px]"
            src={woman}
            alt="Imagem Mulher"
        ></Image>
      </Container>
      </section>  
    );
}