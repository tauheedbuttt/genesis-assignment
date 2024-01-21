import { render, screen } from '@testing-library/react';
import Pot from '../Pot';
import { PotProps } from '../Pot';

const mockProps: PotProps = {
    balls: [1, 2, 3, 4, 5, 6],
    winningPot: '123244352',
    lotteryType: 'COSMIC'
}

describe("Pot", () => {
    it("should have winningPot data", () => {
        // ARRANGE
        render(<Pot {...mockProps} />)

        // ACT
        const winningPot = screen.getByTestId('winning-pot');

        // ASSERT
        expect(winningPot).toHaveTextContent(mockProps.winningPot)
    })

    it("should have balls data ", () => {
        // ARRANGE
        render(<Pot {...mockProps} />)

        // ACT
        const balls = screen.getAllByTestId('balls');

        // ASSERT
        balls.map((ball, index) => {
            expect(ball).toHaveTextContent(`${mockProps.balls[index]}`)
        })
    })

    it("should have balls styling based on lotteryType", () => {
        // ARRANGE
        render(<Pot {...mockProps} />)

        // ACT
        const balls = screen.getAllByTestId('balls');

        // ASSERT
        balls.map((ball) => {
            expect(ball).toHaveClass(`bg-primary-${mockProps.lotteryType}`)
        })
    })
})