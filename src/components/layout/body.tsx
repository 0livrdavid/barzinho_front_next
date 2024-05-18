export default function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-1 h-full p-4">
            <div className="flex flex-col justify-between p-8 h-full w-full bg-zinc-900 rounded-lg border border-zinc-700">
                {children}
            </div>
        </div>
    );
}

