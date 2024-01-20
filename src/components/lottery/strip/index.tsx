import { MdAlarm } from "react-icons/md"

const Strip = ({ lotteryType, nextDraw }: { lotteryType: string, nextDraw: string }) => {
    return (
        <div className={`flex items-center gap-3 bg-primary-${lotteryType} text-white px-4 py-1`}>
            <div className="flex flex-wrap">Next Draw</div>
            <div className={`flex flex-1 gap-2 text-xl items-center`}>
                <MdAlarm />
                <span>{nextDraw}</span>
            </div>
            <button className={`bg-white px-7 rounded-sm text-sm font-bold text-primary-${lotteryType}`}>
                Play
            </button>
        </div>
    )
}

export default Strip