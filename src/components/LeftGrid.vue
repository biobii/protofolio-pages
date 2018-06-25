<template>
    <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">
        <ul class="grid-lod effect-2" id="grid">

            <li v-for="work in works" :key="work.id">
                <figure class="effect-oscar">
                    <img src="../assets/images/home-images/image-2.jpg" alt="" class="img-responsive"/>
                    <figcaption>
                        <h2>{{ work.title }}</h2>
                        <p>{{ work.description | overview}}</p>
                        <a :href="work.slug | link">Detail</a>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </section>
</template>

<script>
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
    }
}
</script>

<style>

</style>
