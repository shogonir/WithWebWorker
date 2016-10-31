self.addEventListener(
  'message',
  function (e) {
    var data = e.data;
    if (data.lang === 'c' && data.statement === 'switch') {
      console.log('Do not forget "break" statement.');
    } else {
      console.log('Unexpected lang and statement');
    }
  },
  false
);
