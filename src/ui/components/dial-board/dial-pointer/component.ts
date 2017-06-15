import Component, { tracked } from '@glimmer/component';

export default class DialPointer extends Component {
  @tracked args: { angle: any };
  @tracked rotation: string;

  didUpdate() {
    let degrees = this.args.angle;
    this.rotation = 'transform: rotate(' + (degrees - 210) + 'deg)';
  }
};
