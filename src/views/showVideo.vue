<template>
  <div class="input_video">
  <video-player class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
  ></video-player>
  </div>
</template>

<script>
export default {
  name: "App",

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
