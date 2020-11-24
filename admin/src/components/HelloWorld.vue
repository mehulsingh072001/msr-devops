<template>
  <div>
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      <input type="text" v-model="title" placeholder="Add title"/>
      <input type="text" v-model="description" placeholder="Add description"/>
      <input type="text" v-model="content" placeholder="Add content"/>
      <input type="text" v-model="category" placeholder="Add category"/>
      <button v-on:click="submitFile()">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FileUpload',
  data(){ return {
     file: '',
     title: '',
     description: '',
     content: '',
     category: '',
    }
  },
  methods: {
   submitFile(){
            let formData = new FormData();
            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('content', this.content);
            formData.append('category', this.category);
            const token = localStorage.getItem('token')
            axios.post( 'http://192.168.43.161/api/blog/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'auth-token': token
                }
              }
            ).then(function(){
            console.log('SUCCESS!!');
          })
          .catch(function(){
            console.log('FAILURE!!');
          });
        },
        handleFileUpload(){
          this.file = this.$refs.file.files[0];
        }
    }
  }
</script>

