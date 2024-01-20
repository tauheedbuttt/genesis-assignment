import { render, screen } from '@testing-library/react';

import { Providers } from '@/redux/provider';
import Layout from '@/app/layout';
import Home from '@/app/page';

describe('Home Screen', () => {
    it('should have cosmic card', () => {
        render(<Layout><Home /></Layout>) //ARRANGE

        const myElem = screen.getByText('Cosmic'); // ACT

        expect(myElem).toBeInTheDocument(); // ASSERT
    })
    it('should have classic card', () => {
        render(<Layout><Home /></Layout>) //ARRANGE

        const myElem = screen.getByText('Classic'); // ACT

        expect(myElem).toBeInTheDocument(); // ASSERT
    })
    it('should have atomic card', () => {
        render(<Layout><Home /></Layout>) //ARRANGE

        const myElem = screen.getByText('Atomic'); // ACT

        expect(myElem).toBeInTheDocument(); // ASSERT
    })
})