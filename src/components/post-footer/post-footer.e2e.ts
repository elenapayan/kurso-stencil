import { newE2EPage } from '@stencil/core/testing';

describe('post-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-footer></post-footer>');

    const element = await page.find('post-footer');
    expect(element).toHaveClass('hydrated');
  });
});
