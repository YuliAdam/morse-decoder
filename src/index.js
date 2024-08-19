const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let arrMorse = [];
    for (let i=0; i< expr.length ; i+=10){
        arrMorse.push(expr.substring(i,i+10));
    }

    for (let i =0; i< arrMorse.length; i+=1){
        let charDotDashes = '';
        
        for (let j = 0; j < 10 ; j+=2){
            if (arrMorse[i][j] === '1' && arrMorse[i][j+1] === '0'){
               charDotDashes = charDotDashes + '.'; 
            }
            if (arrMorse[i][j] === '1' && arrMorse[i][j+1] === '1'){
                charDotDashes = charDotDashes + '-'; 
             }
            if (arrMorse[i][j] === '*'){
                charDotDashes = charDotDashes + '**'; 
             }
        }

        arrMorse.splice(i, 1, charDotDashes);
    }
    let result='';
    for(let i =0; i< arrMorse.length;i+=1){
        for(let key in MORSE_TABLE){
            if (arrMorse[i] === key){
                result= result + MORSE_TABLE[key];
            }
        }
    }

    return result;
}

module.exports = {
    decode
}