// Small pixel-art easter eggs that share the Bosphorus skyline's look.
import { PALETTES as SKYLINE } from './bosphorusArt';

const paint = (ctx, x, y, w, h, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};

/* ---------------------------------------------------------------- Tombili */

export const CAT_SIZE = { cols: 32, rows: 16 };

const CAT_COLORS = {
  light: { '#': '#2b3345', o: '#e08a3c', d: '#b3642a', w: '#fffaf2', p: '#ef9aa8', g: '#5fb85d', z: '#5b6b87' },
  dark: { '#': '#0d121c', o: '#eb9a4f', d: '#b86a2c', w: '#f3efe6', p: '#e48b9a', g: '#7dd07a', z: '#b9c5d6' },
};

// Sleeping loaf, facing right: ears, tabby stripes, closed eyes, pink nose, white paws.
const CAT = [
  '..............#...#...',
  '.............#o#.#o#..',
  '.............#ooooo#..',
  '...##########oooooo#..',
  '..#oodoodoodooddodd#..',
  '.#ooodoodoodoooopoo#..',
  '.#oodoodoodoooooooo#..',
  '.#ooooooooooo#wwwwww#.',
  '..###################.',
];
const AWAKE_EYES = '..#oodoodoodooogogo#..';
const Z = ['####', '..#.', '.#..', '####'];
const CAT_X = 5;
const CAT_Y = 6;

const sprite = (ctx, rows, ox, oy, colors) => rows.forEach((row, y) => {
  for (let x = 0; x < row.length; x++) if (row[x] !== '.') paint(ctx, ox + x, oy + y, 1, 1, colors[row[x]]);
});

/** Draws Tombili asleep (breathing, snoring Zs) or awake (eyes open, tail swishing). */
export function drawTombili(ctx, { awake, tick, isDark, still }) {
  const colors = isDark ? CAT_COLORS.dark : CAT_COLORS.light;
  ctx.clearRect(0, 0, CAT_SIZE.cols, CAT_SIZE.rows);

  const rows = CAT.slice();
  if (!awake && tick % 2) {
    rows[2] = `${rows[2].slice(0, 5)}######${rows[2].slice(11)}`;
    rows[3] = `${rows[3].slice(0, 5)}oooooo${rows[3].slice(11)}`;
  }
  if (awake) rows[4] = AWAKE_EYES;
  sprite(ctx, rows, CAT_X, CAT_Y, colors);

  const tail = awake
    ? (tick % 2 ? [[2, 3], [1, 2], [1, 1], [1, 0], [2, -1]] : [[2, 3], [2, 2], [2, 1], [3, 0], [4, -1]])
    : [[1, 8], [0, 8], [0, 7], [0, 6]];
  tail.forEach(([x, y]) => paint(ctx, CAT_X + x, CAT_Y + y, 1, 1, colors.d));

  if (!awake) {
    const zColors = { '#': colors.z };
    for (let i = 0; i < 2; i++) {
      const phase = still ? 2 + i * 3 : (tick + i * 4) % 8;
      const y = CAT_Y - 4 - Math.floor(phase / 2);
      if (y < 0) continue;
      ctx.globalAlpha = Math.max(0.2, 1 - phase / 8);
      sprite(ctx, Z, CAT_X + 18 + i * 4 + (phase > 4 ? 1 : 0), y, zColors);
      ctx.globalAlpha = 1;
    }
  }
}

/* ---------------------------------------------------------------- Galata toggle */

export const SCENE_SIZE = 18;
export const ORB_UP = 4;
export const ORB_DOWN = 19;

const SCENES = {
  day: {
    skyTop: '#bfe3ee', skyLow: '#e2f3f7', house: '#3a4a66', houseLit: '#56668a', window: '#dcecf1',
    stone: '#3a4a66', stoneLit: '#5d6d89', water: '#5fb3c4', foam: '#c3e8ef', reflection: '#4b8fa3', orb: '#f5c243',
  },
  night: {
    skyTop: '#17233f', skyLow: '#243457', house: '#0c1222', houseLit: '#1a2338', window: '#f3c54a',
    stone: SKYLINE.dark.stone, stoneLit: SKYLINE.dark.stoneLit, water: '#163d55', foam: '#2f6a86',
    reflection: SKYLINE.dark.stone, orb: '#f2ecd4', star: '#e9eefc',
  },
};
const HOUSES = [[0, 3], [1, 4], [2, 4], [3, 2], [4, 3], [5, 5], [12, 5], [13, 3], [14, 3], [15, 4], [16, 2], [17, 3]];
const WATERLINE = 14;

/** Draws the tiny Galata skyline used as the theme toggle icon; `orbY` moves the sun or moon. */
export function drawGalataScene(ctx, { night, orbY }) {
  const s = night ? SCENES.night : SCENES.day;
  const px = (x, y, color) => paint(ctx, x, y, 1, 1, color);

  for (let y = 0; y < WATERLINE; y++) paint(ctx, 0, y, SCENE_SIZE, 1, y < 7 ? s.skyTop : s.skyLow);
  if (night) [[2, 2], [5, 5], [11, 1], [3, 9]].forEach(([x, y]) => px(x, y, s.star));

  for (let y = 0; y < SCENE_SIZE; y++) {
    for (let x = 11; x < SCENE_SIZE; x++) {
      if (Math.hypot(x + 0.5 - 14.5, y + 0.5 - orbY) > 2.4) continue;
      if (night && Math.hypot(x + 0.5 - 15.6, y + 0.5 - orbY + 0.9) < 2.1) continue;
      px(x, y, s.orb);
    }
  }

  HOUSES.forEach(([x, h], i) => {
    paint(ctx, x, WATERLINE - h, 1, h, i % 3 ? s.house : s.houseLit);
    if (h >= 3 && (night ? i % 2 === 0 : i % 3 === 1)) px(x, WATERLINE - h + 1, s.window);
  });

  // Galata Tower: shaft, cornice, windowed gallery, eave and conical cap
  paint(ctx, 7, 8, 2, 6, s.stoneLit);
  paint(ctx, 9, 8, 2, 6, s.stone);
  px(8, 10, s.window);
  px(9, 12, s.window);
  paint(ctx, 6, 7, 6, 1, s.stone);
  paint(ctx, 7, 5, 4, 2, s.stone);
  paint(ctx, 8, 6, 2, 1, s.window);
  paint(ctx, 6, 4, 6, 1, s.stone);
  paint(ctx, 7, 3, 2, 1, s.stoneLit);
  paint(ctx, 9, 3, 2, 1, s.stone);
  paint(ctx, 8, 1, 1, 2, s.stoneLit);
  paint(ctx, 9, 1, 1, 2, s.stone);

  paint(ctx, 0, WATERLINE, SCENE_SIZE, SCENE_SIZE - WATERLINE, s.water);
  [[2, 15], [12, 15], [5, 16], [15, 17]].forEach(([x, y]) => paint(ctx, x, y, 2, 1, s.foam));
  [[8, 14], [9, 15], [8, 16]].forEach(([x, y]) => px(x, y, s.reflection));
}
