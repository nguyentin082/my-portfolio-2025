type MyButtonProps = {
    text: string;
    href: string;
};

function MyButton1({ text, href }: MyButtonProps) {
    return (
        <>
            <a
                className="group relative inline-block text-sm font-medium text-red-600 focus:ring-3 focus:outline-hidden"
                href={href}
            >
                <span className="absolute inset-0 border border-current"></span>
                <span className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    {text}
                </span>
            </a>
        </>
    );
}

export default MyButton1;
