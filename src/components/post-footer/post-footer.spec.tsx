import { newSpecPage } from '@stencil/core/testing';
import { PostFooter } from './post-footer';

describe('post-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostFooter],
      html: `<post-footer></post-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <post-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-footer>
    `);
  });
});
