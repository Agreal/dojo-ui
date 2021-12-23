const btn = document.querySelector('#share')
btn.addEventListener('click', function() {
  gtag('event', 'social', {
    socialNetwork: 'Twitter',
    socialAction: 'Share',
    socialTarget: 'https://agreal.github.io/dojo-ui/components/ga/index.html'
  });
})
