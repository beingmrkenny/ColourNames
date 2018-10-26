class ColourNames {

    constructor (hex) {
        this.hex = hex;
        this.h = this.getHue();
        this.s = this.getSaturation();
        this.l = this.getLightness();
    }

    getHSL () {
        // poo
    }

    getHueName () {
        var name;
        switch (true) {
            case this.between(this.hue, 0, 12)    : name = 'red'; break;
            case this.between(this.hue, 13, 18)   : name = 'red-orange'; break;
            case this.between(this.hue, 19, 26)   : name = 'orange'; break;
            case this.between(this.hue, 27, 33)   : name = 'orange-yellow'; break;
            case this.between(this.hue, 34, 61)   : name = 'yellow'; break;
            case this.between(this.hue, 62, 68)   : name = 'yellow-green'; break;
            case this.between(this.hue, 69, 85)   : name = 'green-yellow'; break;
            case this.between(this.hue, 86, 140)  : name = 'green'; break;
            case this.between(this.hue, 141, 163) : name = 'blue-green'; break;
            case this.between(this.hue, 164, 173) : name = 'cyan'; break;
            case this.between(this.hue, 178, 186) : name = 'sky blue'; break;
            case this.between(this.hue, 187, 261) : name = 'blue'; break;
            case this.between(this.hue, 262, 273) : name = 'violet'; break;
            case this.between(this.hue, 274, 285) : name = 'mauve'; break;
            case this.between(this.hue, 286, 339) : name = 'magenta'; break;
            case this.between(this.hue, 340, 355) : name = 'camelia'; break;
            case this.between(this.hue, 356, 360) : name = 'red'; break;
        }
    }

    between (x, a, b) {
        if (x >= a && x <= b) {
            return true;
        } else {
            return false;
        }
    }

}
