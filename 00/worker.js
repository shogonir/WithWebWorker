self.addEventListener(
  'message',
  function (e) {
    console.log('worker.js::addEventListener()');
    self.postMessage(e.data);
  },
  false
);
