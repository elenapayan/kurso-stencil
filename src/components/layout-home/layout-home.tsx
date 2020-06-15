import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'layout-home',
  styleUrl: 'layout-home.css',
  shadow: true,
})
export class LayoutHome implements ComponentInterface {

  render() {
    return (
      <main>
        {/* <nav><slot name="nav" /></nav> */}
        <section>
          <slot name="section" />
        </section>
        <footer>
          <slot name="footer" />
        </footer>
      </main>
    );
  }
}
