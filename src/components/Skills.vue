<template>
    <main role="main-home-wrapper" class="container">
        <div class="row">
            <h2>Progress</h2>
            <hr>
            
            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">HTML5</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-orange" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 86%;" state-value="86">86%</div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">CSS</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" state-value="70">70%</div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">PHP</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-purple" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" state-value="80">80%</div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">Laravel</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-red" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 78%;" state-value="78">78%</div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">jQuery</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-aqua" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 62%;" state-value="62">62%</div>
                </div>
            </div>

            <div class="col-md-1 col-md-offset-1">
                <p class="skill-name">Vue</p>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar progress-color-toska" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 51%;" state-value="51">51%</div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    mounted () {
        this.run()
    },
    methods: {
        run () {
            const progressBars = document.getElementsByClassName('progress-bar')

            this.startFromZero(progressBars)
            this.loading(progressBars)
        },
        startFromZero (el) {
            for (let i = 0; i < el.length; i++) {
                el[i].textContent = '0%'
                el[i].style.width = '0%'
            }
        },
        loading (el) {
            var stop = false;
            const section = document.getElementsByTagName('h2')[0]

            document.addEventListener('scroll', function (e) {
                if (window.scrollY >= section.offsetTop + 400 && !stop) {
                    for (let i = 0; i < el.length; i++) {
                        let width = 0;
                        let max = parseInt(el[i].getAttribute('state-value'))

                        let loadingInterval = setInterval(function () {
                            if (width >= max) {
                                width = 0;
                                max = 0;
                                clearInterval(loadingInterval)
                            } else {
                                width++
                                el[i].textContent = width + '%'
                                el[i].style.width = width + '%'
                            }
                        }, 10)
                    }
                    stop = true
                }
            })
        }
    }
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
        margin: 8px auto 20px auto;
        border-color: #fb5353;
        border-width: 2px;
        width: 80px;
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
        background-color: #f75b13;
    }

    .progress-color-blue {
        background-color: #3498db;
    }

    .progress-color-purple {
        background-color: #7158e2;
    }

    .progress-color-red {
        background-color: #dd6565;
    }

    .progress-color-aqua {
        background-color: #4bcffa;
    }

    .progress-color-toska {
        background-color: #1abc9c;
    }
</style>
