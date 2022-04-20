import paper from 'paper-jsdom';

const svg = "<path d='M38.4'/>";
const size = new paper.Size(1920, 1080);
const scope = paper.setup(size);

scope.project.importSVG(svg);

