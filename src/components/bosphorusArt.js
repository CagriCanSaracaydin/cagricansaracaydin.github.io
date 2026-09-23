// Pixel-art Istanbul skyline, painted in art pixels (1 canvas pixel = 1 art pixel).
// Static scenery is rendered once into two layers; each frame adds water, boats and birds.

export const ROWS = 44;
const WATER = 32; // first water row
const WATER_ROWS = ROWS - WATER;

export const PALETTES = {
  light: {
    far: '#d3dce6', haze: '#b1bfcf', ink: '#34425c', lit: '#5b6b87', window: '#e6edf3', glow: '#5b6b87',
    cypress: '#35574f', accent: '#1d8797', sea: '#a6d5dd', seaDeep: '#8fc8d1', foam: '#f2fafb',
    hull: '#26314a', cabin: '#fbfdff', orb: '#f0c043', red: '#d65a4f', star: null,
    stoneLit: '#6d7c97', stone: '#44536e',
  },
  dark: {
    far: '#232e42', haze: '#2d3a51', ink: '#4c5b76', lit: '#62718d', window: '#3b4760', glow: '#f2c96b',
    cypress: '#2a4744', accent: '#62d2dc', sea: '#1d4150', seaDeep: '#173543', foam: '#4d8594',
    hull: '#131a28', cabin: '#b9c5d6', orb: '#f2ecd4', red: '#ff6b6b', star: '#dfe6f5',
    // mosques and towers are floodlit in warm light at night
    stoneLit: '#d6c296', stone: '#a18f6a',
  },
};

const hash = (n) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

const painter = (ctx, palette) => {
  const rect = (x, y, w, h, color) => {
    ctx.fillStyle = palette[color] ?? color;
    ctx.fillRect(x, y, w, h);
  };
  const px = (x, y, color) => rect(x, y, 1, 1, color);
  const line = (x0, y0, x1, y1, color) => {
    const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    for (let i = 0; i <= steps; i++) {
      px(Math.round(x0 + ((x1 - x0) * i) / steps), Math.round(y0 + ((y1 - y0) * i) / steps), color);
    }
  };
  return { rect, px, line, ctx };
};

/** Where the landmarks sit for a given width, shared by the static and animated passes. */
export const layout = (cols) => {
  const bridgeStart = Math.round(cols * 0.6);
  const bridgeEnd = Math.round(cols * 0.93);
  const span = bridgeEnd - bridgeStart;
  return {
    mosque: Math.round(cols * 0.14),
    smallMosque: cols >= 300 ? Math.round(cols * 0.28) : null,
    galata: Math.round(cols * 0.41),
    maiden: Math.round(cols * 0.515),
    ortakoy: Math.round(cols * 0.575),
    bridgeStart,
    bridgeEnd,
    towerA: bridgeStart + Math.round(span * 0.17),
    towerB: bridgeEnd - Math.round(span * 0.17),
    deck: WATER - 9,
    towerTop: 6,
  };
};

// Near land: historic peninsula + Galata, Ortaköy, and the Asian shore past the bridge.
const isLand = (u) => u < 0.475 || (u > 0.55 && u < 0.625) || u > 0.905;
const hillHeight = (u) => {
  const bumps = [[0.13, 0.1, 6], [0.28, 0.07, 3.5], [0.41, 0.06, 5], [0.6, 0.04, 1.5], [0.98, 0.08, 5]];
  let h = 1;
  bumps.forEach(([c, w, a]) => { h = Math.max(h, a * Math.exp(-(((u - c) / w) ** 2))); });
  return Math.round(h);
};
const deckY = (L, x) => {
  const mid = (L.bridgeStart + L.bridgeEnd) / 2;
  const u = (x - mid) / ((L.bridgeEnd - L.bridgeStart) / 2);
  return L.deck - Math.round(1.4 * (1 - u * u));
};
const cableY = (L, x) => {
  const mid = (L.towerA + L.towerB) / 2;
  const u = (x - mid) / ((L.towerB - L.towerA) / 2);
  return Math.round(L.towerTop + (deckY(L, x) - 2 - L.towerTop) * (1 - u * u));
};

/* ---------------------------------------------------------------- landmarks */

function dome(p, cx, base, r, squash = 0.85) {
  for (let dx = -r; dx <= r; dx++) {
    const h = Math.round(Math.sqrt(r * r - dx * dx) * squash);
    if (h > 0) p.rect(cx + dx, base - h, 1, h, dx < 0 ? 'stoneLit' : 'stone');
  }
  return base - Math.round(r * squash);
}

