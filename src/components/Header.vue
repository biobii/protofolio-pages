<template>
    <header class="header-global">
        <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
            <div class="container">
                <router-link to="/" class="navbar-brand mr-lg-5" style="font-size: 22px; font-weight: bold">Hello</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">
                    <div class="col-6 collapse-brand">
                        <router-link to="/" class="navbar-brand mr-lg-5" style="font-size: 22px; font-weight: bold">Hello</router-link>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        </button>
                    </div>
                    </div>
                </div>
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <li class="nav-item">
                    <a href="#portofolio" class="nav-link" role="button">
                        <span class="nav-link-inner--text">Portofolio</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="#skills" class="nav-link" role="button">
                        <span class="nav-link-inner--text">Skills</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="#contact" class="nav-link" role="button">
                        <span class="nav-link-inner--text">Contact me</span>
                    </a>
                    </li>
                </ul>

                <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="https://www.facebook.com/profile.php?id=100016015544807" target="_blank" data-toggle="tooltip" title="Find me on Facebook">
                            <i class="fa fa-facebook-square"></i>
                            <span class="nav-link-inner--text d-lg-none">Facebook</span>
                        </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/biobii_" target="_blank" data-toggle="tooltip" title="Follow me on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="https://twitter.com/biobii_" target="_blank" data-toggle="tooltip" title="Follow me on Twitter">
                            <i class="fa fa-twitter-square"></i>
                            <span class="nav-link-inner--text d-lg-none">Twitter</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-icon" href="https://github.com/biobii" target="_blank" data-toggle="tooltip" title="Find me on Github">
                            <i class="fa fa-github"></i>
                            <span class="nav-link-inner--text d-lg-none">Github</span>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
