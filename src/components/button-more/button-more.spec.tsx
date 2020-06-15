import { newSpecPage } from '@stencil/core/testing';
import { ButtonMore } from './button-more';

describe('button-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonMore],
      html: `<button-more></button-more>`,
    });
    expect(page.root).toEqualHtml(`
      <button-more>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-more>
    `);
  });
});
