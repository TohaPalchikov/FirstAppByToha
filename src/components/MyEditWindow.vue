<template>
  <div id="myModalEdit" class="modal">
    <div class="modal-content">
      <div>
        <span class="close" @click="closeModalWindow">&times;</span>
        <h2 style="text-align: center">Edit account</h2>
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
            :min="startDate"
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
        <my-button
          :txt="cansel"
          id="canselButt"
          @click.prevent="closeModalWindow"
        />
        <my-button
          :txt="edit"
          id="saveButt"
          @click.prevent="editUserFromEditWindow"
        />
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
      edit: "Edit",
      id: this.i,
      name: this.n,
      accName: this.a,
      eMail: this.e,
      status: this.s,
      startDate: this.sD,
      expirationDate: this.eD,
    };
  },
  props: ["i", "n", "a", "e", "s", "sD", "eD"],
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
      const modal = document.getElementById("myModalEdit");
      modal.style.display = "none";
    },
    editUserFromEditWindow() {
      const user = {
        id: this.id,
        name: this.name,
        accName: this.accName,
        eMail: this.eMail,
        status: this.status,
        startDate: this.startDate,
        expirationDate: this.expirationDate,
      };
      this.$emit("my-edited-user", user);

      const modal = document.getElementById("myModalEdit");
      modal.style.display = "none";
    },
  },
};
</script>
