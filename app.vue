<template>
    <div>
        <div v-for="clientInformation in data.data" :key="clientInformation.id">
            <hr>
            <p>Client Name: {{ clientInformation.registered_name }}</p>
            <p>Raffle Events Count: {{ clientInformation.raffle_events.length }}</p>
            <hr>
        </div>
    </div>
</template>

<script setup>

const { data, pending, error, refresh } = await useAsyncData('client_information', () => {
    return $fetch('http://localhost:8055/items/client_information');
});

</script>
