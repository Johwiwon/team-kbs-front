<template>
  <div>
    파일등록

    <v-file-input label="File input" @change="selectFile"></v-file-input>

    <v-btn @click="submit">파일업로드</v-btn>
  </div>
</template>

<script>
export default {
  name: "App",
    selectFile(file) {
    this.image = file;
  },
  data () {
      return {
        //     
        playerOptions : {
          playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //        
          autoplay : false, //  true,           。
          muted : false, //              。
          loop : false, //           。
          preload : 'auto', //       <video>                 。auto         ,        （       ）
          language : 'zh-CN',
          aspectRatio : '16:9', //           ，                 。          -           （  "16:9" "4:3"）
          fluid : true, //  true ，Video.js player       。    ，             。
          sources : [ {
            type : "",
            src : 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'//url  
          } ],
          poster : "", //      
          // width: document.documentElement.clientWidth,
          notSupportedMessage : '        ，     ', //    Video.js               。
          controlBar : {
            timeDivider : true,//             
            durationDisplay : true,//      
            remainingTimeDisplay : false,//          
            fullscreenToggle : true //    
          }
        }
      }
    },

  created() {},
};
</script>
