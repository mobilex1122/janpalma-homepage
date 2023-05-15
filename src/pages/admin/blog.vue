<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>


<template>
  <div>
    <div v-if="token">

    </div>
    <div v-else class="text-center">
    <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        ></GoogleSignInButton>
    </div>
  </div>
  
    

</template>

<script lang="ts">
    export default {
        data() {
            return {
                token: ""
            }
        }
    }
</script>