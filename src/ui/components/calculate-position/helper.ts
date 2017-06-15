export default function calculatePosition(params) {
  let radius = 250;
  let width = 500;
  let height = 500;

  var angle = (params[0] / 60) + (2 * Math.PI) / 6;

  var top = Math.round(height/2 + radius * Math.sin(angle));
  var left = Math.round(width/2 + radius * Math.cos(angle));

  return "margin-top: " + top + 'px; margin-left: ' + left + 'px;';
};
