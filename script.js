let data = [
  { name: "九如鄉", value: 10 },
  { name: "三地門鄉", value: 11 },
  { name: "內埔鄉", value: 29 },
  { name: "竹田鄉", value: 7 },
  { name: "牡丹鄉", value: 7 },
  { name: "車城鄉", value: 3 },
  { name: "里港鄉", value: 12 },
  { name: "佳冬鄉", value: 11 },
  { name: "來義鄉", value: 11 },
  { name: "東港鎮", value: 22 + 23 }, // 合併重複
  { name: "枋山鄉", value: 5 },
  { name: "枋寮鄉", value: 15 },
  { name: "林邊鄉", value: 12 },
  { name: "長治鄉", value: 16 },
  { name: "南州鄉", value: 7 },
  { name: "屏東市", value: 86 },
  { name: "恆春鎮", value: 17 },
  { name: "春日鄉", value: 6 },
  { name: "崁頂鄉", value: 5 },
  { name: "泰武鄉", value: 7 },
  { name: "琉球鄉", value: 9 },
  { name: "高樹鄉", value: 14 },
  { name: "新埤鄉", value: 6 },
  { name: "新園鄉", value: 19 },
  { name: "獅子鄉", value: 8 }
];

let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  noStroke();

  for (let i = 0; i < data.length; i++) {
    let angle = map(i, 0, data.length, 0, TWO_PI);
    let radius = min(width, height) / 3;
    let x = width / 2 + cos(angle) * radius;
    let y = height / 2 + sin(angle) * radius;
    let size = map(data[i].value, 3, 86, 20, 100);
    circles.push({
      x: x,
      y: y,
      r: size / 2,
      name: data[i].name,
      value: data[i].value
    });
  }
}

function draw() {
  background(30);
  fill(255);

  for (let c of circles) {
    fill(100, 200, 255, 180);
    ellipse(c.x, c.y, c.r * 2);
    if (dist(mouseX, mouseY, c.x, c.y) < c.r) {
      fill(255);
      textSize(18);
      text(`${c.name}\n${c.value}`, c.x, c.y);
    }
  }
}
