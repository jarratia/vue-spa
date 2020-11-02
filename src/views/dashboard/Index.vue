<template>
    <div>
        <Navbar />
            <section class="section">
                <div class="columns">
                    <div class="column is-2">
                        <Sidebar />
                    </div>
                    <div class="column is-10">
                        <div class="content">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
    import Navbar from './partials/Navbar'
    import Sidebar from './partials/Sidebar'

    export default {
        name: 'dashboardIndex',
        components: {Navbar, Sidebar}
    }
</script>