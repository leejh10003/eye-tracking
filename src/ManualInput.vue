<template>
  <div style="display: flex; flex-direction: column; justify-content: space-between; height: calc(600vh / 7)">
    <div style="font-size: 5vh; text-align: center; font-weight: bold">
      {{current}}
    </div>
    <div style="width: 100vw">
      <el-row style="display: flex; justify-content: center;">
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅂ'))">{{shiftPressedKey('ㅂ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅈ'))">{{shiftPressedKey('ㅈ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㄷ'))">{{shiftPressedKey('ㄷ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㄱ'))">{{shiftPressedKey('ㄱ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅅ'))">{{shiftPressedKey('ㅅ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅛ'))">{{shiftPressedKey('ㅛ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅕ'))">{{shiftPressedKey('ㅕ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅑ'))">{{shiftPressedKey('ㅑ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅐ'))">{{shiftPressedKey('ㅐ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅔ'))">{{shiftPressedKey('ㅔ')}}</el-button>
        <el-button class="key" @click="erase">⌫</el-button>
      </el-row>
      <el-row style="display: flex; justify-content: center">
        <el-button class="key" @click="clear">ⓧ</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅁ'))">{{shiftPressedKey('ㅁ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㄴ'))">{{shiftPressedKey('ㄴ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅇ'))">{{shiftPressedKey('ㅇ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㄹ'))">{{shiftPressedKey('ㄹ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅎ'))">{{shiftPressedKey('ㅎ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅗ'))">{{shiftPressedKey('ㅗ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅓ'))">{{shiftPressedKey('ㅓ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅏ'))">{{shiftPressedKey('ㅏ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅣ'))">{{shiftPressedKey('ㅣ')}}</el-button>
      </el-row>
      <el-row style="display: flex; justify-content: center">
        <el-button class="key" :type="shiftStatus === 2 ? 'primary' : ''" @click="pressShift">{{shiftStatus === shiftEnums.none ? '⇧': '⬆'}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅋ'))">{{shiftPressedKey('ㅋ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅌ'))">{{shiftPressedKey('ㅌ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅊ'))">{{shiftPressedKey('ㅊ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅍ'))">{{shiftPressedKey('ㅍ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅠ'))">{{shiftPressedKey('ㅠ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅜ'))">{{shiftPressedKey('ㅜ')}}</el-button>
        <el-button class="key" @click="keyPress(shiftPressedKey('ㅡ'))">{{shiftPressedKey('ㅡ')}}</el-button>
        <el-button class="key" :type="shiftStatus === 2 ? 'primary' : ''" @click="pressShift">{{shiftStatus === shiftEnums.none ? '⇧': '⬆'}}</el-button>
      </el-row>
      <el-row style="display: flex; justify-content: center">
        <el-button class="key" @click="keyPress(shiftPressedKey(' '))" style="width: 70vw"/>
      </el-row>
    </div>
  </div>
</template>
<style>
.key{
  width: calc(100vw/11 - 15px);
  height: calc(100vh / 7);
  font-size: calc(100vh / 14);
}
</style>
<script>
import * as Hangul from 'hangul-js'
export default {
  data (){
    return {
      shiftEnums: {
        none: 0,
        temporal: 1,
        permanent: 2
      },
      shiftStatus: 0,
      current: "",
    }
  },
  methods: {
    shiftPressedKey(key){
      if (this.shiftStatus == this.shiftEnums.none){
        return key
      } else {
        switch(key){
        case 'ㅂ': return 'ㅃ';
        case 'ㅈ': return 'ㅉ';
        case 'ㄷ': return 'ㄸ';
        case 'ㄱ': return 'ㄲ';
        case 'ㅅ': return 'ㅆ';
        case 'ㅐ': return 'ㅒ';
        case 'ㅔ': return 'ㅖ';
        default: return key;
      }
      }
    },
    erase(){
      const current = Hangul.disassemble(this.current);
      this.current = Hangul.assemble(current.splice(0, current.length - 1));
    },
    clear(){
      this.current = ""
    },
    pressShift(){
      switch(this.shiftStatus){
        case this.shiftEnums.none:
          this.shiftStatus = this.shiftEnums.temporal;
          break;
        case this.shiftEnums.temporal:
          this.shiftStatus = this.shiftEnums.permanent;
          break;
        default:
          this.shiftStatus = this.shiftEnums.none;
      }
    },
    keyPress(input){
      this.current = Hangul.assemble(Hangul.disassemble(this.current).concat([input]))
      if (this.shiftStatus != this.shiftEnums.permanent){
        this.shiftStatus = this.shiftEnums.none;
      }
    }
  }
}
</script>
