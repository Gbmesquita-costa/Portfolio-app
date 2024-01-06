"use client"

import { ReactNode } from "react";
import { Toaster } from "sonner";

interface ChildrenProps {
    children: ReactNode;
}

export function Providers({ children }: ChildrenProps) {
    return (
        <>
            <Toaster
                richColors={true}
                duration={2000}
                position="bottom-right"
            />

            {children}
        </>
    )
}