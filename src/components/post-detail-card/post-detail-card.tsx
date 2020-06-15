import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'post-detail-card',
  styleUrl: 'post-detail-card.css',
  shadow: true,
})
export class PostDetailCard implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot name="title" />
        <slot name="text1" />
        <slot name="text2" />
        {/* <slot name="btn" /> */}
      </Host>
    );
  }

}
