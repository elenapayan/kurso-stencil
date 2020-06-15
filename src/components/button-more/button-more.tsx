import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-more',
  styleUrl: 'button-more.css',
  shadow: true,
})
export class ButtonMore implements ComponentInterface {

  @Prop() text: string;

  render() {
    return (
      <div>
        <button>{this.text}
          <slot name="icon" />
        </button>
      </div>
    )
  }
}
