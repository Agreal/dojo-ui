setTimeout(main);

function main() {
  const openBtn = document.querySelector('#openBtn');
  const text = document.querySelector('#text');
  const input = document.querySelector('#input');
  const popover = document.querySelector('#popover');
  const okBtn = document.querySelector('#okBtn');
  const closeBtn = document.querySelector('#closeBtn');

  openBtn.addEventListener('click', openPopover, false);
  okBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    text.innerText = input.value;
  }, false);

  function openPopover(e) {
    e.stopPropagation();
    popover.classList.remove('hidden');
    closeBtn.addEventListener('click', close, false);
    document.addEventListener('click', closePopover, false)
  }

  function close(e) {
    e.stopPropagation();
    popover.classList.add('hidden');
    document.removeEventListener('click', closePopover, false)
  }

  function closePopover(e) {
    if (popover.contains(e.target)) {
      console.log('clicked inside');
      return;
    }
    console.log('clicked outside');
    popover.classList.add('hidden');
    document.removeEventListener('click', closePopover, false)
  }
}
