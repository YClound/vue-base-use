Vue.component('pane', {
    template: '<div class="pane" v-show="show">' +
    '<slot></slot>' +
    '</div>',
    data: function () {
        return {
            show: true
        }
    },
    props: {
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    watch: {
        label: function(){
            this.updateNav();
        }
    },
    methods: {
        updateNav: function () {
            this.$parent.updateNav();
        }
    },
    mounted: function () {
        this.updateNav();
    }
})