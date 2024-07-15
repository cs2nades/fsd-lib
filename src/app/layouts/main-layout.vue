<template>
    <div class="flex min-h-screen flex-col border-2 border-red-500">
        <header class="bg-stone-900">
            <slot name="header">header slot placeholder</slot>
        </header>
        <main
            class="flex flex-1 flex-col items-center justify-center border-4 border-dashed"
        >
            <slot name="default">default slot placeholder</slot>
        </main>
        <footer class="bg-stone-950">
            <slot name="footer">footer slot placeholder</slot>
        </footer>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
