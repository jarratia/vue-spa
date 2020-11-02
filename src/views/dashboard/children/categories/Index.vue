<template>
    <div id="categoriesIndex">
        <div class="columns is-multiline">
            <div class="column is-4" v-for="category in categories" :key="category.id">
                <div class="notification">
                    <h2 class="title"> {{ category.name }}</h2>
                    <h6 class="subtitle has-text-justify"> 
                        {{ category.description }}
                    </h6>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        
        name: 'categoriesIndex',
        computed: mapState({
            categories: state => state.categories
        }),
        mounted() {
            this.$store.dispatch('fetchCategories')
        }
    }
</script>