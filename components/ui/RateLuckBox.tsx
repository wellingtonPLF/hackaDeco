import { useSignal } from "@preact/signals";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

// lootBox
export interface Product {
    desktop: ImageWidget
    mobile: ImageWidget
    alt: string
    action?: {
        name: string,
        price: number,
        rate: string
    }
}

export interface Props {
    imgs?: Product[];
    preload?: boolean;
    interval?: number;
}

const DEFAULT_PROPS: Props = {
    imgs: [
        {
            alt: "/loot",
            action: {
              name: "Camera",
              price: 300,
              rate: "0.03%"
            },
            mobile:
              "https://i.zst.com.br/thumbs/12/17/30/1108495218.jpg",
            desktop:
              "https://i.zst.com.br/thumbs/12/17/30/1108495218.jpg",
        },
        {
            alt: "/loot",
            action: {
              name: "Blusa",
              price: 120,
              rate: "0.54%"
            },
            mobile:
              "https://img.elo7.com.br/product/original/17B1547/camisa-sublimacao-poliester.jpg",
            desktop:
              "https://img.elo7.com.br/product/original/17B1547/camisa-sublimacao-poliester.jpg",
        },
        {
            alt: "/loot",
            action: {
              name: "Xbox360",
              price: 800,
              rate: "0.001%",
            },
            mobile:
              "https://cdn.awsli.com.br/800x800/118/118222/produto/15602239/98e05c0968.jpg",
            desktop:
              "https://cdn.awsli.com.br/800x800/118/118222/produto/15602239/98e05c0968.jpg",
        },
        {
            alt: "/loot",
            action: {
              name: "Mouse",
              price: 70,
              rate: "0.8%"
            },
            mobile:
              "https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png",
            desktop:
              "https://resource.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png",
        },
        {
            alt: "/loot",
            action: {
              name: "Pente",
              price: 10,
              rate: "1.32%"
            },
            mobile:
              "https://d7c7aavs23fkh.cloudfront.net/Custom/Content/Products/10/04/1004823_pro-art-pente-dentes-largos-ref-co-6808-636598_m1_637088313305250432.jpg",
            desktop:
              "https://d7c7aavs23fkh.cloudfront.net/Custom/Content/Products/10/04/1004823_pro-art-pente-dentes-largos-ref-co-6808-636598_m1_637088313305250432.jpg",
        }
    ],
    preload: true
}

const nullObjectProduct: Product = {
    alt: "/loot",
    action: {
      name: "Box",
      price: 12.99,
      rate: "100 coins"
    },
    mobile:
      "https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg",
    desktop:
      "https://img.freepik.com/free-vector/3d-delivery-box-parcel_78370-825.jpg",
}

const RateLuckBox = (props: Props) => {
    const { imgs, preload } = { ...DEFAULT_PROPS, ...props };

    const selectProduct = useSignal<Product>(nullObjectProduct);

    const handleSelectProduct = (e: Product) => {
        selectProduct.value = {...e}
    }

    return (
        <div class="w-full">
            <div class="w-[435px] max-[480px]:w-[355px] h-[355px] max-[480px]:h-[325px] flex m-3 mr-auto max-[480px]:ml-auto transition-all duration-1000">
                <div class="w-[20%] flex flex-col justify-between border-t-4 border-green-700">
                    <div class="flex flex-col bg-black w-full h-[84%] overflow-y-auto custom-scrollbar">

                        {
                            imgs?.map((image, index) => (
                                <div key={index} onClick={() => {handleSelectProduct(image)}} 
                                    class="w-[90%] mx-auto mt-1 first:mt-0 cursor-pointer bg-white">
                                    <div class="flex h-[80px] max-[480px]:h-[60px] transition-all duration-1000">
                                        <Picture class="h-[50px] max-[480px]:h-[40px] m-auto leading-[80px] transition-all duration-1000" preload={preload}>

                                            <Source
                                            media="(min-width: 750px)"
                                            width={40}
                                            height={40}
                                            fetchPriority={preload ? "high" : "auto"}
                                            src={image.desktop}/>

                                            <Source
                                            media="(min-width: 350px)"
                                            width={40}
                                            height={40}
                                            class="object-cover w-full h-full"
                                            fetchPriority={preload ? "high" : "auto"}
                                            src={image.mobile}/>
                                            
                                            <img
                                            class="object-cover w-full h-full"
                                            loading={preload ? "eager" : "lazy"}
                                            src={image.desktop}
                                            alt={image.alt}/>

                                        </Picture>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div class="h-[16%] w-full bg-black rounded-br-lg  rounded-bl-lg flex justify-around items-center">
                        <img src="https://thumbs.dreamstime.com/b/whitebox-carton-moving-box-white-cardboard-isolated-black-143052265.jpg" alt="img"
                        onClick={() => {handleSelectProduct(nullObjectProduct)}} 
                        class=" rounded-bl-lg h-[90%]  cursor-pointer w-[62%]" />
                    </div>
                </div>
                <div class="flex flex-col justify-between w-[80%] h-full ml-[0.8%]">
                    <div class="h-[83%] flex justify-center rounded-tr-lg relative">

                        <Picture class="h-[70%] leading-[70%] rounded-tr-lg m-auto" preload={preload}>
                              
                            <Source
                            media="(min-width: 750px)"
                            width={240}
                            height={240}
                            fetchPriority={preload ? "high" : "auto"}
                            src={selectProduct.value.desktop}/>

                            <Source
                            media="(min-width: 350px)"
                            width={150}
                            height={150}
                            class="object-cover w-full h-full"
                            fetchPriority={preload ? "high" : "auto"}
                            src={selectProduct.value.mobile}/>
                            
                            <img
                            class="object-cover w-full h-full"
                            loading={preload ? "eager" : "lazy"}
                            src={selectProduct.value.desktop}
                            alt={selectProduct.value.alt}/>

                        </Picture>

                        <div class="font-alkatra bottom-0 font-bold absolute">{ (selectProduct.value.action.name != "Box")? (selectProduct.value.action.name) : ("") }</div>

                    </div>

                    <div class="flex h-[16%] w-full">

                        <button 
                        class={`
                        font-alkatra
                        font-bold 
                        bg-black 
                        w-[49.5%]
                        h-full
                        ${(selectProduct.value.action.name != "Box")? "cursor-default" : "hover:bg-white hover:text-black"}
                        border-[3px] border-black
                        mr-auto
                        text-center 
                        rounded-bl-lg 
                        text-white`}>{(selectProduct.value.action.name == "Box")? "": "Chance "}{selectProduct.value.action.rate}</button>

                        <button 
                        class="
                        font-alkatra 
                        font-bold 
                        bg-green-700 
                        hover:bg-white 
                        hover:text-green-700
                        border-[3px] border-green-700
                        w-[49.5%] h-full 
                        text-center 
                        rounded-br-lg
                        text-white">R${selectProduct.value.action.price}</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RateLuckBox;