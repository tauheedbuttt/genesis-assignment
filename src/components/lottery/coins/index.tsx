'use client'

import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import BTC from '../../../../public/assets/images/BTC.png';
import DOGE from '../../../../public/assets/images/DOGE.png';
import ETH from '../../../../public/assets/images/ETH.png';
import INAE from '../../../../public/assets/images/INAE.png';
import SOL from '../../../../public/assets/images/SOL.png';
import TRX from '../../../../public/assets/images/TRX.png';
import XRP from '../../../../public/assets/images/XRP.png';
import Image from "next/image";

interface CoinsProps {
    amounts?: {
        coinSymbol: string,
        poolAmount: string
    }[],
    currentPool?: string
}

const Coins = ({ amounts, currentPool }: CoinsProps) => {
    const [show, setShow] = useState(false);
    const icons: any = {
        "BTC": BTC,
        "DOGE": DOGE,
        "ETH": ETH,
        "INAE": INAE,
        "SOL": SOL,
        "TRX": TRX,
        "XRP": XRP,
    }
    return (
        <div className="px-4 pt-2 ">
            {
                show && (
                    <div>
                        <div className="text-xs mb-2 text-gray-700">Current Pool Status</div>
                        <table className="w-full border-b-black border-b-2 ">
                            {
                                amounts?.map((item, index) => (
                                    <tr className="flex items-center justify-end" key={index}>
                                        {/* {icon} */}
                                        <td>
                                            <Image src={icons[item.coinSymbol]} alt='icon' />
                                        </td>
                                        <td className="w-full text-end">{item.poolAmount}</td>
                                        <td className="w-[20%] ml-2 text-start">{item.coinSymbol}</td>
                                    </tr>
                                ))
                            }
                        </table>
                        <div className="flex w-full items-center justify-end gap-5 mt-4">
                            <span className="text-2xl text-gray-500">≈</span>
                            <div className="flex gap-2 items-end">
                                <span className="text-xl font-bold">{currentPool}</span>
                                <span className="text-sm">LUCKI</span>
                            </div>
                        </div>
                    </div>
                )
            }
            <div onClick={() => setShow(!show)} className={`flex items-center text-xs text-gray-700  gap-2 cursor-pointer pb-2 justify-center`}>
                {show ? <FaCaretUp className="text-lg" /> : <FaCaretDown className="text-lg" />}
                <span>{show ? "Close" : "Current Pool Status"}</span>
            </div>
        </div>
    )
}

export default Coins