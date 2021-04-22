$('.palceholder').click(function () {
  $(this).siblings('input').focus();
});
$('.form-control').focus(function () {
  $(this).siblings('.palceholder').hide();
});
$('.form-control').blur(function () {
  var $this = $(this);
  if ($this.val().length == 0) {
    $(this).siblings('.palceholder').show();
    $('.type__of__service__text__content').show();
  }
});
$('.form-control').blur();

const currency = document.querySelectorAll('.currency-point');
const result = document.getElementById('result-total');

for (let i = 0; i < currency.length; i++) {
  currency[i].addEventListener('click', toggleClassCurrency);
}

function toggleClassCurrency(e) {
  const target = e.target;
  currency.forEach((element) => {
    element.classList.remove('currency-ative');
  });
  target.classList.add('currency-ative');
}

window.document.addEventListener('scroll', (e) => {
  const header = document.getElementById('fixed-header');
  if (pageYOffset >= 300) {
    header.style.backgroundColor = '#3d3d3b';
  } else {
    header.style.backgroundColor = '#242635';
  }
});

const columns = document.querySelectorAll('.label__line_set');
for (let i = 0; i < columns.length; i++) {
  columns[i].addEventListener('click', toggleClassColumn);
}

function toggleClassColumn(e) {
  const count = 100;
  const target = e.target;
  target.classList.toggle('active-column');
  const active = document.getElementsByClassName('active-column');
  result.innerHTML = active.length * 100;
}
