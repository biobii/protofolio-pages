<template>
    <main role="main-home-wrapper" class="container">
        <div class="row">
            <h2>Skills</h2>
            <hr>
            
            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">HTML5</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-orange" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 86%;">
                        86%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">CSS</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
                        70%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">PHP</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-purple" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
                        80%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">Laravel</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-red" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 78%;">
                        78%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">jQuery</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-aqua" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 62%;">
                        62%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">Vue</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-toska" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 51%;">
                        51%
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    div.row {
        background-color: #ffffff;
        padding: 10px;
        padding-bottom: 20px;
        margin: 0 auto;
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
        width: 30px;
    }

    .skill-name {
        font-size: 16px;
        font-weight: 600;
        color: #404040;
    }

    main[role="main-home-wrapper"] {
        padding-bottom: 40px;
    }

    .progress-color-orange {
        background-color: #f0932b;
    }

    .progress-color-blue {
        background-color: #3498db;
    }

    .progress-color-purple {
        background-color: #7158e2;
    }

    .progress-color-red {
        background-color: #e66767;
    }

    .progress-color-aqua {
        background-color: #4bcffa;
    }

    .progress-color-toska {
        background-color: #1abc9c;
    }

</style>
