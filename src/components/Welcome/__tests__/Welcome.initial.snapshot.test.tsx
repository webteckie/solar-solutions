import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Welcome from '../Welcome'

afterEach(cleanup);

describe('Welcome', () => {
    it('should render expected html', async () => {
        const title = 'Hello World!'
        const {asFragment} = render(<Welcome title={title} />);
        expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    Hello World!
  </div>
</DocumentFragment>
`);
    });
})