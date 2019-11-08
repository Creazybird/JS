import Vue from '../Vue/vue.min.js'
var myMixin={
    created:function(){
        this.hello()
    },
    methods:{
        hello:function(){
            console.log('hello from mixin')
        }
    }
}

var Component=Vue.extend({
    mixins:[myMixin]
})

var Component=new Component()