function minaret(p, x, ground, height, balconies) {
  const top = ground - height;
  p.rect(x - 1, ground - 3, 4, 3, 'stone');
  p.rect(x, top, 1, height, 'stoneLit');
  p.rect(x + 1, top, 1, height, 'stone');
  for (let i = 0; i < balconies; i++) p.rect(x - 1, top + 3 + i * 4, 4, 1, 'stone');
  p.rect(x, top - 1, 2, 1, 'stone');
  p.px(x, top - 2, 'stone');
  p.px(x, top - 3, 'stoneLit');
}

function mosque(p, cx, ground, big) {
  const R = big ? 8 : 6;
  const halfW = big ? 15 : 10;
  const bodyTop = ground - (big ? 6 : 4);
  p.rect(cx - halfW, bodyTop, halfW + 1, ground - bodyTop, 'stoneLit');
  p.rect(cx + 1, bodyTop, halfW, ground - bodyTop, 'stone');
  for (let x = cx - halfW + 2; x <= cx + halfW - 2; x += 3) {
    p.px(x, bodyTop + 2, 'window');
    p.px(x, bodyTop + 3, 'window');
  }
  // cascading half domes and corner domes
  dome(p, cx - R - 2, bodyTop, R - 3);
  dome(p, cx + R + 2, bodyTop, R - 3);
  dome(p, cx - halfW + 2, bodyTop, 2);
  dome(p, cx + halfW - 2, bodyTop, 2);
  // drum with windows, then the main dome and its finial
  const drumTop = bodyTop - 2;
  p.rect(cx - R + 1, drumTop, R, 2, 'stoneLit');
  p.rect(cx + 1, drumTop, R - 1, 2, 'stone');
  for (let x = cx - R + 2; x <= cx + R - 2; x += 2) p.px(x, drumTop + 1, 'window');
  const crown = dome(p, cx, drumTop, R);
  p.rect(cx, crown - 2, 1, 2, 'stone');
  p.px(cx, crown - 3, 'stoneLit');
  if (big) {
    minaret(p, cx - halfW - 3, ground, 22, 3);
    minaret(p, cx + halfW + 2, ground, 22, 3);
    minaret(p, cx - halfW - 8, ground, 17, 2);
    minaret(p, cx + halfW + 7, ground, 17, 2);
  } else {
    minaret(p, cx - halfW - 2, ground, 15, 2);
    minaret(p, cx + halfW + 1, ground, 15, 2);
  }
}

function galataTower(p, gx, ground) {
  p.rect(gx, ground - 12, 3, 12, 'stoneLit');
  p.rect(gx + 3, ground - 12, 4, 12, 'stone');
  [[gx + 1, 4], [gx + 4, 7], [gx + 2, 9], [gx + 4, 3]].forEach(([x, up]) => p.px(x, ground - up, 'window'));
  p.rect(gx - 1, ground - 13, 9, 1, 'stone');
  p.rect(gx, ground - 15, 7, 2, 'stone');
  p.px(gx, ground - 15, 'stoneLit');
  [gx + 1, gx + 3, gx + 5].forEach((x) => { p.px(x, ground - 15, 'window'); p.px(x, ground - 14, 'window'); });
  p.rect(gx - 1, ground - 16, 9, 1, 'stone');
  [7, 7, 5, 5, 3, 3, 1, 1].forEach((w, i) => {
    const x = gx + (7 - w) / 2;
    const y = ground - 17 - i;
    p.rect(x, y, Math.ceil(w / 2), 1, 'stoneLit');
    p.rect(x + Math.ceil(w / 2), y, Math.floor(w / 2), 1, 'stone');
  });
  p.px(gx + 3, ground - 25, 'stone');
  p.px(gx + 3, ground - 26, 'stoneLit');
}

function maidensTower(p, mx) {
  const w = WATER - 1;
  p.rect(mx - 6, w, 13, 1, 'stone');
  p.rect(mx - 4, w - 3, 5, 3, 'stoneLit');
  p.rect(mx + 1, w - 3, 4, 3, 'stone');
  [mx - 3, mx - 1, mx + 2].forEach((x) => p.px(x, w - 2, 'window'));
  p.rect(mx + 3, w - 5, 2, 2, 'stone');
  p.rect(mx - 1, w - 11, 1, 8, 'stoneLit');
  p.rect(mx, w - 11, 2, 8, 'stone');
  p.px(mx, w - 6, 'window');
  p.px(mx, w - 9, 'window');
  p.rect(mx - 2, w - 12, 5, 1, 'stone');
  p.rect(mx - 1, w - 13, 3, 1, 'stoneLit');
  p.px(mx, w - 13, 'glow');
  p.px(mx, w - 14, 'stone');
  p.px(mx, w - 15, 'stoneLit');
}

