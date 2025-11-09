let kasumiLeft;
let kasumiRight;
let hokuriku;
let _2025;
let darumaLeft;
let darumaCenter;
let darumaRight;
let logo;
let date;
let hoku;
let riku;
let _2025Full;
let cover;

async function setup() {
  kasumiLeft = await loadImage("/hero/kasumi-left.png");
  kasumiRight = await loadImage("/hero/kasumi-right.png");
  hokuriku = await loadImage("/hero/hokuriku.png");
  _2025 = await loadImage("/hero/2025.png");
  darumaLeft = await loadImage("/hero/daruma-left.png");
  darumaCenter = await loadImage("/hero/daruma-center.png");
  darumaRight = await loadImage("/hero/daruma-right.png");
  logo = await loadImage("/hero/logo.png");
  date = await loadImage("/hero/date.png");
  hoku = await loadImage("/hero/hoku.png");
  riku = await loadImage("/hero/riku.png");
  _2025Full = await loadImage("/hero/2025-full.png");
  cover = await loadImage("/hero/cover.png");

  noLoop();
}

function draw() {
  const parent = document.getElementById("canvas");
  console.log(parent.clientWidth);
  let canvas;
  if (windowHeight / parent.clientWidth < 9 / 16) {
    canvas = createCanvas(parent.clientWidth, (parent.clientWidth * 9) / 16);
  } else if (windowHeight / parent.clientWidth < 3 / 4) {
    canvas = createCanvas(parent.clientWidth, windowHeight);
  } else if (windowHeight / parent.clientWidth < 4 / 3) {
    canvas = createCanvas(parent.clientWidth, (parent.clientWidth * 3) / 4);
  } else if (windowHeight / parent.clientWidth < 16 / 9) {
    canvas = createCanvas(parent.clientWidth, windowHeight);
  } else {
    canvas = createCanvas(parent.clientWidth, (windowWidth * 16) / 9);
  }
  canvas.parent("canvas");
  background("#17a0fb");
  blendMode(BLEND);
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      kasumiLeft,
      0,
      height - (((kasumiLeft.width * width) / 1920) * kasumiLeft.height) / kasumiLeft.width - 50,
      (kasumiLeft.width * width) / 1920,
      (((kasumiLeft.width * width) / 1920) * kasumiLeft.height) / kasumiLeft.width,
    );
  } else {
    image(
      kasumiLeft,
      0,
      height -
        (((kasumiLeft.width * width) / 1920) * 1.5 * kasumiLeft.height) / kasumiLeft.width -
        30,
      ((kasumiLeft.width * width) / 1920) * 1.5,
      (((kasumiLeft.width * width) / 1920) * 1.5 * kasumiLeft.height) / kasumiLeft.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      kasumiRight,
      width - (kasumiRight.width * width) / 1920,
      0,
      (kasumiRight.width * width) / 1920,
      (((kasumiRight.width * width) / 1920) * kasumiRight.height) / kasumiRight.width,
    );
  } else {
    image(
      kasumiRight,
      width - ((kasumiRight.width * width) / 1920) * 1.5,
      0,
      ((kasumiRight.width * width) / 1920) * 1.5,
      (((kasumiRight.width * width) / 1920) * 1.5 * kasumiRight.height) / kasumiRight.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      hokuriku,
      0,
      height / 2 - (hokuriku.height * width) / hokuriku.width - 20,
      width,
      (hokuriku.height * width) / hokuriku.width,
    );
  } else {
    image(
      hoku,
      0,
      height / 2 - (riku.height * width) / riku.width / 2 - (hoku.height * width) / hoku.width - 20,
      width,
      (hoku.height * width) / hoku.width,
    );
    image(
      riku,
      0,
      height / 2 - (riku.height * width) / riku.width / 2,
      width,
      (riku.height * width) / riku.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(_2025, 0, height / 2 + 20, width, (_2025.height * width) / _2025.width);
  } else {
    image(
      _2025Full,
      0,
      height / 2 - (riku.height * width) / riku.width / 2 + (riku.height * width) / riku.width + 20,
      width,
      (_2025Full.height * width) / _2025Full.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      darumaLeft,
      width / 2 - ((darumaLeft.width * width) / 1920) * 1.5,
      height / 2 -
        (((darumaLeft.width * width) / 1920) * darumaLeft.height) / darumaLeft.width / 2 +
        50,
      (darumaLeft.width * width) / 1920,
      (((darumaLeft.width * width) / 1920) * darumaLeft.height) / darumaLeft.width,
    );
  } else {
    image(
      darumaLeft,
      width / 2 - ((darumaLeft.width * width) / 1920) * 1.3 * 1.5,
      height / 2,
      ((darumaLeft.width * width) / 1920) * 1.3,
      (((darumaLeft.width * width) / 1920) * 1.3 * darumaLeft.height) / darumaLeft.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      darumaCenter,
      width / 2 - (darumaCenter.width * width) / 1920 / 2,
      height / 2 -
        (((darumaCenter.width * width) / 1920) * darumaCenter.height) / darumaCenter.width / 2 +
        50,
      (darumaCenter.width * width) / 1920,
      (((darumaCenter.width * width) / 1920) * darumaCenter.height) / darumaCenter.width,
    );
  } else {
    image(
      darumaCenter,
      width / 2 - (((darumaCenter.width * width) / 1920) * 1.3) / 2,
      height / 2,
      ((darumaCenter.width * width) / 1920) * 1.3,
      (((darumaCenter.width * width) / 1920) * 1.3 * darumaCenter.height) / darumaCenter.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      darumaRight,
      width / 2 + ((darumaRight.width * width) / 1920) * 0.5,
      height / 2 -
        (((darumaRight.width * width) / 1920) * darumaRight.height) / darumaRight.width / 2 +
        50,
      (darumaRight.width * width) / 1920,
      (((darumaRight.width * width) / 1920) * darumaRight.height) / darumaRight.width,
    );
  } else {
    image(
      darumaRight,
      width / 2 + ((darumaRight.width * width) / 1920) * 1.3 * 0.5,
      height / 2,
      ((darumaRight.width * width) / 1920) * 1.3,
      (((darumaRight.width * width) / 1920) * 1.3 * darumaRight.height) / darumaRight.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      logo,
      width / 2 - (logo.width * width) / 1920 / 2,
      (height / 2 - (hokuriku.height * width) / hokuriku.width - 20) / 2 -
        (((logo.width * width) / 1920) * logo.height) / logo.width / 2,
      (logo.width * width) / 1920,
      (((logo.width * width) / 1920) * logo.height) / logo.width,
    );
  } else {
    image(
      logo,
      width / 2 - (((logo.width * width) / 1920) * 1.5) / 2,
      (height / 2 -
        (riku.height * width) / riku.width / 2 -
        (hoku.height * width) / hoku.width -
        20) /
        2 -
        (((logo.width * width) / 1920) * 1.5 * logo.height) / logo.width / 2,
      ((logo.width * width) / 1920) * 1.5,
      (((logo.width * width) / 1920) * 1.5 * logo.height) / logo.width,
    );
  }
  if (windowWidth / windowHeight > 3 / 4) {
    image(
      date,
      width / 2 - (date.width * width) / 1920 / 2,
      (height / 2 + 20 + (_2025.height * width) / _2025.width + height) / 2 -
        (((date.width * width) / 1920) * date.height) / date.width / 2,
      (date.width * width) / 1920,
      (((date.width * width) / 1920) * date.height) / date.width,
    );
  } else {
    image(
      date,
      width / 2 - (((date.width * width) / 1920) * 2.5) / 2,
      (height / 2 -
        (riku.height * width) / riku.width / 2 +
        (riku.height * width) / riku.width +
        20 +
        (_2025Full.height * width) / _2025Full.width +
        height) /
        2 -
        (((date.width * width) / 1920) * 2.5 * date.height) / date.width / 2,
      ((date.width * width) / 1920) * 2.5,
      (((date.width * width) / 1920) * 2.5 * date.height) / date.width,
    );
  }

  blendMode(BURN);
  image(cover, 0, 0, width, height, 0, 0, cover.width, cover.height, COVER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
