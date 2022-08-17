/**
 * Created by Hubert(Hongyang) Wang on 2016/9/19.
 */

// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// highlight filter
Vue.filter('highlight', function(words, query){
    var iQuery = new RegExp(query, "ig");
    return words.toString().replace(iQuery, function(matchedTxt,a,b){
        return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
    });
});

// bootstrap the demo
        const url = "http://localhost:3000/projects";

var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: []
  },
  created() {
  axios.get(url)
            .then( function( response ){
              console.log(response.data);
              this.gridData = response.data.data;
            }.bind(this))
            .then( function( data ){
            }.bind(this))
            .catch( function( error ){
            }.bind(this));

            
},
  methods:  {
 submit(){
   console.log('enter');
 }
},
})