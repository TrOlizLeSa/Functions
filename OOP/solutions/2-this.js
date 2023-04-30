// BEGIN
const make = (numer = 0, denom = 1) => {
    const rational = {
      setNumer(newNumer) {
        this.numer = newNumer;
      },
      setDenom(newDenom) {
        this.denom = newDenom;
      },
      getNumer() {
        return this.numer;
      },
      getDenom() {
        return this.denom;
      },
      toString() {
        return `${this.numer}/${this.denom}`;
      },
      add(otherRational) {
        const newNumer = this.numer * otherRational.denom + this.denom * otherRational.numer;
        const newDenom = this.denom * otherRational.denom;
        return make(newNumer, newDenom);
      },
    };
  
    rational.setNumer(numer);
    rational.setDenom(denom);
  
    return rational;
  };
  
  export default make;
  
// END