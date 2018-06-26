<template>
    <div>
        <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
            <article role="pge-title-content">
                <header>
                    <h2 id="greet"><span>Portofolio</span> Mohammad Robih T.Z</h2>
                </header>
                <p style="text-indent: 2em">Hai, saya Obi. Saat ini sedang kuliah di Universitas Islam Negeri Maulana Malik Ibrahim Malang. Saya tertarik dengan web development terutama bagian backend.</p>
            </article>
        </section>

        <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">
            <img src="../assets/images/me.jpg" alt="Mohammad Robih T.Z" title="Mohammad Robih T.Z" class="img-responsive"/>
            <figure class="effect-oscar">
                <figcaption></figcaption>
            </figure>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #greet {
        font-size: 40px;
    }

    img {
        border-radius: 6px;
    }

    img:hover {
        transform: rotate(4deg) scale(0.9);
    }
</style>
