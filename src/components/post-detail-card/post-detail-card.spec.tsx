import { newSpecPage } from '@stencil/core/testing';
import { PostDetailCard } from './post-detail-card';

describe('post-detail-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostDetailCard],
      html: `<post-detail-card></post-detail-card>`,
    });
    expect(page.root).toEqualHtml(`
      <post-detail-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-detail-card>
    `);
  });
});
