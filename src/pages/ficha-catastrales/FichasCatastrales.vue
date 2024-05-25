<script setup>
const listTemplates = [
    {
        title: "Consumo",
        image: "../../assets/icons/file.svg"
    },
    {
        title: "Reclamo",
        image: "../../assets/icons/file.svg"
    },
    {
        title: "Inspección",
        image: "../../assets/icons/file.svg"
    },
    {
        title: "Nueva Plantilla",
        image: "../../assets/icons/file-add.svg"
    }
]

const getImage = (image) => {
    return new URL(image, import.meta.url).href
}
</script>

<template>
    <div class="text-center w-full">
        <h1 class="text-center">Fechas Catastrales</h1>

        <div class="grid w-full mt-8">
            <div v-for="(template, index) in listTemplates" :key="index" class="text-center col-4">
                <img :src="getImage(template.image)" width="50" alt="">
                <h3>{{ template.title }}</h3>
            </div>
        </div>
    </div>
</template>