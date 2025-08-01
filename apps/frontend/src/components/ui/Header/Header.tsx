import Image from 'next/image'

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 flex flex-col items-center gap-3" >
            <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="logo image"
                className="rounded border-black-100"
            />
            <h1 className="text-2xl font-bold text-center">Property Maintenance Portal</h1>
        </header>
    );
};

export default Header;

