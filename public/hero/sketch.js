let kasumiLeft, kasumiRight, hokuriku, _2025, darumaLeft, darumaCenter, darumaRight, logo, date, hoku, riku, _2025Full, cover;

async function setup() {
  [kasumiLeft, kasumiRight, hokuriku, _2025, darumaLeft, darumaCenter, darumaRight, logo, date, hoku, riku, _2025Full, cover] = await Promise.all(["kasumi-left", "kasumi-right", "HOKURIKU", "2025", "daruma-left", "daruma-center", "daruma-right", "logo", "date", "HOKU", "RIKU", "2025-full", "cover",].map((path) => loadImage(`/hero/${path}.png`)));
  noLoop();
}

function draw() {
  const parent = document.getElementById("canvas");
  const canvas = createCanvas(parent.clientWidth, windowHeight / parent.clientWidth < 9 / 16 ? (parent.clientWidth * 9) / 16 : windowHeight / parent.clientWidth < 3 / 4 ? windowHeight : windowHeight / parent.clientWidth < 4 / 3 ? (parent.clientWidth * 3) / 4 : windowHeight / parent.clientWidth < 16 / 9 ? windowHeight : (windowWidth * 16) / 9);
  canvas.parent("canvas");

  background("#17a0fb");

  blendMode(BLEND);
  if (width / height < 3 / 4) {
    placeImage(kasumiLeft, [0, height - 30], ["LEFT", "BOTTOM"], 1.5);
    placeImage(kasumiRight, [width, 30], ["RIGHT", "TOP"], 1.5);
    const col = createCol(20, width, hoku, riku, _2025Full);
    placeImage(col, [0, height / 2 - 20], ["LEFT", "CENTER"], 1920 / col.width);
    placeImage(darumaLeft, [width / 5, height / 2], ["CENTER", "TOP"], 1.3);
    placeImage(darumaCenter, [width / 2, height / 2], ["CENTER", "TOP"], 1.3);
    placeImage(darumaRight, [(width * 4) / 5, height / 2], ["CENTER", "TOP"], 1.3);
    placeImage(logo, [width / 2, (height - col.height - 20) / 4], ["CENTER", "CENTER"], 1.5);
    placeImage(date, [width / 2, (height * 3 + col.height - 20) / 4], ["CENTER", "CENTER"], 2.5);
  } else {
    placeImage(kasumiLeft, [0, height - 50], ["LEFT", "BOTTOM"]);
    placeImage(kasumiRight, [width, 0], ["RIGHT", "TOP"]);
    const col = createCol(40, width, hokuriku, _2025);
    placeImage(col, [0, height / 2], ["LEFT", "CENTER"], 1920 / col.width);
    placeImage(darumaLeft, [(width * 3) / 11, height / 2 + 50], ["CENTER", "CENTER"]);
    placeImage(darumaCenter, [width / 2, height / 2 + 50], ["CENTER", "CENTER"]);
    placeImage(darumaRight, [(width * 8) / 11, height / 2 + 50], ["CENTER", "CENTER"]);
    placeImage(logo, [width / 2, (height - col.height) / 4], ["CENTER", "CENTER"]);
    placeImage(date, [width / 2, (height * 3 + col.height) / 4], ["CENTER", "CENTER"]);
  }

  blendMode(BURN);
  image(cover, 0, 0, width, height, 0, 0, cover.width, cover.height, COVER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const calcSize = (image, mag = 1) => {
  return [((image.width * width) / 1920) * mag, (width / 1920) * mag * image.height];
};

const placeImage = (_image, anchor, align, mag = 1) => {
  const [w, h] = calcSize(_image, mag);
  const x = align[0] === "LEFT" ? anchor[0] : align[0] === "RIGHT" ? anchor[0] - w : anchor[0] - w / 2;
  const y = align[1] === "TOP" ? anchor[1] : align[1] === "BOTTOM" ? anchor[1] - h : anchor[1] - h / 2;
  image(_image, x, y, w, h);
};

const createCol = (gap, width, ...images) => {
  pg = createGraphics(width, images.reduce((acc, cur) => acc + (width / cur.width) * cur.height, 0) + gap * (images.length - 1));
  let y = 0;
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const h = (width / img.width) * img.height;
    pg.image(img, 0, y, width, h);
    y += h + gap;
  }

  return pg;
};
