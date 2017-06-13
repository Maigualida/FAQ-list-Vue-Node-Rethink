<template>
  <div class="hello">
  <h1>FAQ</h1>
  Search: <input type="text" v-model="keyword" @keyup="search()">
   <p v-for="item in datas.info"> {{item.question}} {{item.reponse}} <a @click="remove(item.id)">Delete</a> 
   <!-- -->
   <router-link :to="{name: 'Edit', params: {id: item.id}}">EDIT</router-link>
  </p> 
    
  <h3>NEW</h3>
    Question : <input v-validate="'required|email'" type="text" name="question" v-model="newQ.question">
    Reponse : <input v-validate="'required|email'" type="text" name="reponse" v-model="newQ.reponse">
    <a @click="add">Add</a>
  </div>
</template>

<script>
import { Store } from '@/Store.js'
export default {
  name: 'hello',
  data () {
    return {
      datas: Store.datas,
      keyword: "",
      newQ: {
        question: "",
        reponse: "",
      }
    }
  },
  created(){
     Store.loadData();
  },
   methods:{
  add(){
     this.$http.post('http://localhost:3000/newInfo',this.newQ).then((res)=>{
        this.datas.info = res.body;
        console.log(this.datas);
        this.newQ = {
          question: '',
          reponse: ''
        };
      })
  },
  remove(id){
    console.log("en delete")
      this.$http.get(`http://localhost:3000/remove/${id}`).then((res) =>{
        this.datas.info = res.body;
      });
    },
    search(){
     this.$http.get(`http://localhost:3000/search/${this.keyword}`).then((res) =>{
        this.datas.info = res.body;
      });
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
