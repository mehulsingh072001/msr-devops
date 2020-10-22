<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add title...">
        <input type="text" v-model="content" placeholder="Add content...">
        <input type="text" v-model="category" placeholder="Add category...">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
  export default {
    /*
      Defines the data used by the component
    */ data(){ 
        return {
          file: '',
          title: '',
          content: '',
          category: ''
      }
    },
    methods: {
      ...mapActions(['addPost']),
      onSubmit(e) {
        e.preventDefault();
        this.addPost(this.title, this.content, this.category)
      },
      submitFile(){
            let formData = new FormData();
            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            axios.post( 'http://localhost:5000/api/blog/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
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

