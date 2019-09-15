<template>
    <footer class="footer" id="contact">
        <div class="container">
            <div class="row row-grid align-items-center mb-5">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Contact me at</h3>
                    <h5 class="mb-0 font-weight-light">
                        <small><i class="ni ni-email-83"></i></small>&nbsp;halo.robih@gmail.com
                    </h5>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" href="https://twitter.com/biobii_" class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow me">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100016015544807" class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Find me on Facebook">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" href="https://github.com/biobii" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Find me on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                <div class="copyright">
                    &copy; {{ year }} | Free Template by
                    <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                </div>
                </div>
            </div>
        </div>
  </footer>
</template>

<script>
export default {
    data () {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>
