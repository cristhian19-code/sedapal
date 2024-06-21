<script setup>
import { ref } from 'vue';

import BaseCrud from '@/components/crud/BaseCrud.vue';
import BaseInput from '@/components/input/BaseInput.vue';
import BaseInputNumber from '@/components/input/BaseInputNumber.vue';
import BaseDateInput from '@/components/input/BaseDateInput.vue';
import ComboGenero from '@/components/combo/ComboGenero.vue';
import ComboEstadoCivil from '@/components/combo/ComboEstadoCivil.vue';

import { $moment } from '@/config/moment';

const headers = [
  { text: 'Primer Nombre', value: 'nombre_pri' },
  { text: 'Segundo Nombre', value: 'nombre_seg' },
  { text: 'Apellido Paterno', value: 'apellido_pat' },
  { text: 'Apellido Materno', value: 'apellido_mat' },
  { text: 'DNI', value: 'dni' },
  { text: 'Telefono', value: 'telefono' },
  { text: 'Estado Civil', value: 'estado_civil' },
  { text: 'Correo Personal', value: 'correo' },
  { text: 'Fecha Nacimiento', value: 'fecha_nacimiento' },
  { text: 'Genero', value: 'genero' },
]

const entity = ref({
  nombre_pri: null,
  nombre_seg: null,
  apellido_pat: null,
  apellido_mat: null,
  dni: null,
  telefono: null,
  estado_civil: null,
  correo: null,
  fecha_nacimiento: null,
  genero: null,
})

const onCreate = () => {
  entity.value = {
    nombre_pri: null,
    nombre_seg: null,
    apellido_pat: null,
    apellido_mat: null,
    dni: null,
    telefono: null,
    correo: null,
    estado_civil: null,

    fecha_nacimiento: $moment().format('YYYY-MM-DD'),
    genero: null,
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
  <base-crud @onEdit="onEdit" @onCreate="onCreate" id-name="id_cliente" :entity="entity" title="Clientes"
    width-form="600px" :headers="headers" entity-name="clientes">
    <template #form>
      <!-- {{ entity }} -->
      <div class="grid">
        <div class="col-6">
          <base-input max-length="20" label="Primer Nombre" v-model="entity.nombre_pri" />
        </div>
        <div class="col-6">
          <base-input max-length="20" label="Segundo Nombre" v-model="entity.nombre_seg" />
        </div>
      </div>
      <div class="grid">
        <div class="col-6">
          <base-input max-length="20" label="Primer Apellido" v-model="entity.apellido_pat" />
        </div>
        <div class="col-6">
          <base-input max-length="20" label="Segundo Apellido" v-model="entity.apellido_mat" />
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
          <base-input type="date" v-model="entity.fecha_nacimiento" label="Fecha Nacimiento" />
        </div>
        <div class="col-6">
          <combo-genero v-model="entity.genero" />
        </div>
      </div>

      <combo-estado-civil label="Estado Civil" v-model="entity.estado_civil" type="Email" />
      <base-input max-length="100" label="Correo" v-model="entity.correo" type="Email" />
    </template>
  </base-crud>
</template>
