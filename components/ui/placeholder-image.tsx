import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface PlaceholderImageProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string;
}

export function PlaceholderImage({ className, text, ...props }: PlaceholderImageProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center bg-industrial-800 text-industrial-300 animate-pulse",
                className
            )}
            {...props}
        >
            <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
            {text && <span className="text-sm font-medium opacity-70">{text}</span>}
        </div>
    );
}
