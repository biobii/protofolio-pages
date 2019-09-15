<template>
    <section class="has-card footer" id="portofolio">
        <div class="container container-lg">
            <h4 class="text-center display-4 mb-5">Portofolio</h4>
            <div class="row d-flex flex-wrap justify-content-center">

            <div v-for="work in works" :key="work.id" class="col-md-6 mb-5 mb-md-0">
                <div class="card card-lift--hover shadow border-0" style="height: 380px">
                <router-link :to="work.slug | link" class="overflow-hidden">
                    <img :src="thumbnail(work.thumbnail)" class="card-img">
                </router-link>
                </div>
                <h5 class="text-center text-center font-weight-light mt-3 mb-4">
                    {{ work.title }}
                </h5>
            </div>

            </div>
        </div>
    </section>
</template>

<script>
import loadImage from '../mixins/loadimage'

export default {
    computed: {
        works () {
            return this.$store.getters.works
        }
    },
    filters: {
        link (value) {
            return `work/${value}`
        }
    },
    mixins: [loadImage]
}
</script>

<style>

</style>
