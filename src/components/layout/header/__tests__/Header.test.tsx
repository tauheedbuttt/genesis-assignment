import { render, screen } from '@testing-library/react';
import Loader from '..';
import Header from '..';


describe('Header', () => {
    it('should have title "Lottery"', () => {
        //ARRANGE
        render(<Header />)
        // ACT
        const myElem = screen.getByText('Lottery');
        // ASSERT
        expect(myElem).toBeInTheDocument();
    })

    it('should have menu icon', () => {
        //ARRANGE
        render(<Header />)
        // ACT
        const myElem = screen.getByTestId('menu-icon');
        // ASSERT
        expect(myElem).toBeInTheDocument();
    })

    it('should have 2 menu boxes on left and right', () => {
        //ARRANGE
        render(<Header />)
        // ACT
        const myElem = screen.getAllByTestId('menu-boxes');
        const total = myElem.length;
        // ASSERT
        expect(total).toBe(2)
    })
})