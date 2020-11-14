<template>
    <div id="categoriesShow">

        <h3 class="title">{{ category.id }}</h3>
        <h4 class="subtitle has-text-grey-light">{{ category.description }}</h4>

        <div class="columns is-multiline">
            <div class="column is-6" v-for="movie in category.movies" :key="movie.id">
                <div class="box">
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <h3 class="title">{{ movie.name }}</h3>
                                <p class="has-text-justify">{{ movie.description }}</p>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <div class="lavel-item has-text-grey-light">{{ movie.year }}</div>
                                        <div class="level-right">
                                            <div class="lavel-item">

                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: 'categoriesShow',
        computed: mapState({
            category: state => state.category
        }),
        mounted() {
            this.$store.dispatch('getCategory', this.$route.params.id)
        }
    }
</script>