'use client'

import { useGetLotteryQuery } from "@/redux/services/lotteryApi"
import { MdZoomIn, MdZoomOut } from "react-icons/md";

import { capitalFirst } from "@/utils/strings";
import Coins from "./coins";
import Strip from "./strip";
import Pot from "./pot/Pot";
import { useState } from "react";
import Results from "./results";
import Loader from "../loader";

const Lottery = ({ lotteryType }: { lotteryType: "COSMIC" | "CLASSIC" | "ATOMIC" }) => {

    const { data, isLoading } = useGetLotteryQuery({ lotteryType });

    const lottery = data?.data;
    const results = lottery?.previousWinningticket;

    const [show, setShow] = useState(false);

    return (
        <div className={`bg-secondary-${lotteryType} rounded-md mb-5`}>
            <Loader size={10} isLoading={isLoading} className="h-52" color={`primary-${lotteryType}`}>
                {/* Details */}
                <div className="p-3">
                    {/* Title */}
                    <div className={`flex justify-end items-center text-primary-${lotteryType}`}>
                        <div className="flex flex-1 gap-5 items-end">
                            <span className="text-lg  font-bold">{capitalFirst(lottery?.lotteryName?.toLowerCase())}</span>
                            <span className="text-sm">{show ? `Past ${results?.length} Results` : `No. ${lottery?.roundNumber}`}</span>
                        </div>
                        <div className="text-xl cursor-pointer" onClick={() => setShow(!show)} >
                            {show ? <MdZoomOut /> : <MdZoomIn />}
                        </div>
                    </div>

                    {
                        show
                            ? <Results
                                lotteryType={lotteryType}
                                results={results}
                            />
                            : <Pot
                                lotteryType={lotteryType}
                                balls={lottery?.previousWinningticket}
                                winningPot={lottery?.winningPot}
                            />
                    }
                </div>
                {/* Strip */}
                <Strip lotteryType={lotteryType} nextDraw={lottery?.nextDraw} />
                {/* Show More */}
                <Coins amounts={lottery?.poolAmount} currentPool={lottery?.currentPool} />
            </Loader>
        </div>
    )
}

export default Lottery