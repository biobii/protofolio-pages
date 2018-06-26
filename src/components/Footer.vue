<template>
    <footer role="footer">
        <h2>Hubungi</h2>
        <hr>

        <img src="../assets/images/me-sketch.jpg" title="author" alt="Author"/>
        <h3><i class="fa fa-envelope" aria-hidden="true"></i> biobii.game@gmail.com</h3>
        
        <nav role="footer-nav">
            <ul>
                <li><a href="https://medium.com/@biobii" title="Work">Medium</a></li>
                <li><a href="#" title="About">About</a></li>
                <li><a href="#" title="Blog">Blog</a></li>
                <li><a href="#" title="Contact">Contact</a></li>
            </ul>
        </nav>

        <ul role="social-icons">
            <li><a href="https://twitter.com/biobii_"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-flickr" aria-hidden="true"></i></a></li>
        </ul>
        <p class="copy-right">&copy; 2018 Portofolio - Biobii</p>
        <p class="copy-right">Template oleh <a href="#">avana LLC</a>, diedit oleh Biobii</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer {
        padding-top: 5px;
        margin-top: 0;
        margin-bottom: 0;
    }

    img[title="author"] {
        display: block;
        margin: 0 auto;
        padding-top: 0;
        width: 300px;
        height: 300px;
    }

    h2 {
        color: #404040;
        font-size: 28px;
        text-align: center;
        margin-bottom: 0.5px;
    }

    hr {
        margin: 4px auto 20px auto;
        border-color: #fb5353;
        border-width: 2px;
        width: 60px;
    }

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: #757575;
    }

    nav[role="footer-nav"] {
        padding-top: 8px;
        padding-bottom: 8px;
    }
</style>
