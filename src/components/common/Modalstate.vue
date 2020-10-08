<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog" :class="modalTyoe">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- //@click="$emit(submit)"向父组件传递事件 -->
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            @click="$emit('submit')"
            >{{ surerText }}</a
          >
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 2"
            @click="$emit('cancel')"
            >{{ cancelText }}</a
          >
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{
              surerText
            }}</a>
            <a
              href="javascript:;"
              class="btn btn-default"
              @click="$emit('cancel')"
              >{{ cancelText }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modalstate",
  props: {
    //弹框类型，大large。中middle，小small，表单form
    modalTyoe: {
      type: String,
      default: "form",
    },
    //标题
    title: String,
    //按钮类型: 1:确定按钮2：取消按钮3:确定和取消
    btnType: String,
    surerText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: false,
  },
};
</script>

<style lang="scss">
@import "./../../assets/scss/modal.scss";
</style>
