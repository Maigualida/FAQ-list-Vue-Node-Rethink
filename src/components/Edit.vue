<template>
  <div class="edit">
  <h1>EDIT</h1>
  <p>{{datas.question}}</p>
  <input type="text" v-model="editQ.question">
  <input type="text" v-model="editQ.reponse">
  <a @click="editData">Send</a>
  </div>
</template>

<script>
import { Store } from '@/Store.js'
export default {
  name: 'Edit',
  data () {
    return {
      datas: {},
      editQ: {
        question: "",
        reponse: "",
      }
    }
  },
  created(){
    console.log("en edit")
      this.$http.get(`http://localhost:3000/edit/${this.$route.params.id}`).then((res) => {
      this.datas = res.body;
      this.editQ.question= this.datas.question
      this.editQ.reponse= this.datas.reponse
      this.editQ.id= this.datas.id
    })
  },
   methods:{
  editData(){
    console.log(this.editQ)
     this.$http.post(`http://localhost:3000/editData`, this.editQ).then((res) => {
     this.datas = res.body;
     this.$router.push("/");
    })

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
