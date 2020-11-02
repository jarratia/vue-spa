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
export default {
    name: 'categoriesIndex',
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        this.fetchCategories()
    },
    methods: {
        fetchCategories(){
            this.$http.get('http://localhost:3000/api/categories')
                .then(response => {
                  console.log(response)
                  this.categories = response.data
                })
                .catch(error => console.log(error));
        }
    }
}
</script>