function ortakoyMosque(p, ox, ground) {
  p.rect(ox - 5, ground - 5, 5, 5, 'stoneLit');
  p.rect(ox, ground - 5, 6, 5, 'stone');
  [ox - 3, ox - 1, ox + 2].forEach((x) => { p.px(x, ground - 3, 'window'); p.px(x, ground - 2, 'window'); });
  const crown = dome(p, ox, ground - 5, 4, 1);
  p.px(ox, crown - 1, 'stone');
  [ox - 7, ox + 6].forEach((x) => {
    p.rect(x, ground - 13, 1, 13, 'stone');
    p.px(x - 1, ground - 9, 'stone');
    p.px(x + 1, ground - 9, 'stone');
    p.px(x, ground - 14, 'stoneLit');
  });
}

function cypress(p, x, ground) {
  [1, 1, 2, 2, 3, 3, 3, 3, 2].forEach((w, i) => p.rect(x - Math.floor(w / 2), ground - 9 + i, w, 1, 'cypress'));
}

function bridge(p, L) {
  const { bridgeStart: x0, bridgeEnd: x1, towerA, towerB, towerTop } = L;
  // side-span piers, anchor blocks, deck girder
  for (let x = x0 + 3; x < towerA - 1; x += 7) p.rect(x, deckY(L, x) + 2, 1, WATER - deckY(L, x) - 2, 'ink');
  for (let x = towerB + 5; x < x1 - 1; x += 7) p.rect(x, deckY(L, x) + 2, 1, WATER - deckY(L, x) - 2, 'ink');
  [x0, x1].forEach((x) => p.rect(x - 2, deckY(L, x) - 1, 4, WATER - deckY(L, x) + 1, 'ink'));
  for (let x = x0; x <= x1; x++) {
    p.px(x, deckY(L, x), 'ink');
    p.px(x, deckY(L, x) + 1, 'ink');
  }
  // towers down to their piers
  [towerA, towerB].forEach((t) => {
    p.rect(t, towerTop, 1, WATER - towerTop, 'lit');
    p.rect(t + 1, towerTop, 1, WATER - towerTop, 'ink');
    p.px(t - 1, towerTop, 'ink');
    p.px(t + 2, towerTop, 'ink');
    p.rect(t - 1, deckY(L, t) + 2, 4, 1, 'ink');
    p.rect(t - 1, WATER - 2, 4, 2, 'ink');
  });
  // main cable with the bridge's signature inclined (zigzag) hangers
  for (let x = towerA + 2; x < towerB; x++) p.px(x, cableY(L, x), 'ink');
  let dir = 1;
  p.ctx.save();
  p.ctx.globalAlpha = 0.55;
  for (let x = towerA + 4; x < towerB - 3; x += 3) {
    const to = x + dir;
    p.line(x, cableY(L, x) + 1, to, deckY(L, to) - 1, 'haze');
    dir = -dir;
  }
  p.ctx.restore();
  // side-span cables down to the anchorages
  for (let x = x0; x < towerA; x++) {
    const v = (towerA - x) / (towerA - x0);
    p.px(x, Math.round(towerTop + (deckY(L, x0) - 1 - towerTop) * v ** 0.75), 'ink');
  }
  for (let x = towerB + 2; x <= x1; x++) {
    const v = (x - towerB) / (x1 - towerB);
    p.px(x, Math.round(towerTop + (deckY(L, x1) - 1 - towerTop) * v ** 0.75), 'ink');
  }
}

/* ---------------------------------------------------------------- static layers */

function camlicaTower(p, x) {
  const base = WATER - 10;
  p.rect(x, base - 16, 2, 16, 'far');
  p.rect(x - 1, base - 13, 4, 3, 'far');
  p.rect(x - 2, base - 12, 6, 1, 'far');
  p.rect(x, base - 21, 1, 5, 'far');
}

