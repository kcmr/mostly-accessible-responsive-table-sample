(function(d) {
  'use strict';

  const ths = [...d.querySelectorAll('thead th')];
  const fakeThs = [...d.querySelectorAll('[data-th]')];
  const table = d.querySelector('table');

  fakeThs.forEach((item, i) => {
    item.innerHTML = ths[i].innerHTML;
    item.setAttribute('aria-level', 3);
  });

  const setTableRole = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      table.setAttribute('role', 'none');
    } else {
      table.removeAttribute('role');
    }
  };

  setTableRole();
  window.addEventListener('resize', setTableRole);
}(document));