import { IoMdOpen } from 'react-icons/io';

interface MyButton3Props {
    url: string;
}

function MyButton3({ url }: MyButton3Props) {
    // console.log(url);
    return (
        <a
            href={url}
            className="btn btn-square mx-3"
            target="_blank"
            rel="noopener noreferrer"
        >
            <IoMdOpen />
        </a>
    );
}

export default MyButton3;
