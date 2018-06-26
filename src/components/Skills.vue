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
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 86%;">
                        86%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">CSS</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;">
                        70%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">PHP</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
                        80%
                    </div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">Laravel</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 78%;">
                        78%
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
</style>
