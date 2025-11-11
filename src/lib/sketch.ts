import p5 from "p5";

const sketch = (p: p5) => {
  const parent = document.getElementById("canvas") as HTMLDivElement;

  let kasumiLeft: p5.Image,
    kasumiRight: p5.Image,
    hokuriku: p5.Image,
    _2025: p5.Image,
    darumaLeft: p5.Image,
    darumaCenter: p5.Image,
    darumaRight: p5.Image,
    logo: p5.Image,
    date: p5.Image,
    hoku: p5.Image,
    riku: p5.Image,
    _2025Full: p5.Image,
    cover: p5.Image;

  p.setup = async () => {
    [
      kasumiLeft,
      kasumiRight,
      hokuriku,
      _2025,
      darumaLeft,
      darumaCenter,
      darumaRight,
      logo,
      date,
      hoku,
      riku,
      _2025Full,
      cover,
    ] = await Promise.all(
      [
        "kasumi-left",
        "kasumi-right",
        "HOKURIKU",
        "2025",
        "daruma-left",
        "daruma-center",
        "daruma-right",
        "logo",
        "date",
        "HOKU",
        "RIKU",
        "2025-full",
        "cover",
      ].map((path) => p.loadImage(`/hero/${path}.png`)),
    );

    const canvas = p.createCanvas(
      parent.clientWidth,
      p.windowHeight / parent.clientWidth < 9 / 16
        ? (parent.clientWidth * 9) / 16
        : p.windowHeight / parent.clientWidth < 3 / 4
          ? p.windowHeight
          : p.windowHeight / parent.clientWidth < 4 / 3
            ? (parent.clientWidth * 3) / 4
            : p.windowHeight / parent.clientWidth < 16 / 9
              ? p.windowHeight
              : (p.windowWidth * 16) / 9,
    );
    canvas.parent(parent);
    p.noLoop();
  };

  p.draw = () => {
    p.background("#17a0fb");

    p.blendMode(p.BLEND);
    if (p.width / p.height < 3 / 4) {
      placeImage(kasumiLeft, [0, p.height - 30], ["LEFT", "BOTTOM"], 1.5);
      placeImage(kasumiRight, [p.width, 30], ["RIGHT", "TOP"], 1.5);
      const col = createCol(20, p.width, hoku, riku, _2025Full);
      placeImage(col, [0, p.height / 2 - 20], ["LEFT", "CENTER"], 1920 / col.width);
      placeImage(darumaLeft, [p.width / 5, p.height / 2], ["CENTER", "TOP"], 1.3);
      placeImage(darumaCenter, [p.width / 2, p.height / 2], ["CENTER", "TOP"], 1.3);
      placeImage(darumaRight, [(p.width * 4) / 5, p.height / 2], ["CENTER", "TOP"], 1.3);
      placeImage(logo, [p.width / 2, (p.height - col.height - 20) / 4], ["CENTER", "CENTER"], 1.5);
      placeImage(
        date,
        [p.width / 2, (p.height * 3 + col.height - 20) / 4],
        ["CENTER", "CENTER"],
        2.5,
      );
      col.remove();
    } else {
      placeImage(kasumiLeft, [0, p.height - 50], ["LEFT", "BOTTOM"]);
      placeImage(kasumiRight, [p.width, 0], ["RIGHT", "TOP"]);
      const col = createCol(40, p.width, hokuriku, _2025);
      placeImage(col, [0, p.height / 2], ["LEFT", "CENTER"], 1920 / col.width);
      placeImage(darumaLeft, [(p.width * 3) / 11, p.height / 2 + 50], ["CENTER", "CENTER"]);
      placeImage(darumaCenter, [p.width / 2, p.height / 2 + 50], ["CENTER", "CENTER"]);
      placeImage(darumaRight, [(p.width * 8) / 11, p.height / 2 + 50], ["CENTER", "CENTER"]);
      placeImage(logo, [p.width / 2, (p.height - col.height) / 4], ["CENTER", "CENTER"]);
      placeImage(date, [p.width / 2, (p.height * 3 + col.height) / 4], ["CENTER", "CENTER"]);
      col.remove();
    }

    p.blendMode(p.BURN);
    p.image(cover, 0, 0, p.width, p.height, 0, 0, cover.width, cover.height, p.COVER);
  };

  p.windowResized = () => {
    p.resizeCanvas(
      parent.clientWidth,
      p.windowHeight / parent.clientWidth < 9 / 16
        ? (parent.clientWidth * 9) / 16
        : p.windowHeight / parent.clientWidth < 3 / 4
          ? p.windowHeight
          : p.windowHeight / parent.clientWidth < 4 / 3
            ? (parent.clientWidth * 3) / 4
            : p.windowHeight / parent.clientWidth < 16 / 9
              ? p.windowHeight
              : (p.windowWidth * 16) / 9,
    );
  };

  const calcSize = (image: p5.Image | p5.Graphics, mag = 1) => {
    return [((image.width * p.width) / 1920) * mag, (p.width / 1920) * mag * image.height];
  };

  const placeImage = (
    _image: p5.Image | p5.Graphics,
    anchor: [number, number],
    align: ["LEFT" | "CENTER" | "RIGHT", "TOP" | "CENTER" | "BOTTOM"],
    mag = 1,
  ) => {
    const [w, h] = calcSize(_image, mag);
    const x =
      align[0] === "LEFT" ? anchor[0] : align[0] === "RIGHT" ? anchor[0] - w : anchor[0] - w / 2;
    const y =
      align[1] === "TOP" ? anchor[1] : align[1] === "BOTTOM" ? anchor[1] - h : anchor[1] - h / 2;
    p.image(_image, x, y, w, h);
  };

  const createCol = (gap: number, width: number, ...images: p5.Image[]) => {
    const pg = p.createGraphics(
      width,
      images.reduce((acc, cur) => acc + (width / cur.width) * cur.height, 0) +
        gap * (images.length - 1),
    );
    let y = 0;
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const h = (width / img.width) * img.height;
      pg.image(img, 0, y, width, h);
      y += h + gap;
    }

    return pg;
  };
};

export default sketch;
