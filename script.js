/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.quangDuong = 0;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.diChuyen = function () {
        this.quangDuong += 50;
    };
    this.getQuangDuong = function () {
        return this.quangDuong;
    };
     this.setQuangDuong = function () {
         this.quangDuong = 0;
     }
    this.moveRight = function () {
        this.image = 'Car-Right-Red-icon.png';
         this.left += 50;
        hero.diChuyen();
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.image = 'Car-Left-Red-icon.png';
        this.left -= 50;
        hero.diChuyen();
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.image = 'Car-Top-down-icon.png';
        this.top += 50;
        hero.diChuyen();
        console.log('ok: ' + this.top);
    };
    this.moveUp = function () {
        this.image = 'Car-Top-Red-icon.png';
        this.top -= 50;
        hero.diChuyen();
        console.log('ok: ' + this.top);
    }
}

let hero = new Hero('Car-Right-Red-icon.png', 50, 50, 50);

function start() {
    if (hero.getQuangDuong() < 1300) {
        hero.moveRight();
    } else if (hero.getQuangDuong()<1800) {
        hero.moveDown();
    } else if (hero.getQuangDuong()<3100){
        hero.moveLeft();
    } else if (hero.getQuangDuong()<3600){
        hero.moveUp();
    } else {
        hero.setQuangDuong();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50);
}

start();