<template>
  <div>
    <h5>Register</h5>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>pro</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.phone }}</td>
          <td>{{ row.profession }}</td>
          <td>
            <button @click="registerUser(row)">Register</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Register",
  setup() {
    const store = useStore();

     const rows = computed(() => {
      return store.getters.getRegistered
    });
    function registerUser(row) {
      store.dispatch('registerMute', row)
      // store.commit('registerMute', row)
      // row.regiter = true;
      // store.state.unregisterStore.push({
      //   id: row.id,
      //   name: row.name,
      //   phone: row.phone,
      //   profession: row.profession,
      // });
    }
    return {
      store,
      rows,
      registerUser,
    };
  },
};
</script>

<style>
table {
  font-family: "Open Sans", sans-serif;
  width: 350px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  min-width: 30px;
}
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
</style>