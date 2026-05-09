<template>
    <button class="button">按钮</button>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Button'
});
</script>

<style lang="css" scoped>
.button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
