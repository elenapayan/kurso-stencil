import { newSpecPage } from '@stencil/core/testing';
import { LayoutHome } from './layout-home';

describe('layout-home', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LayoutHome],
      html: `<layout-home></layout-home>`,
    });
    expect(page.root).toEqualHtml(`
      <layout-home>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </layout-home>
    `);
  });
});
