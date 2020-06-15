import { newE2EPage } from '@stencil/core/testing';

describe('gk-holy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gk-holy></gk-holy>');

    const element = await page.find('gk-holy');
    expect(element).toHaveClass('hydrated');
  });
});
