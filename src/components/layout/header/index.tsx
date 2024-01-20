import { MdMenu } from "react-icons/md"

const Header = () => {
    return (
        <header className="flex w-full items-center">
            <div className=" w-[72px] h-[60px] cursor-pointer flex items-center justify-center">
                <MdMenu className="text-2xl" />
            </div>
            <div className="text-center w-full text-lg font-bold">
                Lottery
            </div>
            <div className=" w-[72px] h-[60px] cursor-pointer flex items-center justify-center">
            </div>
        </header>
    )
}

export default Header