<template>
    <div class="layout-container">
        <div class="left-side-inner">
            <slot name="left-content"></slot>
        </div>
        <div class="right-content">
            <slot name="right-content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.layout-container {
    display: flex;
    .left-side-inner {
        width: 250px;
        background: #e6e5e5;

    }
    .right-content {
        flex: 1;
        height: calc(100vh - 2px);
        background: #f5f5f5;
        width: 100%;
    }
}
</style>