<template>
    <div>
        <app-header></app-header>

        <main class="profile-page">
            <app-circle-background></app-circle-background>
            <app-profile></app-profile>
            <app-portofolio></app-portofolio>
            <app-my-skills></app-my-skills>
            <app-activity></app-activity>
        </main>

        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../Header'
import Footer from '../Footer'
import Profile from '../Profile'
import MySkills from '../MySkills'
import Activity from '../Activity'
import Portofolio from '../Portofolio'
import CircleBackground from '../CircleBackground'

export default {
    name: 'Home',
    components: {
        appHeader: Header,
        appCircleBackground: CircleBackground,
        appProfile: Profile,
        appPortofolio: Portofolio,
        appMySkills: MySkills,
        appActivity: Activity,
        appFooter: Footer
    }
}
</script>

<style>

</style>
