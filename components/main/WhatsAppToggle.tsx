import { FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";

export function WhatsAppToggle(): JSX.Element {
  return (
    <div className="fixed bottom-[5%] right-6 z-50">
        <Link href={"https://wa.me/5524992501345?text=Hello, how are you?"}>
            <FaWhatsappSquare 
              size={53} 
              className="text-green-500 transition duration-200 hover:text-green-600"
            />
        </Link>
    </div>
  )
}