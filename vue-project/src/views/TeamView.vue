<script setup>
//import team from "../team.json";
import TeamHeader from "../components/Teams/TeamHeader.vue";
import TeamMembers from "../components/Teams/TeamMembers.vue";
import TeamFooter from "../components/Teams/TeamFooter.vue";
import {useTeamStore} from "../stores/TeamStore.js";
import Modal from "../components/Modal.vue";
import {ref} from "vue";

let team = useTeamStore();

team.fill();

let showModal = ref(false);

</script>

<template>
  <TeamHeader @add="showModal = true"/>

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />


  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input type="text" placeholder="Email address" class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>