function paintBack(p, cols, isDark) {
  for (let x = 0; x < cols; x++) {
    const u = x / cols;
    const bump = hash(Math.floor(x / 3) + 500) < 0.3 ? 1 : 0;
    const far = Math.round(7 + 2.5 * Math.sin(u * 7.3 + 1.1) + 1.5 * Math.sin(u * 19 + 0.4)) + bump;
    p.rect(x, WATER - far, 1, far, 'far');
    const block = Math.floor(x / 2);
    const near = Math.round(3.5 + 1.5 * Math.sin(u * 11 + 2.2) + Math.sin(u * 31)) + (hash(block + 900) < 0.35 ? 1 : 0);
    p.rect(x, WATER - near, 1, near, 'haze');
    if (hash(x * 5.3 + 7) < 0.18) p.px(x, WATER - far + 1 + Math.floor(hash(x) * 3), isDark ? 'glow' : 'haze');
    if (isDark && hash(x * 3.1) < 0.12) p.px(x, WATER - 1 - Math.floor(hash(x) * near), 'glow');
  }
  if (cols >= 240) camlicaTower(p, Math.round(cols * 0.8));
}

function paintFront(p, cols, isDark) {
  const L = layout(cols);
  const zones = [
    [L.mosque - 26, L.mosque + 26],
    [L.galata - 1, L.galata + 7],
    [L.ortakoy - 12, L.ortakoy + 11],
  ];
  if (L.smallMosque) zones.push([L.smallMosque - 14, L.smallMosque + 14]);
  const ground = (x) => WATER - 1 - hillHeight(x / cols);

  // hills and the waterfront quay
  for (let x = 0; x < cols; x++) {
    if (!isLand(x / cols)) continue;
    p.rect(x, ground(x), 1, WATER - ground(x), 'ink');
  }

  // houses: blocks of mixed width and height, windows lit at night
  let x = 0;
  let seed = 1;
  while (x < cols) {
    const w = 3 + Math.floor(hash(seed) * 4);
    const tall = hash(seed + 0.7) < 0.14;
    const h = tall ? 7 + Math.floor(hash(seed + 0.5) * 3) : 2 + Math.floor(hash(seed + 0.5) ** 1.6 * 5);
    const blocked = zones.some(([a, b]) => x + w > a && x < b);
    const land = isLand(x / cols) && isLand(Math.min(cols - 1, x + w) / cols);
    if (land && !blocked) {
      const g = ground(x + Math.floor(w / 2));
      const top = g - h;
      p.rect(x, top, w, h, hash(seed + 0.9) > 0.5 ? 'lit' : 'ink');
      p.px(x, top, 'ink');
      const roof = hash(seed + 0.3);
      if (roof < 0.35 && w >= 4) p.rect(x + 1, top - 1, w - 2, 1, 'ink');
      else if (roof > 0.85) p.px(x + w - 2, top - 1 - Math.floor(roof * 2), 'ink');
      for (let wy = top + 1; wy < g - 1; wy += 2) {
        for (let wx = x + 1; wx < x + w - 1; wx += 2) {
          const r = hash(wx * 7.7 + wy * 3.3);
          if (r < 0.55) p.px(wx, wy, isDark && r < 0.3 ? 'glow' : 'window');
        }
      }
    }
    x += w + (hash(seed + 0.2) < 0.25 ? 1 : 0);
    seed += 1;
  }

  // cypress trees around the mosques and on Galata hill
  [L.mosque - 24, L.mosque + 22, L.mosque + 25, L.galata - 9, L.galata + 12].forEach((cx) => {
    if (cx > 1 && cx < cols - 2 && isLand(cx / cols)) cypress(p, cx, ground(cx));
  });

  mosque(p, L.mosque, ground(L.mosque), true);
  if (L.smallMosque) mosque(p, L.smallMosque, ground(L.smallMosque), false);
  galataTower(p, L.galata, ground(L.galata + 3));
  bridge(p, L);
  ortakoyMosque(p, L.ortakoy, WATER - 1);
  maidensTower(p, L.maiden);
}

/** Renders the scenery that never moves: far hills behind, city and landmarks in front. */
export function renderLayers(cols, palette, isDark, makeCanvas) {
  const layer = (paint) => {
    const canvas = makeCanvas();
    canvas.width = cols;
    canvas.height = ROWS;
    const ctx = canvas.getContext('2d');
    if (ctx) paint(painter(ctx, palette), cols, isDark);
    return canvas;
  };
  return { back: layer(paintBack), front: layer(paintFront) };
}

/* ---------------------------------------------------------------- animated frame */

