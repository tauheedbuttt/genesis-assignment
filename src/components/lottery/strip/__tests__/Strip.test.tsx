import { render, screen, waitFor, act } from '@testing-library/react';
import Strip from '..';
import { StripProps } from '..';
import { setAuthToken } from '@/redux/features/authSlice';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

const mockProps: StripProps = {
    nextDraw: '123123213',
    lotteryType: 'COSMIC'
}

const renderStrip = () => {
    render(
        <Provider store={store}>
            <Strip {...mockProps} />
        </Provider>
    )
}

describe("Strip", () => {
    it("should have styling based on lotteryType", () => {
        // ARRANGE
        renderStrip();

        // ACT
        const strip = screen.getByTestId('strip-container');

        // ASSERT
        expect(strip).toHaveClass(`bg-primary-${mockProps.lotteryType}`)
    })

    it("should have link to Login Screen if logged in", async () => {
        // ARRANGE
        renderStrip();

        // ACT
        const strip = screen.getByTestId('play-link');

        // ASSERT
        expect(strip).toHaveAttribute('href', `/login`)
    })

    it("should not have link to Login Screen if logged in", async () => {
        // ARRANGE
        renderStrip();

        // ACT
        act(() => {
            store.dispatch(setAuthToken('dummytoken'))
        })

        await waitFor(() => {
            const strip = screen.getByTestId('play-link');

            // ASSERT
            expect(strip).toHaveAttribute('href', ``)
        })

    })
})