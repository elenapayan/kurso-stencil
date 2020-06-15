import { newE2EPage } from '@stencil/core/testing';

describe('post-detail-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<post-detail-card></post-detail-card>');

    const element = await page.find('post-detail-card');
    expect(element).toHaveClass('hydrated');
  });
});
