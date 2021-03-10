module.exports = function toReadable (number) {
    let digits = {
        '1': 'one', 
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred'
      };
      let numString = '';
      if (number === 0) return 'zero';
      else {
        if (number > 99){
            numString += digits[Math.floor(number/100).toString()] + ' ' + digits['100'];
            number = number % 100;
            if (number) numString += ' ';
          }
        if (number > 20){
            numString += digits[Math.floor(number - number % 10).toString()];
            number = number % 10;
        if (number) numString += ' ';
        
        }
        if (number) numString += digits[number.toString()];
            
            
      }
      
      
      return numString;
  
}
