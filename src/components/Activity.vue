<template>
    <main role="main-inner-wrapper" class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                <article role="pge-title-content" class="blog-header">
                    <header>
                        <h2><span>Aktivitas</span> Menulis dan mendokumentasikan hasil belajar</h2>
                    </header>
                    <p>Menulis di Medium untuk mendokumentasikan hasil belajar dan berbagi sesuatu yang menurut saya menarik.</p>
                </article>

                <ul class="grid-lod effect-2" id="grid">

                    <li v-for="activity in activities" :key="activity.id">
                        <section class="blog-content">
                            <a :href="activity.link" target="_blank">
                            <figure>
                                <div class="post-date">
                                    <span>{{ activity.date | showDate }}</span> {{ activity.date | showMonth }}
                                </div>
                                <img :src="activity.thumbnail"/>
                            </figure>
                            </a>
                            <article>{{ activity.title }}</article>
                        </section>
                    </li>

                </ul>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <ul class="grid-lod effect-2" id="grid">

                    <li v-for="post in posts" :key="post.id">
                        <section class="blog-content">
                            <a :href="post.link" target="_blank">
                            <figure>
                                <div class="post-date">
                                    <span>{{ post.date | showDate }}</span> {{ post.date | showMonth }}
                                </div>
                                <img :src="post.thumbnail" alt="" class="img-responsive"/>
                            </figure>
                            </a>
                            <article>{{ post.title }}</article>
                        </section>
                    </li>

                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    computed : {
        activities () {
            return this.$store.getters.activities
        },
        posts () {
            return this.$store.getters.posts
        }
    },
    filters: {
        showDate (value) {
            return value.substr(0, 2)
        },
        showMonth (value) {
            return value.substr(3)
        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
    }

    main {
        margin-bottom: 0;
        padding-bottom: 0;
    }
</style>
