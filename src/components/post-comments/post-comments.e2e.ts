import { newE2EPage } from '@stencil/core/testing';

describe('post-comments', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-comments></post-comments>');

    const element = await page.find('post-comments');
    expect(element).toHaveClass('hydrated');
  });
});
