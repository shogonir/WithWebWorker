function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

self.addEventListener(
  'message',
  async function (e) {
    var json = {};
    
    for ( var i=0; i <= 6; i ++ ) {
      await sleep(1000);
      json[i] = i * i;
      self.postMessage(json);
    }
  },
  false
);
