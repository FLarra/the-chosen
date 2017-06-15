import Component from '@glimmer/component';

export default class DialBoard extends Component {
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
};
