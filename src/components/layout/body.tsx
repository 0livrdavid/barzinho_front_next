import React from "react";

export default function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-between p-8 h-full w-full rounded-lg border border-border bg-background">
            {children}
        </div>
    );
}

