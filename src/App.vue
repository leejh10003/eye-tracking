<template>
<div v-if="!!current.children">
  <div style="height: calc(2em + 10px); margin: 0; padding: 0">{{sentence}}</div>
  <el-row v-for="(row, rowIndex) in align" :key="rowIndex">
    <el-col v-for="columnIndex in row" :span="spanForCurrent" :key="columnIndex">
      <el-button :style="{width: `${100 / align[0].length}vw`, height: `calc(${100 / align.length}vh - ${2 / align.length}em - ${22 / align.length}px)`}" @click="(e) => click(rowIndex, columnIndex)">{{itemFromIndex(rowIndex, columnIndex).name}}</el-button>
    </el-col>
  </el-row>
</div>
<div v-else>
  {{sentence}}
</div>
</template>
<style>
</style>
<script>
import _ from 'lodash'
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
  computed: {
    current() {
      var current = _.cloneDeep({
        children: this.entities
      })
      for (var i = 0; i < this.workingSet.length; i++) {
        current = _.cloneDeep(current.children[this.workingSet[i]])
      }
      return current
    },
    sentence(){
      var toReturn = []
      var current = _.cloneDeep({
        children: this.entities
      })
      for (var i = 0; i < this.workingSet.length; i++) {
        if (toReturn.length < 1 || current.children[this.workingSet[i]].replace !== true){
          toReturn.push(current.children[this.workingSet[i]].name)
        } else {
          toReturn[toReturn.length - 1] = current.children[this.workingSet[i]].name
        }
        current = _.cloneDeep(current.children[this.workingSet[i]])
      }
      return toReturn.join(' ')
    },
    spanForCurrent(){
      if (this.current.children.length === 3){
        return 8
      } else {
        return 12
      }
    },
    align(){
      if (this.current.children.length === 4){
        return [[0, 1], [0, 1]]
      } else if (this.current.children.length === 3) {
        return [[0, 1, 2]]
      } else {
        return [[0, 1]]
      }
    }
  },
  methods: {
    click(rowIndex, colIndex){
      console.log(rowIndex, colIndex)
      this.workingSet.push(this.restoreIndex(rowIndex, colIndex))
    },
    restoreIndex(rowIndex, columnIndex){
      return rowIndex * this.align[0].length + columnIndex
    },
    itemFromIndex(rowIndex, columnIndex){
      return this.current.children[this.restoreIndex(rowIndex, columnIndex)]
    }
  },
  data (){
    return {
      workingSet: [0, 1],
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
