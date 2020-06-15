import { newE2EPage } from '@stencil/core/testing';

describe('layout-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<layout-home></layout-home>');

    const element = await page.find('layout-home');
    expect(element).toHaveClass('hydrated');
  });
});
