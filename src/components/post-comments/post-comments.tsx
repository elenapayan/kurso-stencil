import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'post-comments',
  styleUrl: 'post-comments.css',
  shadow: true,
})
export class PostComments implements ComponentInterface {

  @Prop() text1: string;
  @Prop() text2: string;

  render() {
    return (
      <Host>
        <p class="comment-text1">{this.text1}</p>
        <p class="comment-text1">{this.text2}</p>
        <slot name="date" />
        <slot name="btn" />
      </Host>
    );
  }

}
