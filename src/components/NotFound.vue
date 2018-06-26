<template>
    <div>
        <app-header></app-header>

        <main role="main-home-wrapper" class="container">
            <div class="row">
                <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                    <article role="pge-title-content">
                        <header>
                            <h2 id="greet"><span>404</span> Maaf, halaman tidak ditemukan.</h2>
                        </header>
                    </article>
                </section>

                <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">
                    <img src="../assets/images/about-images/about-image-1.jpg" alt="" class="img-responsive"/>
                    <figure class="effect-oscar">
                        <figcaption></figcaption>
                    </figure>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import Header from './Header'

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style>

</style>
