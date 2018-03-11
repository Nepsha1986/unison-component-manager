<template>
  <div id="app">
    <MainHeader/>

    <div class="container">
      <div class="row">
        <div class="col-12 pt-5 pb-5">
          <StartThemeBlock/>
        </div>

        <div class="col-12 pt-5 pb-5">
          <UnysonComponentsList/>
        </div>
      </div>
    </div>

    <MainFooter/>
  </div>
</template>

<script>
import UnysonComponentsList from './components/UnysonComponentsList'
import StartThemeBlock from './components/StartThemeBlock'
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',

  components: {
      UnysonComponentsList, MainHeader, MainFooter, StartThemeBlock
  }
}
</script>
