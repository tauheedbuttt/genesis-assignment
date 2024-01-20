import Link from "next/link"
import { MdAlarm } from "react-icons/md"
import { useSelector } from "react-redux"

const Strip = ({ lotteryType, nextDraw }: { lotteryType: string, nextDraw: string }) => {
    const { token } = useSelector((state: any) => state.authReducer);
    return (
        <div className={`flex items-center gap-3 bg-primary-${lotteryType} text-white px-4 py-1`}>
            <div className="flex flex-wrap">Next Draw</div>
            <div className={`flex flex-1 gap-2 text-xl items-center`}>
                <MdAlarm />
                <span>{nextDraw}</span>
            </div>
            <Link href={token ? '' : '/login'} className={`bg-white px-7 rounded-sm text-sm font-bold text-primary-${lotteryType}`}>
                Play
            </Link>
        </div>
    )
}

export default Strip