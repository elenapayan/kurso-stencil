import { newE2EPage } from '@stencil/core/testing';

describe('button-more', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-more></button-more>');

    const element = await page.find('button-more');
    expect(element).toHaveClass('hydrated');
  });
});
