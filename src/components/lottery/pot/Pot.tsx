interface PotProps {
    balls: number[],
    winningPot: string,
    lotteryType: string
}

const Pot = ({ balls, winningPot, lotteryType }: PotProps) => {
    return (
        <div data-testid="lottery-pot">
            {/* Balls */}
            <div className='flex items-center gap-[10px] my-4'>
                {
                    balls?.map((item, index) => (
                        <div key={index} className={`bg-primary-${lotteryType} rounded-full h-[36px] w-[36px] flex items-center justify-center text-white`}>
                            {item}
                        </div>
                    ))
                }
            </div>

            {/* Wining Pot */}
            <div className="flex justify-between items-center">
                <div className="text-sm">Winning Pot</div>
                <div className="flex gap-2 items-end">
                    <span className="text-xl font-bold">{winningPot}</span>
                    <span className="text-sm">LUCKI</span>
                </div>
            </div>
        </div>
    )
}

export default Pot