<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div>
        <span class="close">&times;</span>
        <h2 style="text-align: center">Create account</h2>
        <hr />
        <br />
      </div>
      <h3>Name*</h3>
      <input
        v-model="v$.name.$model"
        class="inp"
        :class="{ invalid: v$.name.$error } || { valid: !v$.name.$error }"
      />
      <strong v-if="v$.name.$error"><small>Enter your name</small></strong>
      <br />
      <h3>Account*</h3>
      <input
        type="text"
        class="inp"
        v-model="v$.accName.$model"
        :class="{ invalid: v$.accName.$error } || { valid: !v$.accName.$error }"
      />
      <strong v-if="v$.accName.$error"
        ><small>Enter your account name</small> </strong
      ><br />
      <h3>Email*</h3>
      <input
        type="email"
        class="inp"
        v-model="v$.eMail.$model"
        :class="{ invalid: v$.eMail.$error } || { valid: !v$.eMail.$error }"
      />
      <strong v-if="v$.eMail.$error"><small>Enter your email</small> </strong
      ><br />
      <br />
      <h3>Example select</h3>
      <select
        class="inp"
        style="height: 30px"
        v-model="v$.status.$model"
        :class="{ invalid: v$.status.$error } || { valid: !v$.status.$error }"
      >
        <option>Disable</option>
        <option>Pending</option>
        <option>Active</option>
      </select>
      <strong v-if="v$.accName.$error"><small>Select the status</small> </strong
      ><br />
      <div class="dataDiv">
        <div>
          <h3>Start date</h3>
          <input
            type="date"
            v-model="v$.startDate.$model"
            :class="
              { invalid: v$.startDate.$error } || {
                valid: !v$.startDate.$error,
              }
            "
          /><br />
          <strong v-if="v$.startDate.$error"><small>Select date</small> </strong
          ><br />
        </div>
        <div>
          <h3>Expiration date</h3>
          <input
            type="date"
            v-model="v$.expirationDate.$model"
            :class="
              { invalid: v$.expirationDate.$error } || {
                valid: !v$.expirationDate.$error,
              }
            "
          /><br />
          <strong v-if="v$.expirationDate.$error"
            ><small>Select date</small> </strong
          ><br />
        </div>
      </div>
      <hr />
      <div>
        <my-button :txt="cansel" id="canselButt" @click.prevent="closeModalWindow" />
        <my-button :txt="save" id="saveButt" @click.prevent="loadUser" />
        <br />
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
export default {
  components: {
    MyButton,
  },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      cansel: "Cansel",
      save: "Save",
      id: 1,
      name: "",
      accName: "",
      eMail: "",
      status: "",
      startDate: "",
      expirationDate: "",
    };
  },
  validations() {
    return {
      name: {
        required,
      },
      accName: {
        required,
      },
      eMail: {
        required,
        email,
      },
      status: {
        required,
      },
      startDate: {
        required,
      },
      expirationDate: {
        required,
      },
    };
  },
  methods: {
    closeModalWindow() {
      const span = document.getElementById("canselButt");
      const modal = document.getElementById("myModal");
      span.onclick = function () {
        modal.style.display = "none";
      };
    },
    async loadUser() {
      const ifFormCheck = await this.v$.$validate();
      if (!ifFormCheck) {
        return;
      }
      const user = {
        id: this.id,
        name: this.name,
        accName: this.accName,
        eMail: this.eMail,
        status: this.status,
        startDate: this.startDate,
        expirationDate: this.expirationDate,
      };
      this.$emit("add-user", user);
      this.name = "";
      this.accName = "";
      this.eMail = "";
      this.status = "";
      this.startDate = "";
      this.expirationDate = "";

      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
  },
};
</script>

<style>
.invalid {
  border-color: red;
}
input:invalid {
  border-color: red;
}
.valid {
  border-color: green;;
}

#saveButt {
  float: right;
  margin: 10px;
  background: rgb(85, 124, 197);
}
#saveButt:hover {
  background: rgb(44, 86, 163);
}
#saveButt:active {
  background: rgb(85, 124, 197);
}
#canselButt {
  float: right;
  margin: 10px;
  background: rgb(83, 83, 83);
}
#canselButt:hover {
  background: rgb(49, 49, 49);
}
#canselButt:active {
  background: rgb(83, 83, 83);
}

.dataDiv {
  display: flex;
  justify-content: space-between;
}

.inp {
  width: 100%;
  height: 22px;
  margin-top: 1px;
}
.modal {
  display: none; /* Скрыто по умолчанию */
  position: fixed; /* Оставаться на месте */
  z-index: 1; /* Сидеть на вершине */
  left: 0;
  top: 0;
  width: 100%; /* Полная ширина */
  height: 100%; /* Полная высота */
  overflow: auto; /* Включите прокрутку, если это необходимо */
  background-color: rgb(0, 0, 0); /* Цвет запасной вариант */
  background-color: rgba(0, 0, 0, 0.4); /* Черный с непрозрачностью */
}

/* Модальное содержание/коробка */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto; /* 15% сверху и по центру */
  padding: 20px;
  border: 1px solid #888;
  width: 40%; /* Может быть больше или меньше, в зависимости от размера экрана */
}

/* Кнопка закрытия */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  /* margin-bottom: 100px; */
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>