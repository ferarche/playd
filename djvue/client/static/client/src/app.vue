<template>
    <div id='application'>
        <div v-if="!isLoading" key='loaded'>
            <h1>{{msg}} Application</h1>
            <p>
                <router-link to="/">Main Application</router-link>
                <router-link to="/test">Test Application</router-link>
            </p>
            <router-view></router-view>
        </div>
        <div v-else key='loading'>
            Loading...
        </div>
    </div>
</template>>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import _ from 'lodash';
import * as d3 from 'd3';
import moment from 'moment';
import anime from 'animejs';

export default {
    mounted(){
        this.isLoading = false;
    },
    computed : {
        ...mapGetters({'msg':'getMessage'})
    },
    data (){
        return {
            isLoading : true,
        }
    }
}

</script>
<style module='modeone'>
.red {
    color : red;
}
p {
    font-size : 2em; 
    text-align : center;
    animation-name: 'sl';
}
</style>
<style module='modetwo'>
.red{
    color : pink;
}
</style>
<style>
.red {
    color : green;
}
</style>