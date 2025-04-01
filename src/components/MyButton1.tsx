type MyButtonProps = {
    text: string;
    href: string;
};

function MyButton1({ text, href }: MyButtonProps) {
    return (
        <a
            className="group relative inline-block text-sm font-medium text-stone-300 focus:ring-3 focus:outline-none"
            href={href}
        >
            <span className="absolute inset-0 border border-stone-700"></span>
            <span className="block border border-stone-700 bg-stone-800 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-stone-700">
                {text}
            </span>
        </a>
    );
}

export default MyButton1;
