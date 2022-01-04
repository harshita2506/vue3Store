<template>
  <div>
    <h5>Unregister</h5>
    <table>
      <thead>
        <p>
          Registered<span style="margin-left: 10px">{{ getTotalUnregister }}</span>
        </p>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>pro</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in getUnregistered" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.phone }}</td>
          <td>{{ row.profession }}</td>
          <td>
            <button @click="unRegisterClick(row)">Unregister</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore } from "vuex";
 import { mapGetters } from "./map-state";

export default {
  name: "Unregister",
  setup() {
    const store = useStore();
   const { getUnregistered, getTotalUnregister } = mapGetters()
    // const unregisterArray = computed(() => {
    //   return store.getters.getUnregistered
    // });

    // const totalRegister = computed(() => {
    //   return store.getters.getTotalUnregister
    // });
    function unRegisterClick(data) {
      store.commit('unRegisterMute', data)
      // const rows1 = store.state.rowsStore.find((element) => {
      //   return element.id == data.id;
      // });
      // rows1.regiter = false;
      // store.state.unregisterStore.splice(
      //   store.state.unregisterStore.indexOf(data),
      //   1
      // );
    }
    return {
      getTotalUnregister,
      store,
      unRegisterClick,
       getUnregistered,
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