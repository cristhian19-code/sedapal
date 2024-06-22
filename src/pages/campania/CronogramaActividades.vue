<script setup>
import { computed, ref, watch } from "vue"
import ComboCampania from "@/components/combo/ComboCampania.vue"

import { $axios } from "@/config/axios"
import { $moment } from "@/config/moment"
import BaseButton from "@/components/button/BaseButton.vue"

const campania = ref(null)
const bars = ref([])
const date = ref()

const getActivitiesByCampania = async () => {
    try {
        const { data } = await $axios.post(`/actividades/listar`, {
            id_campania: campania.value
        })
        console.log(data);
        bars.value = data.map((item) => ({
            id_actividad: item.id_actividad,
            descripcion: item.descripcion,
            myBeginDate: $moment(item.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD'),
            myEndDate: $moment(item.fecha, 'YYYY-MM-DD').add(3, 'day').format('YYYY-MM-DD'),
            ganttBarConfig: {
                id: "id_actividad" // make sure this is unique!
            }
        }))
    } catch (error) {

    }
}

const getEndDateMoth = computed(() => {
    return $moment(date.value, 'YYYY-MM-DD').endOf('month').format('YYYY-MM-DD')
})

const getStartDateMonth = computed(() => {
    return $moment(date.value, 'YYYY-MM-DD').startOf('month').format('YYYY-MM-DD')
})


const getCurrentDate = () => {
    date.value = $moment().format('YYYY-MM-DD')
}



watch(() => campania.value, async () => {
    if (campania.value) {
        await getActivitiesByCampania()
    }
})

const prevDate = () => {
    date.value = $moment(date.value, 'YYYY-MM-DD').subtract(1, 'month').format('YYYY-MM-DD')
}

const nextDate = () => {
    date.value = $moment(date.value, 'YYYY-MM-DD').add(1, 'month').format('YYYY-MM-DD')
}

getCurrentDate();

</script>

<template>
    <h1 class="text-center text-primary">Cronograma de Actividades</h1>
    <combo-campania v-model="campania" class="my-5" />

    <div class="flex justify-content-center mb-5 gap-5">
        <base-button @click="prevDate" severity="danger" label="Prev" icon="pi pi-chevron-left" icon-pos="left" />
        <base-button @click="nextDate" severity="success" label="Next" icon="pi pi-chevron-right" />
    </div>

    <g-gantt-chart color-scheme="dark" date-format="YYYY-MM-DD" :chart-start="getStartDateMonth" :chart-end="getEndDateMoth"
        precision="day" bar-start="myBeginDate" bar-end="myEndDate">
        <g-gantt-row label="Actividades" :bars="bars" />
    </g-gantt-chart>
</template>