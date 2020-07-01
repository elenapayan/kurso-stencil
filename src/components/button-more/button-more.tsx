import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-more',
  styleUrl: 'button-more.css',
  shadow: true,
})
export class ButtonMore implements ComponentInterface {

  @Prop() text: string;
  @Event() clickPost: EventEmitter;

  onTap() {
    this.clickPost.emit();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onTap()}>{this.text}
          <slot name="icon" />
        </button>
      </div>
    )
  }
}
