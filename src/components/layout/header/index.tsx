import { MdMenu } from "react-icons/md"

const Header = () => {
    return (
        <header className="flex w-full items-center">
            <div data-testid="menu-boxes" className=" w-[72px] h-[60px] cursor-pointer flex items-center justify-center">
                <MdMenu data-testid="menu-icon" className="text-2xl" />
            </div>
            <div className="text-center w-full text-xl font-bold">
                Lottery
            </div>
            <div data-testid="menu-boxes" className=" w-[72px] h-[60px] cursor-pointer flex items-center justify-center">
            </div>
        </header>
    )
}

export default Header