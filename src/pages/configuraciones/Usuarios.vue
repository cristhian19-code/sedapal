<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';

const headers = [
  { text: 'Username', value: 'username' },
]

const entity = ref({
  username: '',
  contrasenia: '',
})

const onCreate = () => {
  entity.value = {
    username: '',
    contrasenia: '',
  }
}

const onEdit = (item) => {
  entity.value = {
    id_usuario: item.id_usuario,
    username: item.username,
    contrasenia: item.contrasenia,
  }
}
</script>

<template>
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_usuario" :entity="entity" title="Usuarios"
    :headers="headers" entity-name="usuarios">
    <template #form>
      <base-input max-length="50" v-model="entity.username" type="email" label="Username" />
      <base-input max-length="50" v-model="entity.contrasenia" type="password" label="Contraseña" />
    </template>
  </base-crud>
</template>
