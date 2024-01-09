"use client"

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LottieAnimation } from "../lottie";
import styles from "./styles.module.scss";

interface FormWithProps {
    name: string;
    email: string;
    subjects: string;
    message: string;
}

const Contact = () => {
    const { register, handleSubmit } = useForm<FormWithProps>()

    function ClientContact(formData: FormWithProps) {
        window.location.href = `mailto:mesquitag313@gmail.com?subject=${formData.subjects}&body=Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`
    }

    function copyEmailToClipboard () {
        navigator.clipboard.writeText("mesquitag313@gmail.com").then(() => {
            // Email copied successfully
            toast.success("Email copied to clipboard!")
        })
    }

    return (
        <div id="contact" className="z-40">
            <div className="mx-auto text-center px-4">
                <h1 className="text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    Contact
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl leading-7 text-white">
                    Send an email and let me know how I can help you!
                </p>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-around w-full max-w-[1150px] py-14 mb-28 px-4 mx-auto">
                <LottieAnimation />

                <div className="w-full lg:max-w-[470px] flex flex-col justify-center mt-4">
                    <input
                        {...register("name")}
                        name="name"
                        placeholder="Type your name"
                        type="text"
                        autoFocus={true}
                        className="rounded-md p-4 mb-4 w-full h-11 transition duration-100 border border-gray-300 outline-none"
                    />

                    <input
                        {...register("email")}
                        name="email"
                        placeholder="Type your e-mail"
                        type="email"
                        className="rounded-md p-4 mb-4 w-full h-11 transition duration-100 border border-gray-300 outline-none"
                    />

                    <input
                        {...register("subjects")}
                        name="subjects"
                        placeholder="Type your subject"
                        type="text"
                        className="rounded-md p-4 mb-4 w-full h-11 transition duration-100 border border-gray-300 outline-none"
                    />

                    <div className="grid w-full gap-4">
                        <textarea
                            {...register("message")}
                            name="message"
                            placeholder="Type your message here"
                            className="rounded-md p-4 resize-none h-32 transition duration-100 border border-gray-300 outline-none"
                        />
                        <div className="flex gap-3">
                            <button
                                onClick={handleSubmit(ClientContact)}
                                className={styles.bn5}
                            >
                                Send E-mail
                            </button>
                            <button
                                onClick={copyEmailToClipboard}
                                className={styles.bn5}
                            >
                                Clip my e-mail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact