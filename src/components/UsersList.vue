
<template>
  <div>
    <button @click=getUserLists>목록 조회</button>
    <!-- <label> name : </label> <input value="aaaa" /> -->
    <!-- <button @click="(event) => warn('Form cannot be submitted yet.', event)"> search</button> -->
    <ul>
      <li v-for="user in users" :key="user.id" @click="(event) => getUser(event, user.id)" id="'{user.id}'">이름 :: {{
        user.name
      }}, 나이: {{
  user.age }} </li>
    </ul>
    <br>
    -------------------------------------------------------------------------------------------------
    <br>
    <div v-if="state.person">
      <p>아이디 :: [ {{ state.person?.id }} ] </p>
      <p>이 름 :: [ {{ state.person?.name }} ]</p>
      <p>나이 :: [ {{ state.person?.age }} ]</p>
    </div>
    <br>
    -------------------------------------------------------------------------------------------------
    <br>
    <div class="user-add">
      <input type="text" />
      <input type="text" />
      <!-- <input type="text" v-model="state.person?.name" /> <br />
      <input type="text" v-model="state.person?.age" /> <br /> -->

      <button @click="registerUser(event)">저장</button>
    </div>

  </div>
</template>



<script setup>
// import WelcomeItem from './WelcomeItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
// import CommunityIcon from './icons/IconCommunity.vue'
// import SupportIcon from './icons/IconSupport.vue'
import axiosInstance from '@/util/ApiUtil'

import { reactive, ref } from 'vue';


const state = reactive({
  person: null,
});

const users = ref(null);

function getUserLists() {
  axiosInstance.get('users')
    .then(response => response.data)
    .then(data => users.value = data);
}

function getUser(event, id) {

  const params = { "id": id }

  axiosInstance.get('users', { params })
    //    .then(response => response.data)
    .then(response => response.data[0])
    .then((data) => {
      state.person = data
      console.log("==========================================");
      console.log(state.person.id);
      console.log("****************************************");
    });
}

async function registerUser() {

  const person = await axiosInstance.post(
    "person",
    {
      name: this.name,
      age: this.age
    }
  );
  console.log(person)
}


</script>



<!-- 
<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template> -->
