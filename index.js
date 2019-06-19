(global => {
  let intervalId = null, x = 1, up = !1;

  global.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 32) {
      intervalId ? stop() : start();
    }
  };

  function consoleDisco() {
    (x === 70 || x === 1) && (up = !up),
    up ? x++ : x--,
    console.log(`%c${`▇`.repeat(x)}`, `color: hsl(${2 * x}, 100%, 50%)`);
  }

  function start() {
    intervalId = setInterval(consoleDisco);
  }

  function stop() {
    clearInterval(intervalId);
    intervalId = null, x = 1, up = !1;
  }
})(window);
