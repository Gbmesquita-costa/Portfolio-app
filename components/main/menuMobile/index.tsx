import Image from "next/image";
import Profile from "@/components/assets/profile/gabriel.png";

import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
    menuIsVisible: boolean;
    setMenuIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: MenuMobileProps): JSX.Element {
    return (
        <>
            {
                menuIsVisible && (
                    <>
                        <div className="modal" />

                        <aside className="shadow-2xl transition duration-700 text-black 
                        bg-white fixed flex flex-col top-0 bottom-0 left-0 w-[290px] z-[99999]"
                        >
                            <div className="flex justify-end p-5">
                                <IoMdClose
                                    size={27}
                                    color="black"
                                    onClick={() => setMenuIsVisible(false)}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                />
                            </div>

                            <div className="flex justify-center my-4 h-[127px]">
                                <Image
                                    width={127}
                                    height={30}
                                    src={Profile}
                                    alt="gabriel_profile"
                                    className="rounded-full"
                                />
                            </div>

                            <div className="mt-4 flex justify-center">
                                <h1 className="text-xl font-semibold">
                                    Gabriel Mesquita
                                </h1>
                            </div>

                            <div className="mt-7">
                                <div className="flex flex-col justify-around items-start w-full h-[300px] px-6">
                                    <a href="#about-me" className="cursor-pointer hover:text-white bg-zinc-50 hover:bg-sky-500 p-3 w-full transition duration-75 rounded-md">
                                        About me
                                    </a>
                                    <a href="#skills" className="cursor-pointer hover:text-white bg-zinc-50 hover:bg-sky-500 p-3 w-full transition duration-75 rounded-md">
                                        Skills
                                    </a>
                                    <a href="#projects" className="cursor-pointer hover:text-white bg-zinc-50 hover:bg-sky-500 p-3 w-full transition duration-75 rounded-md">
                                        Projects
                                    </a>
                                    <a href="#contact" className="cursor-pointer hover:text-white bg-zinc-50 hover:bg-sky-500 p-3 w-full transition duration-75 rounded-md">
                                        Contact
                                    </a>
                                </div>
                            </div>

                            <div className="flex justify-center mt-20">
                                <p>
                                    ©Gabriel Portfólio
                                </p>
                            </div>
                        </aside>
                    </>
                )
            }
        </>
    )
}