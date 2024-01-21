import Link from "next/link"
import { MdAlarm } from "react-icons/md"
import { useSelector } from "react-redux"

export interface StripProps {
    lotteryType: string,
    nextDraw: string
}

const Strip = ({ lotteryType, nextDraw }: StripProps) => {
    const { token } = useSelector((state: any) => state.authReducer);
    return (
        <div data-testid="strip-container" className={`flex items-center gap-3 bg-primary-${lotteryType} text-white px-4 py-1`}>
            <div className="flex flex-wrap">Next Draw</div>
            <div className={`flex flex-1 gap-2 text-xl items-center`}>
                <MdAlarm />
                <span>{nextDraw}</span>
            </div>
            <Link data-testid="play-link" href={token ? '' : '/login'} className={`bg-white px-7 rounded-sm text-sm font-bold text-primary-${lotteryType}`}>
                Play
            </Link>
        </div>
    )
}

export default Strip