<template>
    <div>
        <app-header></app-header>
        <main v-if="work" role="main-inner-wrapper" class="container">
            <div class="work-details">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <header role="work-title">
                            <h2>{{ work.title }}</h2>
                            <a v-if="work.link" :href="work.link">Live demo <i class="fa fa-external-link" aria-hidden="true"></i></a>
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
                        <li><img src="../assets/images/work/works-image-1.jpg" alt="" class="img-responsive"/></li>
                        <li><img src="../assets/images/work/works-image-2.jpg" alt="" class="img-responsive"/></li>
                        <li><img src="../assets/images/work/works-image-3.jpg" alt="" class="img-responsive"/></li>
                    </ul>
                </div>
            </div>
        </main>

        <app-not-found v-else></app-not-found>

        <app-footer v-if="work"></app-footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'

export default {
    name: 'Detail',
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
    }
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
</style>
