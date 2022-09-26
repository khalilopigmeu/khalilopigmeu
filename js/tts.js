app["tts"] = new Vue({
    el: '#tts',
    data: {
        url: "https://voicerss-text-to-speech.p.rapidapi.com/?key=b7f0e82afe4641f7b313b28f83d2b264",
        head: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "d7a4f6369emsh898ea3e062a16f9p16f422jsn72bccf6a7b4e",
            "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com"
        },
        voice: null,
        codec: null,
        text: null,
        result: null,
    },
    methods: {
        tts: function () {
            data = {
                "src": this.text,
                "hl": "pt-br",
                "r": "0",
                "v": this.voice,
                "c": this.codec,
                "f": "8khz_16bit_stereo",
                "b64": true
            };
            document.getElementById("audioplayer").src = postCross(this.url, data, this.head);
        },
        fixedCharCodeAt: function (str, idx) {
            idx = idx || 0;
            var code = str.charCodeAt(idx);
            var hi, low;
            if (0xD800 <= code && code <= 0xDBFF) {
                hi = code;
                low = str.charCodeAt(idx + 1);
                if (isNaN(low)) {
                    throw "isNAN";
                }
                return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
            }
            if (0xDC00 <= code && code <= 0xDFFF) {
                return false;
            }
            return code;
        },
        countUtf8: function () {
            var str = this.text;
            this.result = 0;
            for (var n = 0; n < str.length; n++) {
                var charCode = this.fixedCharCodeAt(str, n);
                if (typeof charCode === "number") {
                    if (charCode < 128) {
                        this.result += 1;
                    } else if (charCode < 2048) {
                        this.result += 2;
                    } else if (charCode < 65536) {
                        this.result += 3;
                    } else if (charCode < 2097152) {
                        this.result += 4;
                    } else if (charCode < 67108864) {
                        this.result += 5;
                    } else {
                        this.result += 6;
                    }
                }
            }
        },
    }
});
