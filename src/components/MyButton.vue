<template>
    <a type="button" class="knopka">{{txt}}</a>
</template>
<script>
export default{
    props: ['txt']
}
</script>

<style>
a.knopka {
  color: #fff; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background: rgb(13, 22, 155); /* фон кнопки */
  padding: 0.5em 1em; /* отступ от текста */
  outline: none; /* убирать контур в Mozilla */
}
a.knopka:hover {
  background: rgb(46, 76, 247);
} /* при наведении курсора мышки */
a.knopka:active {
  background: rgb(13, 22, 155);
} /* при нажатии */
</style>
