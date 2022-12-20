contents.addEventListener("click", function(event) {
  function handleLink(href) {
    let isLeaving = confirm(`Перейти на ${href}?`);
    if (!isLeaving) event.preventDefault();
  }

  let target = event.target.closest('a');

  if (target && contents.contains(target)) {
    handleLink(target.getAttribute('href'))
  }
});