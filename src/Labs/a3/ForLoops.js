function ForLoops() {
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
    return (
      <div>
        <h1>Loop through arrays</h1>
        <h2>stringArray2 = {stringArray2}</h2>
      </div>
    );  
}

export default ForLoops;