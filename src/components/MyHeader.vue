<template>
  <header>
    <div class="menu">
      <ul>
        <li>
          <div class="dateHeader">{{ res }}</div>
        </li>
        
        <li><router-link to="/accounts">Accounts</router-link></li>
        <li><router-link to="/aboutUs">About Us</router-link></li>
        <!-- <li><a href="/contacts">About Us</a></li> -->
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      day: "",
      res: "",
    };
  },
  created() {
    this.day = new Date().getDay();
    const week = {
      SUN: 0,
      MON: 1,
      TEU: 2,
      WED: 3,
      THU: 4,
      FRI: 5,
      SAT: 6,
    };
    const dayOfMonth = new Date

    for (let day in week) {
      if (this.day === week[day]) {
        this.res = day + " " + dayOfMonth.getDate();
      }
    }
  },
};
</script>
<style>
* {
  margin: 0;
}
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background: rgb(34, 34, 34);
}
.dateHeader {
  width: 65px;
  height: 25px;
  border: 3.5px solid white;
  border-radius: 8px;
  color: rgb(235, 129, 0);
  text-align: center;
  padding-top: 6px;
  /* margin-bottom: 4px; */
  margin: 0 0 4px 15px;
}
.menu {
  flex-grow: 1;
}
.menu ul {
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu li {
  margin-right: 20px;
}
.menu li:last-child {
  margin-right: 0;
}
.menu a {
  padding: 8px 10px;
}
.menu ul {
  display: flex;
  flex-flow: row nowrap;
  margin: 2px 0 0;
  padding: 0;
  font-size: 16px;
  line-height: 18px;
  list-style: none;
}
.menu a,
.menu .active {
  display: block;
  padding: 8px 10px;
  text-transform: uppercase;
  letter-spacing: 0.27em;
}
.menu a {
  text-decoration: none;
  color: white;
}
.menu a:hover {
  color: rgb(238, 155, 2);
}
</style>