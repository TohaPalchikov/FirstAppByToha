<template>
  <my-header />
  <div class="main">
    <h2>Account list</h2>
    <my-button :txt="txt" id="myBtn" @click.prevent="showModalWindow" />
    <div id="total">
      <p style="padding-left: 20px">Total: {{ this.users.length }}</p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Account Name</th>
          <th>E-mail</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>Expiration Date</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <my-table
          v-for="user in users"
          :key="user.id"
          :user="user"
          @my-delete-user="deleteUser"
          @my-edit-user="editUser"
        />
      </tbody>
    </table>
    <my-modal-window @add-user="addUser" />
    <my-edit-window
      v-if="userForEdit.name"
      :i="userForEdit.id"
      :n="userForEdit.name"
      :a="userForEdit.accName"
      :e="userForEdit.eMail"
      :s="userForEdit.status"
      :sD="userForEdit.startDate"
      :eD="userForEdit.expirationDate"
      @my-edited-user="editedUser"
    />
    <router-view />
  </div>
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import MyModalWindow from "@/components/MyModalWindow.vue";
import MyButton from "@/components/MyButton.vue";
import MyTable from "@/components/MyTable.vue";
import MyEditWindow from "@/components/MyEditWindow.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyModalWindow,
    MyButton,
    MyTable,
    MyEditWindow,
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        accName: "",
        eMail: "",
        status: "",
        startDate: "",
        expirationDate: "",
      },
      userForEdit: {},
      txt: "Create account",
      users: [],
    };
  },
  created() {
    const userData = localStorage.getItem("users-list");
    if (userData) {
      this.users = JSON.parse(userData);
    }
  },
  methods: {
    editedUser(user) {
      this.users = this.users.filter((u) => u.id !== user.id);
      this.users.push(user);
      this.userForEdit = {}
    },
    editUser(user) {
      let cloneUser = {};
      for (let key in user) {
        cloneUser[key] = user[key];
      }
      this.userForEdit = cloneUser;
      const modal = document.getElementById("myModalEdit");
      modal.style.display = "block";
    },
    addUser(newUser) {
      newUser.id = this.users.length;
      this.users = [...this.users, newUser];
    },
    deleteUser(userForDelete) {
      this.users = this.users.filter((x) => x.eMail !== userForDelete);
    },

    showModalWindow() {
      const modal = document.getElementById("myModal");

      const btn = document.getElementById("myBtn");

      const span = document.getElementsByClassName("close")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
  watch: {
    users() {
      localStorage.setItem("users-list", JSON.stringify(this.users));
    },
  },
};
</script>

<style scoped>
#total {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background: rgba(73, 182, 255, 0.562);
  padding-top: 20px;
  display: inline-block;
}
.main {
  height: 100%;
  width: 50%;
  margin: 0 auto;
}
h2 {
  padding: 20px 0 0 20px;
}
#myBtn {
  float: right;
  margin: 0 30px 20px 0;
}
</style>