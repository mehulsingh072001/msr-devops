<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    /*
      Defines the data used by the component
    */ data(){ return {
        file: ''
      }
    },
    methods: {
      submitFile(){
            let formData = new FormData();
            /*
                Add the form data we need to submit
            */
            formData.append('file', this.file);
            axios.post( 'http://localhost:5000/api/blog/',
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

