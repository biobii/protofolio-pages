<template>
    <div>
        <app-header></app-header>

        <main class="profile-page">
            <app-circle-background></app-circle-background>

            <section class="section">
                <div class="container">
                    <div class="card card-profile shadow mt--300">
                        <div class="px-4" style="z-index:1">
                            <div class="text-center mt-5">
                                <h3>{{ work.title }}</h3>
                                <a v-if="work.link !== null" :href="work.link" target="_blank" class="btn btn-primary btn-sm mt-2"><i class="ni ni-send"></i> Live</a>
                            </div>
                            <div class="mt-5 py-5 border-top text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-9" style="text-align:left">
                                        <p style="text-align:left; color:#32325d;font-weight: bold">Deskripsi:</p>
                                        <p style="text-align:left">{{ work.description }}</p>
                                        
                                        <p style="text-align:left; color:#32325d;font-weight: bold">Teknologi:</p>
                                        <p style="text-align:left">{{ work.tech }}</p>

                                        <p style="text-align:left; color:#32325d;font-weight: bold">Peran Saya:</p>
                                        <p style="text-align:left">{{ work.role }}</p>

                                        <img v-for="(image, index) in work.images" :key="index" :src="thumbnail(image)" class="rounded img-fluid m-3" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
        </main>

        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'
import loadImage from '../../mixins/loadimage'
import CircleBackground from '../CircleBackground'

export default {
    name: 'Detail',
    mounted () {
        window.scroll({
            top: 300,
            behavior: 'smooth'
        })
    },
    computed: {
        work () {
            let slug = this.$route.params.slug
            return this.$store.getters.detail(slug)
        }
    },
    components: {
        appHeader: Header,
        appCircleBackground: CircleBackground,
        appFooter: Footer
    },
    mixins: [loadImage]
}
</script>

<style>

</style>
