"use client"

import Lottie from "react-lottie";
import Rocket from "@/components/assets/looties/rocket.json";

export function LottieAnimation(): JSX.Element {
    return (
        <div className="w-full max-w-[445px]">
            <Lottie
                style={{ cursor: "auto" }}
                isClickToPauseDisabled={true}
                options={{
                    autoplay: true,
                    loop: true,
                    animationData: Rocket
                }}
            />
        </div>
    )
}