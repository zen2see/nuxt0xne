<template>
    <header id="header">This is my header</header>
        <div>
            <slot />
        </div>
</template>
<style>
    #header {
        background-color: blue;
        color: white;
        height: 50px;       
    }
</style>