import { render, screen, waitFor } from '@testing-library/react';
import Coins from '..';
import userEvent from '@testing-library/user-event';

const coins = [
    "BTC",
    "DOGE",
    "ETH",
    "INAE",
    "SOL",
    "TRX",
    "XRP",
]
const mockProps = {
    amounts: coins.map(item => ({ poolAmount: `${Math.random().toFixed(6)}`, coinSymbol: item })),
    currentPool: `${Math.random().toFixed(6)}`
};

describe("Coins", () => {
    describe("Render", () => {
        it('should have "Current Pool Status" by default', () => {
            // ARRANGE
            render(<Coins {...mockProps} />);

            // ACT
            const label = screen.getByTestId('status-action-label');

            // ASSERT
            expect(label).toHaveTextContent('Current Pool Status')
        });

        it('should have down icon by default', async () => {
            // ARRANGE
            render(<Coins {...mockProps} />);

            // ACT
            const icon = screen.getByTestId('down-icon');

            // ASSERT
            expect(icon).toBeInTheDocument();
        });
    })

    describe("Behavior", () => {

        it('should have "Close" when clicked', async () => {
            // ARRANGE
            render(<Coins {...mockProps} />);

            // ACT
            const action = screen.getByTestId('status-action');
            userEvent.click(action);

            await waitFor(() => {
                const label = screen.getByTestId('status-action-label');

                // ASSERT
                expect(label).toHaveTextContent('Close');
            });
        });

        it('should have up icon when clicked', async () => {
            // ARRANGE
            render(<Coins {...mockProps} />);

            // ACT
            const action = screen.getByTestId('status-action');
            userEvent.click(action);

            await waitFor(() => {
                const icon = screen.getByTestId('up-icon');

                // ASSERT
                expect(icon).toBeInTheDocument();
            });
        });

        it('should expand coins details when clicked', async () => {
            // ARRANGE
            render(<Coins {...mockProps} />);

            // ACT
            const action = screen.getByTestId('status-action');
            userEvent.click(action);

            await waitFor(() => {
                const details = screen.getByTestId('coins-details');

                // ASSERT
                expect(details).toBeInTheDocument();
            });
        });
    })
})