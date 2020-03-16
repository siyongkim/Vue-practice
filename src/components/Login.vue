<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-overflow-btn
         class="my-2"
         :items="items"
         label="서버리스트"
       ></v-overflow-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="사용자ID" :rules="loginRulesID" hide-details="auto"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          v-model = "password"
          :rules="loginRulesPW"
          label="비밀번호"
          filled
          color="blue"
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="center">
      <v-btn color="primary">로그인</v-btn>
      <v-btn color="error">취소</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',

    data: () => ({
      loginRulesID:[
        value => !!value || '필수입니다.',
      ],
      loginRulesPW:[
        value => !!value || '필수입니다.',
      ],
      items:[
        'NR01KO',
        'NR_TEST5,'
      ]
    }),
  }
</script>
