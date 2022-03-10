<template>
<div v-if="!!current.children">
  <div style="height: 10vh; font-size: 5vh; margin: 0; padding: 0">{{sentence}}</div>
  <el-row v-for="(row, rowIndex) in align" :key="rowIndex">
    <el-col v-for="columnIndex in row" :span="spanForCurrent" :key="columnIndex">
      <el-button :style="{'font-size': '5vh', width: `${100 / align[0].length}vw`, height: `calc(${530 / align.length / 7}vh)`}" @click="(e) => click(rowIndex, columnIndex)">{{itemFromIndex(rowIndex, columnIndex).name}}</el-button>
    </el-col>
  </el-row>
</div>
<div style="font-size: 5vh; margin: 0; padding: 0" v-else>
  <div style="height: 10vh; font-size: 5vh; margin: 0; padding: 0">{{sentence}}</div>
  <el-button style="font-size: 5vh; width: 100vw; height: calc(530vh/7)" @click="(e) => workingSet = []">재설정</el-button>
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
    replace: true,
    children: [{
      name: '가려워'
    }, {
      name: '정리해줘'
    }, {
      name: '얼굴',
      replace: true,
      children: [{
      name: '이마',
      replace: true,
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
        replace: true,
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
        replace: true,
        children: [{
          name: '닦아줘'
        }, {
          name: '턱', 
          replace: true,
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
      replace: true,
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
    replace: true,
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
    name: '다리',
    replace: true,
  }, {
    name: '엉덩이',
    replace: true,
  }, {
    name: '발',
    replace: true,
  }, {
    name: '허벅지',
    replace: true,
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
      workingSet: [],
      entities
    }
  }
}
</script>