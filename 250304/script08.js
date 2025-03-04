const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stop");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
displayLetter();
