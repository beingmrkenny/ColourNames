// REVIEW: is this how extends works? I forget ...
class ColourNames extends Color {

    getHueName () {
        var name;
        console.log(this.hue);
        switch (true) {
            case this._between(this.hue, 0, 12)    : name = 'red'; break;
            case this._between(this.hue, 13, 18)   : name = 'red-orange'; break;
            case this._between(this.hue, 19, 26)   : name = 'orange'; break;
            case this._between(this.hue, 27, 33)   : name = 'orange-yellow'; break;
            case this._between(this.hue, 34, 61)   : name = 'yellow'; break;
            case this._between(this.hue, 62, 68)   : name = 'yellow-green'; break;
            case this._between(this.hue, 69, 85)   : name = 'green-yellow'; break;
            case this._between(this.hue, 86, 140)  : name = 'green'; break;
            case this._between(this.hue, 141, 163) : name = 'blue-green'; break;
            case this._between(this.hue, 164, 173) : name = 'cyan'; break;
            case this._between(this.hue, 174, 186) : name = 'sky blue'; break;
            case this._between(this.hue, 187, 261) : name = 'blue'; break;
            case this._between(this.hue, 262, 273) : name = 'violet'; break;
            case this._between(this.hue, 274, 285) : name = 'mauve'; break;
            case this._between(this.hue, 286, 339) : name = 'magenta'; break;
            case this._between(this.hue, 340, 355) : name = 'camelia'; break;
            case this._between(this.hue, 356, 360) : name = 'red'; break;
        }
        return name;
    }

    _between (x, a, b) {
        if (x >= a && x <= b) {
            return true;
        } else {
            return false;
        }
    }

}

// https://www.wikiwand.com/en/Colorfulness
