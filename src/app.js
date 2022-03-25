import tpl from './test.tpl'

const app = document.querySelector('#app');
app.innerHTML = tpl({
  name: 'test',
  joke: `如果有来生，要做一只鸟，飞越永恒，没有迷途的苦恼。东方有火红的希望南方有温暖的巢床，向西逐退残阳，向北唤醒芬芳。如果有来生，希望每次相遇，都能化为永恒。`
})

