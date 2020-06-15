import { newSpecPage } from '@stencil/core/testing';
import { PostComments } from './post-comments';

describe('post-comments', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PostComments],
      html: `<post-comments></post-comments>`,
    });
    expect(page.root).toEqualHtml(`
      <post-comments>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </post-comments>
    `);
  });
});
