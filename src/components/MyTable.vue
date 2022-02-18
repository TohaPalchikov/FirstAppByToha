<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.accName }}</td>
    <td>{{ user.eMail }}</td>
    <td>
      <div v-if="user.status === 'Active'" id="active">Active</div>
      <div v-else-if="user.status === 'Pending'" id="pending">Pending</div>
      <div v-else-if="user.status === 'Disable'" id="disable">Disable</div>
    </td>
    <td>{{ user.startDate }}</td>
    <td>{{ user.expirationDate }}</td>
    <td>
      <my-button id="editBut" :txt="editBut" @click="editUser" />
      <my-button id="deleteBut" :txt="deleteBut" @click="deleteUser" />
    </td>
  </tr>
</template>
<script>
import MyButton from "./MyButton.vue";
export default {
  name: 'Mytable',
  props: ["user"],
  components: {
    MyButton,
  },
  data() {
    return {
      deleteBut: "Delete",
      editBut: "Edit",
    };
  },
  methods: {
    deleteUser() {
      this.$emit("my-delete-user", this.user.eMail);
    },
    editUser(){
      this.$emit("my-edit-user",this.user)
    }
  },
};
</script>
<style>
#deleteBut {
  background: gray;
  margin: 3px;
}
#deleteBut:hover {
  background: rgb(77, 76, 76);
}
#deleteBut:active {
  background: gray;
}

#editBut {
  background: rgb(24, 123, 168);
}
#editBut:hover {
  background: rgb(1, 74, 92);
}
#editBut:active {
  background: rgb(24, 123, 168);
}

.table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}
.table thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
}
.table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}
.table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}
.table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table tbody tr:nth-child(even) {
  background: #f3f3f3;
}
.table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}
.table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
#active {
  width: 50px;
  height: 20px;
  background: blue;
  color: aliceblue;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
}
#pending {
  font-size: 300;
  width: 60px;
  height: 20px;
  background: rgb(170, 0, 0);
  color: aliceblue;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
}
#disable {
  font-size: 300;
  width: 60px;
  height: 20px;
  background: rgb(231, 124, 2);
  color: aliceblue;
  border-radius: 5px;
  text-align: center;
  padding: 3px;
}
</style>
