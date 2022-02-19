<template>
<div>
  <div v-if="current.length === 4">length 4</div>
  <div v-if="current.length === 3">length 3</div>
  <div v-if="current.length === 2">length 2</div>
</div>
</template>

<script>
const entities = [{
  name: '상반신',
  children: [{
    name: '머리',
    children: [{
      name: '가려워'
    }, {
      name: '정리해줘'
    }, {
      name: '얼굴',
      children: [{
      name: '이마',
        children: [{
          name: '긁어줘'
        }, {
          name: '데스오웬 발라줘'
        }, {
          name: '왼쪽',
          children: [{
            name: '데스오웬 발라줘'
          }, {
            name: '긁어줘'
          }]
        }, {
          name: '오른쪽',
          children: [{
            name: '데스오웬 발라줘'
          }, {
            name: '긁어줘'
          }]
        }]
      }, {
        name: '뺨',
        children: [{
          name: '오른쪽',
          children: [ {
            name: '긁어줘'
          }, {
            name: '데스오웬 발라줘'
          }]
        }, {
          name: '왼쪽',
          children: [{
            name: '긁어줘'
          }, {
            name: '데스오웬 발라줘'
          }]
        }, {
          name: '긁어줘'
        }, {
          name: '데스오웬 발라줘'
        }]
      }, {
        name: "입 주변",
        children: [{
          name: '닦아줘'
        }, {
          name: '턱', 
          children: [{
            name: '긁어줘'
          }, {
            name: '데스오웬 발라줘'
          }]
        }]
      }, {
        name: '전체', 
        children: [{
          name: '긁어줘'
        }, {
          name: '데스오웬 발라줘'
        }]
      }]
    }, {
      name: '목',
      children: [{
        name: '안마'
      }, {
        name: '배게',
        children: [{
          name: '높여줘'
        }, {
          name: '낮춰줘'
        }, {
          name: '두께 늘려줘'
        }, {
          name: '두께 낮춰줘'
        }]
      }]
    }]
  }, {
    name: '등',
    children: [{
      name: '긁어줘'
    }, {
      name: '안마',
      children: [{
        name: '안마기'
      }, {
        name: '훑어줘'
      }]
    }, {
      name: '앞으로 기울여줘'
    }, {
      name: '세워줘'
    }, {
      name: '눕혀줘' 
    }]
  }, {
    name: '팔',
  },{
    name: '배',
  }]
}, {
  name: '하반신',
  children: [{
    name: '다리'
  }, {
    name: '엉덩이'
  }, {
    name: '발'
  }, {
    name: '허벅지'
  }]
}, {
  name: '숨막혀'
}, {
  name: '아파'
}]
export default {
  name: 'App',
  data (){
    return {
      workingSet: [],
      current: entities,
      entities
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
