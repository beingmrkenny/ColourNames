// REVIEW: is this how extends works? I forget ...
class ColourNames extends Color {

    getHueName () {
        var name;
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
            case this._between(this.hue, 262, 285) : name = 'purple'; break;
            // case this._between(this.hue, 262, 273) : name = 'violet'; break;
            // case this._between(this.hue, 274, 285) : name = 'mauve'; break;
            case this._between(this.hue, 286, 339) : name = 'magenta'; break;
            case this._between(this.hue, 340, 355) : name = 'camelia'; break; // FIXME wtf is this
            case this._between(this.hue, 356, 360) : name = 'red'; break;

            // pink
            // beige
            // maroon
            // indigo
            // teal
        }
        return name;
    }

    // high sat only
    getDarknessModifier () {

        // high to low
        switch (this.brightness) {
            // ''
            // ''
            // dark
            // very dark
            // black
        }

    }

    // high brightness only
    getColourfulnessModifier () {

        // high to low
        switch (this.saturation) {
            // vivid
            // ''
            // pastel
            // pale
            // very pale
            // <color>-white
            // white
            // cream
            // off-white
        }

    }

    /*

        for each hue, make a rough graph of brightness v saturation, and what happens to the colour
        try and quantify this to see if there's a similarity
        indeed, you bastard, make a grid of "pixels" with this kind of shit already done in it, what a cunting great idea

    */

    /*
        high brightness
        0 - vv low sat            v. low sat                                              higher sat
        white/grey     <color>-grey       pale <color>       pastel

        mid brightness - 75%
        grey         <color>-grey           pastel                         '' <color>


        high - see colourfuleness above
    */


    /*

                            0 brightness                                                100 brightness

    0 saturation             black                     gray

                                        very dark

                                                   dark pastel






                                        dark


    100 saturation                                                                       white

    */


    // getQualifier () {
    //
    // }

    _between (x, a, b) {
        if (x >= a && x <= b) {
            return true;
        } else {
            return false;
        }
    }

}

// https://www.wikiwand.com/en/Colorfulness
