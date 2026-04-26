import { cn } from '@/lib/utils'

const LinesBG = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "relative flex h-10 w-full border-b border-x border-dashed",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-10 before:w-[200vw] before:opacity-40",
                "before:bg-[linear-gradient(to_right,var(--text-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-foreground)_1px,transparent_1px)] before:bg-[size:10px_10px] before:[--text-foreground:var(--cd-edge)]",
                className
            )}
        />
    )
}

export default LinesBG