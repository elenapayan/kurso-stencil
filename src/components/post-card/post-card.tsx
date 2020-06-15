import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'post-card',
  styleUrl: 'post-card.css',
  shadow: true,
})
export class PostCard implements ComponentInterface {

  @Prop() title1: string;
  @Prop() text1: string;
  @Prop() text2: string;

  render() {
    return (
      <Host>
        <h4 class="card-title">{this.title1}</h4>
        <p class="card-paragraph">{this.text1}</p>
        <p class="card-paragraph">{this.text2}</p>
        <slot name="btn" />
      </Host>
    );
  }

}
