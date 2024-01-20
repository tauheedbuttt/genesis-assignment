'use client'

import { useGetLotteryQuery } from "@/redux/services/lotteryApi"
import { MdZoomIn, MdAlarm, MdArrowDownward } from "react-icons/md";

import { capitalFirst } from "@/utils/strings";
import Coins from "./coins";

const Lottery = ({ lotteryType }: { lotteryType: "COSMIC" | "CLASSIC" | "ATOMIC" }) => {
    const { data, isLoading } = useGetLotteryQuery({ lotteryType });
    const lottery = data?.data;
    return (
        <>
            <div className={`bg-secondary-${lotteryType} rounded-md mb-5`}>
                {/* Details */}
                <div className="p-3">
                    {/* Title */}
                    <div className={`flex justify-end items-center text-primary-${lotteryType}`}>
                        <div className="flex flex-1 gap-5 items-end">
                            <span className="text-lg  font-bold">{capitalFirst(lottery?.lotteryName)}</span>
                            <span className="text-sm">No.  {lottery?.roundNumber}</span>
                        </div>
                        <MdZoomIn className="text-xl" />
                    </div>

                    {/* Balls */}
                    <div className='flex items-center gap-[10px] my-4'>
                        {
                            lottery?.previousWinningticket?.map((item: number, index: number) => (
                                <div key={index} className={`bg-primary-${lotteryType} rounded-full h-[36px] w-[36px] flex items-center justify-center text-white`}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>

                    {/* Wining Pot */}
                    <div className="flex justify-between">
                        <div className="text-sm">Winning Pot</div>
                        <div className="flex gap-2 items-end">
                            <span className="text-xl font-bold">{lottery?.winningPot}</span>
                            <span className="text-sm">LUCKI</span>
                        </div>
                    </div>
                </div>
                {/* Strip */}
                <div className={`flex items-center gap-3 bg-primary-${lotteryType} text-white px-4 py-1`}>
                    <div className="flex flex-wrap">Next Draw</div>
                    <div className={`flex flex-1 gap-2 text-xl items-center`}>
                        <MdAlarm />
                        <span>{lottery?.nextDraw}</span>
                    </div>
                    <button className={`bg-white px-7 rounded-sm text-sm font-bold text-primary-${lotteryType}`}>
                        Play
                    </button>
                </div>
                {/* Show More */}
                <Coins amounts={lottery?.poolAmount} currentPool={lottery?.currentPool} />
            </div>
        </>
    )
}

export default Lottery