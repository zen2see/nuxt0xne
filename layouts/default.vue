<template>
    <header id="header">This is my header
        <br />
        <br />
        <nav>
            <ul>
                <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="nav-link">Products</NuxtLink></li>
            </ul>
        </nav>
    </header>
        <div>
            <slot />
        </div>
</template>
<style>
    nav ul { list-style: none; margin: 0; padding: 0; }
    nav li { display: inline-block; margin-right: 12px; }
    
    #header {
        background-color: black;
        color: white;
        height: 50px;       
    }
    .nav-link {
        display: inline-block;
        color:white;
        text-decoration: none;
    }
</style>