function ferry(p, fx) {
  const w = WATER;
  p.rect(fx + 1, w, 25, 2, 'hull');
  p.rect(fx + 3, w + 2, 21, 1, 'hull');
  p.rect(fx + 24, w - 1, 3, 1, 'hull');
  p.rect(fx + 2, w - 3, 22, 3, 'cabin');
  p.rect(fx + 5, w - 5, 16, 2, 'cabin');
  for (let i = 0; i < 10; i++) p.px(fx + 3 + i * 2, w - 2, 'accent');
  for (let i = 0; i < 7; i++) p.px(fx + 6 + i * 2, w - 4, 'accent');
  p.rect(fx + 2, w - 4, 3, 1, 'hull');
  p.rect(fx + 11, w - 9, 3, 4, 'cabin');
  p.rect(fx + 11, w - 9, 3, 1, 'hull');
  p.rect(fx + 11, w - 7, 3, 1, 'accent');
  p.px(fx + 22, w - 7, 'hull');
  p.px(fx + 22, w - 6, 'hull');
}

function fishingBoat(p, bx, bob) {
  const w = WATER + bob;
  p.rect(bx, w, 8, 1, 'hull');
  p.rect(bx + 1, w + 1, 6, 1, 'hull');
  p.px(bx - 1, w - 1, 'hull');
  p.rect(bx + 4, w - 2, 3, 2, 'cabin');
  p.px(bx + 5, w - 2, 'accent');
  p.rect(bx + 2, w - 5, 1, 5, 'hull');
}

function gull(p, x, y, flap) {
  p.px(x + 2, y + 1, 'ink');
  if (flap) {
    p.px(x, y, 'ink'); p.px(x + 1, y, 'ink'); p.px(x + 3, y, 'ink'); p.px(x + 4, y, 'ink');
  } else {
    p.px(x, y + 2, 'ink'); p.px(x + 1, y + 1, 'ink'); p.px(x + 3, y + 1, 'ink'); p.px(x + 4, y + 2, 'ink');
  }
}

