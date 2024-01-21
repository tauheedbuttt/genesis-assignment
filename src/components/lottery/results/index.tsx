export interface ResultsProps {
    results: any[],
    lotteryType: string
}

const Results = ({ results, lotteryType }: ResultsProps) => {
    return (
        <table className='my-2' data-testid="lottery-results">
            {
                results?.map((item, index) => (
                    <tr data-testid="result-row" key={index} className='text-sm'>
                        <td >2302123</td>
                        <td data-testid="lottery-number" className={`w-full text-bold text-center text-primary-${lotteryType}`}>99 99 99 99 99 99</td>
                        <td >14,934,000,000</td>
                    </tr>
                ))
            }
        </table>
    )
}

export default Results