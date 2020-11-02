<template>
    <div id="dashboardSidebar">
        <aside class="menu">
            <p class="menu-label">Categorias</p>
            <ul class="menu-list">
                <li>
                    <router-link :to="{ name: 'home_path' }">
                        <span> Inicio</span>
                    </router-link>

                    <router-link :to="{ name: 'categories_path' }">
                        <span> Categorias</span>
                    </router-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
    export default {
        name: 'dashboardSidebar'
    }
</script>