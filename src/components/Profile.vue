<template>
    <section class="section">
        <div class="container">
            <div class="card card-profile shadow mt--300">
                <div class="px-4">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="card-profile-image">
                                <a href="#">
                                    <img :src="asset('ava.jpg')" class="rounded-circle" style="z-index:1">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                            <div class="card-profile-actions py-4 mt-lg-0">
                                <a href="https://www.linkedin.com/in/biobii" target="_blank" class="btn btn-neutral btn-twitter btn-round btn-sm mr-4">
                                <i class="fa fa-linkedin-square"></i> LinkedIn
                                </a>
                                <a href="https://github.com/biobii" target="_blank" class="btn btn-neutral btn-github btn-round btn-sm float-right">
                                <i class="fa fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-1">
                            <div class="card-profile-stats d-flex justify-content-center">
                                <div>
                                    <span class="heading">{{ countRepos }}</span>
                                    <span class="description">Repositories</span>
                                </div>
                                <div>
                                    <span class="heading">{{ countFollowing }}</span>
                                    <span class="description">Following</span>
                                </div>
                                <div>
                                    <span class="heading">{{ countFollowers }}</span>
                                    <span class="description">Followers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <h3>Mohammad Robih T. Z</h3>
                        <div class="h6 font-weight-300">
                            <i class="ni location_pin mr-2"></i>Malang, Indonesia
                        </div>
                        <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2">
                            </i>Web Developer | Backend
                        </div>
                        <div>
                            <i class="ni education_hat mr-2"></i>Maulana Malik Ibrahim State Islamic University
                        </div>
                    </div>
                    <div class="mt-5 py-5 border-top text-center">
                        <div class="row justify-content-center">
                            <div class="col-lg-9">
                                <p>I am a PHP developer with strong passion to learn new things. I am familiar with Laravel framework, and I have developed some applications using it. Currently I am curious about new things.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import loadImage from '../mixins/loadimage'

export default {
    data () {
        return {
            countRepos: 15,
            countFollowing: 19,
            countFollowers: 15
        }
    },
    async created () {
        let res = await this.$axios.get(`https://api.github.com/users/biobii`)

        try {
            this.countRepos = res.data.public_repos
            this.countFollowing = res.data.following
            this.countFollowers = res.data.followers
        } catch (err) {
            //
        }
    },
    mixins: [loadImage]
}
</script>

<style>

</style>
