import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'gk-holy',
  styleUrl: 'gk-holy.css',
  shadow: true,
})
export class GkHoly implements ComponentInterface {

  render() {
    return (
      <main>
        <header><slot name="header" /></header>
        <nav><slot name="nav" /></nav>
        <section><slot name="section" /></section>
        <aside><slot name="aside" /></aside>
        <footer><slot name="footer" /></footer>
      </main>
    );
  }

}
