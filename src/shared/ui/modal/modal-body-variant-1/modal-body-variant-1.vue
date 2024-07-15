<template>
    <section class="flex h-2/3 w-2/3 flex-col bg-white">
        <h2 class="border-b-2 border-dashed text-center text-5xl">
            <slot name="heading">Modal-body-variant-1-heading-placeholder</slot>
        </h2>
        <div class="flex-1 border-b-2 border-dashed">
            <slot name="default">Modal-body-variant-1-body-placeholder</slot>
        </div>
        <footer class="text-center">
            <slot name="footer">Modal-body-variant-1-footer-placeholder</slot>
        </footer>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
