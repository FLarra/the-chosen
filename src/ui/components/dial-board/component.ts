import Component, { tracked } from '@glimmer/component';

export default class DialBoard extends Component {
  @tracked previousSelectedSpeaker = null;
  @tracked previousAngle = 0;
  @tracked spinner_status = 'idle';

  @tracked
  speakers = [
    {
      name: 'LARRY',
      position: 0,
      status: 'never-selected',
    },
    {
      name: 'BARTE',
      position: 60,
      status: 'never-selected',
    },
    {
      name: 'FEDE',
      position: 120,
      status: 'never-selected',
    },
    {
      name: 'DIEGOL',
      position: 180,
      status: 'never-selected',
    },
    {
      name: 'SAM',
      position: 240,
      status: 'never-selected',
    },
    {
      name: 'LEO',
      position: 300,
      status: 'never-selected',
    },
  ];

  selectSpeaker() {
    this.spinner_status = 'move';

    let speakersCount = this.speakers.length;
    let nsp = [];
    this.speakers.forEach(function(speaker, index) {
      if (speaker.status == 'never-selected'){
        nsp.push(index);
      }
    });
    if (nsp.length == 0) {
      alert('Every speaker had talked');
      return;
    }

    let newSelection = nsp[Math.floor(Math.random() * nsp.length)];

    if (this.previousSelectedSpeaker) {
      this.speakers[this.previousSelectedSpeaker].status = 'already-selected';
    }
    this.speakers[newSelection].status = 'selected';
    this.previousSelectedSpeaker = newSelection.toString();
    this.previousAngle = this.speakers[newSelection].position;
  }

  resetSpeaker() {
    this.spinner_status = 'idle';
    this.speakers.forEach(function(speaker) {
      speaker.status = 'never-selected';
    });
  }

  @tracked('spinner_status')
  get status() {
    return this.spinner_status;
  }
};
