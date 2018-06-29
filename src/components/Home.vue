<template>
    <div>
        <main role="main-home-wrapper" class="container">
            <div class="row">
                <app-header></app-header>
                <app-headline></app-headline>

                <div class="clearfix"></div>

                <h2>Works</h2>
                <hr>
                <app-left-grid></app-left-grid>
                <app-right-grid></app-right-grid>
                
                <div class="clearfix"></div>
                
                <app-skills></app-skills>

                <app-activity></app-activity>
                
                <app-footer></app-footer>
            </div>
        </main>
    </div>
</template>

<script>
import Header from './Header'
import Headline from './Headline'
import LeftGrid from './LeftGrid'
import RightGrid from './RightGrid'
import Skills from './Skills'
import Activity from './Activity'
import Footer from './Footer'

export default {
    name: 'Home',
    components: {
        appHeader: Header,
        appHeadline: Headline,
        appLeftGrid: LeftGrid,
        appRightGrid: RightGrid,
        appSkills: Skills,
        appActivity: Activity,
        appFooter: Footer
    }
}
</script>

<style scoped>
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
        width: 40px;
    }
</style>
