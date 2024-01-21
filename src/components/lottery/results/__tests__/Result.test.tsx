import { render, screen } from '@testing-library/react';
import Results from '..';
import { ResultsProps } from '..';

const mockProps: ResultsProps = {
    results: [1, 2, 3, 4, 5, 6],
    lotteryType: 'COSMIC'
}

describe("Results", () => {
    it("should have results data", () => {
        // ARRANGE
        render(<Results {...mockProps} />)

        // ACT
        const winningResults = screen.getAllByTestId('result-row');

        // ASSERT
        expect(winningResults.length).toBe(mockProps.results.length)
    })

    it("should have lottery numbers styling based on lotteryType", () => {
        // ARRANGE
        render(<Results {...mockProps} />)

        // ACT
        const lotteryNumbers = screen.getAllByTestId('lottery-number');

        // ASSERT
        lotteryNumbers.map((number) => {
            expect(number).toHaveClass(`text-primary-${mockProps.lotteryType}`)
        })
    })
})