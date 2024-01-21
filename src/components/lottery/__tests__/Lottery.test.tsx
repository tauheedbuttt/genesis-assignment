import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Lottery from '..';
import { Providers } from '@/redux/provider';
import { capitalFirst } from '@/utils/strings';

const mockTitles = ['Cosmic', 'Atomic', 'Classic'];

const renderLotteries = () => {
    mockTitles.map((lotteryType) => {
        render(
            <Providers>
                <Lottery lotteryType={lotteryType.toUpperCase()} />
            </Providers>
        )
    })
}

describe("Lottery Card", () => {
    it('should have loader when isLoading is true', () => {
        render(
            <Providers>
                <Lottery lotteryType="COSMIC" />
            </Providers>
        );

        // Assert that the Loader component is rendered when isLoading is true
        expect(screen.getByTestId('loader-container')).toBeInTheDocument();
    });

    it('applies background color based on lotteryType', () => {
        //ARRANGE
        renderLotteries()

        // ACT
        const lotteries = screen.getAllByTestId('lottery-container');

        // ASSERT
        lotteries.forEach((container, index) => {
            const expectedClass = `bg-secondary-${mockTitles[index].toUpperCase()}`;
            expect(container).toHaveClass(expectedClass);
        });
    });
})