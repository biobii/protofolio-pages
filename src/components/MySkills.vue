<template>
    <section class="section pb-0 bg-gradient-warning" id="skills">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img :src="loadAsset('ill-2.svg')" class="img-center img-fluid">
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i class="ni ni-building text-primary"></i>
                </div>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">Skills</h4>
                <p class="text-white">Here are some skills based on technology I learn.</p>
              </div>
            </div>

            <div class="card shadow shadow-lg--hover mt-2">
              <div class="card-body">
                <div class="d-flex px-3">
                  <div>
                    <div class="icon icon-shape bg-gradient-danger rounded-circle text-white">
                      <i class="ni ni-favourite-28"></i>
                    </div>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-danger">Laravel</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow shadow-lg--hover mt-4">
              <div class="card-body">
                <div class="d-flex px-3">
                  <div>
                    <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i class="ni ni-spaceship"></i>
                    </div>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-warning">Javascript</h5>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card shadow shadow-lg--hover mt-4">
              <div class="card-body">
                <div class="d-flex px-3">
                  <div>
                    <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                      <i class="ni ni-ui-04"></i>
                    </div>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-primary">Bootstrap</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- SVG separator -->
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
</template>

<script>
export default {
    methods: {
        loadAsset(value) {
            return require(`../assets/images/${value}`)
        }
    }
}
</script>

<style>

</style>
