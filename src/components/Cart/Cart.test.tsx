import { renderWithThemeProvider } from 'src/utils/test/test-utils';
import { CartProvider } from 'src/contexts/cart-context';

import Cart from './index';

describe('[components] - Cart', () => {
  const setup = () => {
    return renderWithThemeProvider(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
