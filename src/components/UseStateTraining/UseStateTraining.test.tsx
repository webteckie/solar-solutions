import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import UseStateTraining from './UseStateTraining'

afterEach(cleanup);

it('should show prop one', async () => {
    render(<UseStateTraining propOne='Prop One' />);
    const propText = screen.getByText(/Prop One/i)
    expect(propText).toBeTruthy()
});