/** Paints one frame: sky, scenery, rippling water with reflections, the ferry and gulls. */
export function paintFrame(ctx, layers, cols, tick, palette, isDark) {
  const p = painter(ctx, palette);
  const L = layout(cols);
  ctx.clearRect(0, 0, cols, ROWS);

  // stars, then sun or crescent moon
  if (isDark) {
    for (let i = 0; i < cols / 14; i++) {
      if ((tick + i * 7) % 23 === 0) continue;
      p.px(Math.floor(hash(i + 40) * cols), Math.floor(hash(i + 90) * 12), 'star');
    }
  }
  // light comes from the left, matching the lit faces of the buildings
  const ox = Math.max(10, Math.round(cols * 0.045));
  const oy = 6;
  for (let y = 0; y < 11; y++) {
    for (let x = ox - 4; x <= ox + 4; x++) {
      if (Math.hypot(x + 0.5 - ox, y + 0.5 - oy) > 3.3) continue;
      if (isDark && Math.hypot(x + 0.5 - ox - 1.5, y + 0.5 - oy + 1) < 2.9) continue;
      p.px(x, y, 'orb');
    }
  }

  ctx.drawImage(layers.back, 0, 0);

  // a distant ship on the horizon, behind the city
  const shipX = cols - Math.floor((tick * 0.05) % (cols + 30));
  p.rect(shipX, WATER - 2, 14, 2, 'haze');
  p.rect(shipX + 1, WATER - 4, 9, 2, 'haze');
  p.rect(shipX + 11, WATER - 5, 3, 3, 'haze');

  ctx.drawImage(layers.front, 0, 0);

  // water: base tint, then rippling reflections of everything above
  p.rect(0, WATER, cols, WATER_ROWS, 'sea');
  p.rect(0, WATER + 7, cols, WATER_ROWS - 7, 'seaDeep');
  for (let x = 0; x < cols; x += 2) p.px(x + (Math.floor(tick / 6) % 2), WATER + 6, 'seaDeep');
  ctx.save();
  for (let r = 0; r < WATER_ROWS; r++) {
    const wobble = r < 2 ? 0 : Math.round(Math.sin(r * 1.7 + tick * 0.45));
    ctx.globalAlpha = Math.max(0.06, 0.34 - r * 0.025);
    ctx.drawImage(ctx.canvas, 0, WATER - 1 - r, cols, 1, wobble, WATER + r, cols, 1);
  }
  ctx.restore();
  // glints: small and dense near the horizon, longer and sparser up close, drifting with the current
  for (let r = 1; r < WATER_ROWS; r++) {
    const drift = Math.floor(tick * (0.15 + r * 0.03));
    const density = 0.05 - r * 0.0028;
    for (let x = 0; x < cols; x++) {
      const cell = x + drift;
      if (hash(cell * 1.31 + r * 97.7) < density) p.rect(x, WATER + r, 1 + Math.floor(hash(cell + r) * (1 + r / 4)), 1, 'foam');
    }
  }
  // at night the floodlit monuments throw warm streaks across the water
  if (isDark) {
    const lit = [[L.mosque - 16, L.mosque + 16], [L.galata, L.galata + 7], [L.maiden - 4, L.maiden + 5], [L.ortakoy - 5, L.ortakoy + 6]];
    if (L.smallMosque) lit.push([L.smallMosque - 10, L.smallMosque + 10]);
    ctx.save();
    lit.forEach(([from, to]) => {
      for (let r = 1; r < WATER_ROWS; r++) {
        for (let x = from; x <= to; x++) {
          if (hash(x * 2.3 + r * 5.9 + Math.floor(tick / 3 + r)) < 0.22) {
            ctx.globalAlpha = 0.55 - r * 0.035;
            p.rect(x, WATER + r, 1 + (r > 5 ? 1 : 0), 1, 'stoneLit');
          }
        }
      }
    });
    ctx.restore();
  }

  // glitter path under the sun or moon
  ctx.save();
  for (let r = 1; r < WATER_ROWS; r++) {
    const half = 2 + Math.floor(r / 3);
    for (let x = ox - half; x <= ox + half; x++) {
      if (hash(x * 3.7 + r * 11 + Math.floor(tick / 2)) < 0.28) {
        ctx.globalAlpha = (isDark ? 0.4 : 0.6) - r * 0.03;
        p.px(x, WATER + r, isDark ? 'orb' : 'foam');
      }
    }
  }
  ctx.restore();

  // night lights on the bridge: cable lamps that slowly change colour, blinking tower beacons
  if (isDark) {
    for (let x = L.towerA + 3; x < L.towerB - 1; x += 3) {
      p.px(x, cableY(L, x), ((x + Math.floor(tick / 4)) % 9) < 5 ? 'accent' : 'glow');
    }
  }
  if (tick % 10 < 5) [L.towerA, L.towerB].forEach((t) => p.px(t, L.towerTop - 1, 'red'));

  // a small fishing boat heading the other way, bobbing on the swell
  const bx = cols - Math.floor((tick * 0.12) % (cols + 20)) + 5;
  fishingBoat(p, bx, Math.floor(tick / 5) % 2);
  p.px(bx + 8, WATER + 1, 'foam');
  p.px(bx + 10, WATER + 1, 'foam');

  // ferry (vapur) with its wake, crossing left to right
  const fx = Math.floor((tick * 0.35) % (cols + 60)) - 30;
  ctx.save();
  for (let i = 1; i < 22; i++) {
    ctx.globalAlpha = 0.9 - i * 0.04;
    p.px(fx - i, WATER + 1 + Math.floor(i / 8), 'foam');
    if (i > 4 && i % 2) p.px(fx - i, WATER + 2 + Math.floor(i / 6), 'foam');
  }
  ctx.globalAlpha = 0.35;
  p.rect(fx + 2, WATER + 3, 23, 1, 'hull');
  ctx.restore();
  ferry(p, fx);
  const puff = Math.floor(tick / 3) % 4;
  p.px(fx + 12 - puff, WATER - 11 - Math.floor(puff / 2), 'haze');
  p.px(fx + 10 - puff * 2, WATER - 12 - Math.floor(puff / 2), 'haze');

  // gulls: three trailing the ferry, two riding the wind higher up
  [[-6, 14, 0], [4, 17, 5], [-14, 19, 9]].forEach(([dx, y, o]) => {
    gull(p, fx + dx + Math.round(Math.sin((tick + o) * 0.3) * 2), WATER - y + Math.round(Math.sin((tick + o) * 0.2)), Math.floor((tick + o) / 3) % 2);
  });
  [[0.22, 6, 3], [0.47, 3, 11]].forEach(([at, y, o]) => {
    gull(p, Math.floor((at * cols + tick * 0.25) % cols), y, Math.floor((tick + o) / 4) % 2);
  });
}
