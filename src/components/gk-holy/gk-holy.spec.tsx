import { newSpecPage } from '@stencil/core/testing';
import { GkHoly } from './gk-holy';

describe('gk-holy', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GkHoly],
      html: `<gk-holy></gk-holy>`,
    });
    expect(page.root).toEqualHtml(`
      <gk-holy>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gk-holy>
    `);
  });
});
