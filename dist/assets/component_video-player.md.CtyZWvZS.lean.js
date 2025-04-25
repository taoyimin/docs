import{p as o,S as y}from"./chunks/theme.D4xjM7YD.js";import"./chunks/base.DP2rzg_V.js";/* empty css                       *//* empty css                               *//* empty css                      *//* empty css                         *//* empty css                     *//* empty css                              *//* empty css                      *//* empty css                   *//* empty css                        *//* empty css                     *//* empty css                         *//* empty css                      *//* empty css                            *//* empty css                            *//* empty css                      */import"./chunks/select.l0sNRNKZ.js";/* empty css                     *//* empty css                        */import"./chunks/dict-select.l0sNRNKZ.js";import"./chunks/grid-cascader.l0sNRNKZ.js";/* empty css                         *//* empty css                       *//* empty css                     *//* empty css                      *//* empty css                         */import{d as A,p as D,o as e,c as g,G as l,F as m,_ as c,b as u,B as k,b2 as d,w as n,j as s,a as i}from"./chunks/framework._j0QeVG-.js";const C=A({__name:"video-player.md.demo.a8234296",setup(r){const h=D({url:"https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",core:"xgplayer-hls"}),a=[[{prop:"url",label:"视频流地址",fieldType:"input",span:15},{prop:"core",label:"播放器内核",fieldType:"select",data:[{label:"xgplayer-hls",value:"xgplayer-hls"},{label:"xgplayer-flv",value:"xgplayer-flv"},{label:"xgplayer-hls.js",value:"xgplayer-hls.js"},{label:"xgplayer-flv.js",value:"xgplayer-flv.js"},{label:"metaplayer-hls-soft",value:"metaplayer-hls-soft"},{label:"metaplayer-plugin-float",value:"metaplayer-plugin-float"},{label:"metaplayer-hls-hard",value:"metaplayer-hls-hard"},{label:"metaplayer-plugin-peer",value:"metaplayer-plugin-peer"},{label:"metaplayer-webRTC",value:"metaplayer-webRTC"},{label:"metaplayer-websocket",value:"metaplayer-websocket"}],span:9}]];return(t,E)=>{const p=o,F=y;return e(),g(m,null,[l(p,{model:h.value,fields:a},null,8,["model"]),l(F,{url:h.value.url,core:h.value.core},null,8,["url","core"])],64)}}}),v=c(C,[["__scopeId","data-v-c52a0072"]]),B={};function f(r,h){const a=y;return e(),u(a,{id:"abc123456"})}const b=c(B,[["render",f],["__scopeId","data-v-66801640"]]),x={tabindex:"0"},ls=JSON.parse('{"title":"Video Player 视频播放器","description":"","frontmatter":{},"headers":[],"relativePath":"component/video-player.md","filePath":"component/video-player.md","lastUpdated":1745556835000}'),P={name:"component/video-player.md"},ns=Object.assign(P,{setup(r){return(h,a)=>{const t=k("demo"),E=k("el-button"),p=k("el-popover");return e(),g("div",null,[a[12]||(a[12]=d("",10)),l(t,{customClass:"",sourceCode:`<template>
  <liv-data-form :model="form" :fields />
  <liv-video-player :url="form.url" :core="form.core"></liv-video-player>
</template>

<script setup lang="ts">
import type { DataFormFields, VideoPlayerCore } from 'liv-web';
import { ref } from 'vue';

interface FormData {
  url: string;
  core: VideoPlayerCore;
}

const form = ref<FormData>({
  url: 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
  core: 'xgplayer-hls',
});

const fields: DataFormFields = [
  [
    {
      prop: 'url',
      label: '视频流地址',
      fieldType: 'input',
      span: 15,
    },
    {
      prop: 'core',
      label: '播放器内核',
      fieldType: 'select',
      data: [
        {
          label: 'xgplayer-hls',
          value: 'xgplayer-hls',
        },
        {
          label: 'xgplayer-flv',
          value: 'xgplayer-flv',
        },
        {
          label: 'xgplayer-hls.js',
          value: 'xgplayer-hls.js',
        },
        {
          label: 'xgplayer-flv.js',
          value: 'xgplayer-flv.js',
        },
        {
          label: 'metaplayer-hls-soft',
          value: 'metaplayer-hls-soft',
        },
        {
          label: 'metaplayer-plugin-float',
          value: 'metaplayer-plugin-float',
        },
        {
          label: 'metaplayer-hls-hard',
          value: 'metaplayer-hls-hard',
        },
        {
          label: 'metaplayer-plugin-peer',
          value: 'metaplayer-plugin-peer',
        },
        {
          label: 'metaplayer-webRTC',
          value: 'metaplayer-webRTC',
        },
        {
          label: 'metaplayer-websocket',
          value: 'metaplayer-websocket',
        },
      ],
      span: 9,
    },
  ],
];
<\/script>

<style lang="scss" scoped>
.liv-video-player {
  height: 400px;
}
</style>
`,options:"{}"},{highlight:n(()=>a[0]||(a[0]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-data-form"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"model"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fields"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-video-player"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"url"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form.url"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"core"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"form.core"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-video-player"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," type"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { DataFormFields, VideoPlayerCore } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'liv-web'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"interface"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," FormData"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  url"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," string"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  core"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," VideoPlayerCore"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," form"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"FormData"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  url: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  core: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-hls'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," fields"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," DataFormFields"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'url'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'视频流地址'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'input'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      span: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"15"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      prop: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'core'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'播放器内核'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      fieldType: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'select'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      data: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-hls'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-hls'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-flv'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-flv'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-hls.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-hls.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-flv.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'xgplayer-flv.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-hls-soft'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-hls-soft'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-plugin-float'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-plugin-float'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-hls-hard'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-hls-hard'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-plugin-peer'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-plugin-peer'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-webRTC'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-webRTC'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          label: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-websocket'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"          value: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'metaplayer-websocket'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      span: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"9"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"];")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"scss"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".liv-video-player {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  height: 400px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:n(()=>[l(v)]),_:1}),a[13]||(a[13]=s("h2",{id:"动态加载",tabindex:"-1"},[i("动态加载 "),s("a",{class:"header-anchor",href:"#动态加载","aria-label":'Permalink to "动态加载"'},"​")],-1)),a[14]||(a[14]=s("p",null,[i("大部分情况下视频地址需要动态加载，只需在全局注入"),s("a",{href:"#业务注入"},"加载视频播放配置"),i("业务，后续使用组件直接设置"),s("code",null,"id"),i("属性即可自动加载视频地址及播放配置。")],-1)),l(t,{customClass:"",sourceCode:`<template>
  <liv-video-player id="abc123456"></liv-video-player>
</template>

<style lang="scss" scoped>
.liv-video-player {
  height: 400px;
}
</style>
`,options:"{}"},{highlight:n(()=>a[1]||(a[1]=[s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-video-player"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," id"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"abc123456"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"liv-video-player"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"scss"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".liv-video-player {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  height: 400px;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1)])),default:n(()=>[l(b)]),_:1}),a[15]||(a[15]=s("h2",{id:"属性",tabindex:"-1"},[i("属性 "),s("a",{class:"header-anchor",href:"#属性","aria-label":'Permalink to "属性"'},"​")],-1)),s("table",x,[a[11]||(a[11]=s("thead",null,[s("tr",null,[s("th",null,"属性名"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"默认值")])],-1)),s("tbody",null,[a[8]||(a[8]=s("tr",null,[s("td",null,"url"),s("td",null,"视频流地址"),s("td",null,[s("code",null,"string")]),s("td",null,"—")],-1)),a[9]||(a[9]=s("tr",null,[s("td",null,"id"),s("td",null,[i("视频id，需注入"),s("a",{href:"#业务注入"},"加载视频播放配置"),i("业务后使用")]),s("td",null,[s("code",null,"string")]),s("td",null,"—")],-1)),s("tr",null,[a[5]||(a[5]=s("td",null,"core",-1)),a[6]||(a[6]=s("td",null,[s("a",{href:"#播放器内核"},"播放器内核")],-1)),s("td",null,[a[4]||(a[4]=s("code",null,"VideoPlayerCore",-1)),l(p,{placement:"bottom",width:"fit-content",trigger:"click",teleported:!1,"popper-style":"max-width: 600px;white-space: wrap;"},{reference:n(()=>[l(E,{plain:"",text:"",type:"info",style:{"padding-left":"10px","padding-right":"10px"}},{default:n(()=>a[2]||(a[2]=[s("i",{class:"el-icon"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[s("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"})])],-1)])),_:1})]),default:n(()=>[a[3]||(a[3]=s("code",null,"'xgplayer-hls' | 'xgplayer-flv' | 'xgplayer-hls.js' | 'xgplayer-flv.js' | 'metaplayer-hls-soft' | 'metaplayer-plugin-float' | 'metaplayer-hls-hard' | 'metaplayer-plugin-peer' | 'metaplayer-webRTC' | 'metaplayer-websocket' ",-1))]),_:1})]),a[7]||(a[7]=s("td",null,"xgplayer-hls",-1))]),a[10]||(a[10]=s("tr",null,[s("td",null,"keep-alive-interval"),s("td",null,[i("保活间隔时间，每隔一段时间会重新"),s("a",{href:"#业务注入"},"加载视频播放配置"),i("，0表示不保活")]),s("td",null,[s("code",null,"number")]),s("td",null,"0")],-1))])]),a[16]||(a[16]=d("",13))])}}});export{ls as __pageData,ns as default};
