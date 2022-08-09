import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Welcome from './Welcome'

afterEach(cleanup);

it('should show prop one', async () => {
    render(<Welcome title='Hello!' />);
    const propText = screen.getByText(/Hello!/i)
    expect(propText).toBeTruthy()
});
