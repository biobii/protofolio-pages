<template>
    <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">
        <ul class="grid-lod effect-2" id="grid">

            <li v-for="work in works" :key="work.id">
                <figure class="effect-oscar">
                    <img :src="thumbnail(work.thumbnail)" alt="" class="img-responsive"/>
                    <figcaption>
                        <h2>{{ work.title }}</h2>
                        <p>{{ work.description | overview }}</p>
                        <router-link :to="work.slug | link">Detail</router-link>
                    </figcaption>
                </figure>
            </li>

        </ul>
    </section>
</template>

<script>
import loadImage from '../mixins/loadimage'

export default {
    computed: {
        works () {
            return this.$store.getters.odd
        }
    },
    filters: {
        overview (value) {
            return `${value.substr(0, 50)}...`
        },
        
        link (value) {
            return `detail/${value}`
        }
    },
    mixins: [loadImage]
}
</script>

<style scoped>
    li {
        list-style: none;
    }

    figcaption h2 {
        margin-top: 0;
    }
</style>
