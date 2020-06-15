import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'post-footer',
  styleUrl: 'post-footer.css',
  shadow: true,
})
export class PostFooter implements ComponentInterface {

  @Prop() name: string;

  render() {
    return (
      <Host>
        <p class="footer-paragraph">Made with <span class="footer-heart">♥</span> by {this.name}</p>
      </Host>
    );
  }

}
