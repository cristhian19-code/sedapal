<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';
import BaseDateInput from '@/components/input/BaseDateInput.vue';

import ComboCargo from '@/components/combo/ComboCargo.vue';
import { $moment } from '@/config/moment';

const headers = [
  { text: 'Username', value: 'username' },
]

const entity = ref({
  nombre_pri: null,
  nombre_seg: null,
  apellido_pat: null,
  apellido_mat: null,
  dni: null,
  telefono: null,

  cargo: null,
  correo: null,
  fecha_contrato: null,
  genero: null,
  id_usuario: null,
})

const onCreate = () => {
  entity.value = {
    nombre_pri: null,
    nombre_seg: null,
    apellido_pat: null,
    apellido_mat: null,
    dni: null,
    telefono: null,
    cargo: null,
    correo: null,

    fecha_contrato: $moment().format('YYYY-MM-DD'),
    genero: null,
    id_usuario: null,
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
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_usuario" :entity="entity" title="Empleados"
    width-form="600px" :headers="headers" entity-name="empleados">
    <template #form>
      {{ entity }}
      <div class="grid">
        <div class="col-6">
          <base-input label="Primer Nombre" v-model="entity.nombre_pri" />
        </div>
        <div class="col-6">
          <base-input label="Segundo Nombre" v-model="entity.nombre_seg" />
        </div>
      </div>
      <div class="grid">
        <div class="col-6">
          <base-input label="Primer Apellido" v-model="entity.apellido_pat" />
        </div>
        <div class="col-6">
          <base-input label="Segundo Apellido" v-model="entity.apellido_mat" />
        </div>
      </div>
      <div class="grid">
        <div class="col-6">
          <base-input-number :max="99999999" v-model="entity.dni" label="Dni" />
        </div>
        <div class="col-6">
          <base-input-number :max="999999999" v-model="entity.telefono" label="Teléfono" />
        </div>
      </div>
      <div class="grid">
        <div class="col-6">
          <combo-cargo v-model="entity.cargo" />
        </div>
        <div class="col-6">
          <base-date-input v-model="entity.fecha_contrato" label="Fecha Contratación" />
        </div>
      </div>
      <base-input label="Correo" v-model="entity.correo" type="Email" />
    </template>
  </base-crud>
</template>
