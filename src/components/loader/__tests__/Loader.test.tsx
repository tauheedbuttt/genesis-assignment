import { render, screen } from '@testing-library/react';
import Loader from '..';


describe('Loader', () => {
    it('should appear when isLoading is "true"', () => {
        //ARRANGE
        render(<Loader isLoading={true} />)
        // ACT
        const myElem = screen.getByTestId('loader-container');
        // ASSERT
        expect(myElem).toBeInTheDocument();
    })

    it('should disappear when isLoading is "false"', () => {
        //ARRANGE
        render(<Loader isLoading={false} />)
        // ACT
        const myElem = screen.queryByTestId('loader-container');
        // ASSERT
        expect(myElem).toBeNull()
    })

    it('should have default size "4"', () => {
        //ARRANGE
        render(<Loader isLoading={true} />)
        // ACT
        const myElem = screen.getByTestId('loader-svg');
        // ASSERT
        expect(myElem).toHaveClass('w-4 h-4')
    })

    it('should have default color "blue-900" ', () => {
        //ARRANGE
        render(<Loader isLoading={true} />)
        // ACT
        const myElem = screen.getByTestId('loader-svg');
        // ASSERT
        expect(myElem).toHaveClass('text-blue-900');
    })

    it('should have width and height of "10" when size is "10"', () => {
        const mockSize = 10;

        //ARRANGE
        render(<Loader isLoading={true} size={mockSize} />)
        // ACT
        const myElem = screen.getByTestId('loader-svg');
        // ASSERT
        expect(myElem).toHaveClass(`w-${mockSize} h-${mockSize}`)
    })

    it('should have color of "primary-COSMIC" when color is "primary-COSMIC"', () => {
        const mockColor = "primary-COSMIC";

        //ARRANGE
        render(<Loader isLoading={true} color={mockColor} />)
        // ACT
        const myElem = screen.getByTestId('loader-svg');
        // ASSERT
        expect(myElem).toHaveClass(`text-${mockColor}`)
    })
})