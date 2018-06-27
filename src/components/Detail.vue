<template>
    <div>
        <div v-if="work">
            <app-header></app-header>
            <main role="main-inner-wrapper" class="container">
                <div class="work-details">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4">
                            <header role="work-title">
                                <h2>{{ work.title }}</h2>
                                <a v-if="work.link" :href="work.link">Live Demo <i class="fa fa-external-link" aria-hidden="true"></i></a>
                                <a id="no-link" v-else href="#">Demo tidak tersedia</a>
                            </header>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-8">
                            <section>
                                <p id="work-description">{{ work.description }}</p>

                                <p><strong>Teknologi</strong><br/>
                                {{ work.tech }}</p>

                            </section>
                        </div>
                    </div>

                    <div class="clearfix"></div>

                    <div class="work-images grid">
                        <ul class="grid-lod effect-2" id="grid">
                            <li v-for="(image, index) in work.images" :key="index">
                                <img :src="thumbnail(image)" alt="" class="img-responsive"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <app-footer></app-footer>
        </div>

        <app-not-found v-else></app-not-found>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import loadImage from '../mixins/loadimage'

export default {
    name: 'Detail',
    mounted () {
        window.scroll({
            top: 0,
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
        appFooter: Footer,
        appNotFound: NotFound
    },
    mixins: [loadImage]
}
</script>

<style scoped>
    #no-link {
        color: #666666;
        font-size: 18px;
        font-weight: 600;
    }

    #work-description {
        text-indent: 40px;
    }

    main[role="main-inner-wrapper"] {
        padding-bottom: 0;
    }
</style>
