<script setup lang="ts">

const postList: HTMLElement[] = Array.from(document.querySelectorAll("a.largeimg"))

// 复制单页大图链接
async function copyImgLink() {
    if (postList) {
        let linkList = postList.map((el: any) => el.href)
        await navigator.clipboard.writeText(linkList.join("\n"))
        alert("复制成功！")
    }
}

// 下载单页链接txt
async function downloadImgLinks() {
    if (postList) {
        let linkList = postList.map((el: any) => el.href)
        const blob = new Blob([linkList.join("\n")], {
            type: "text/plain"
        })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = "Large Image Links.txt"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
}


</script>

<template>
    <div class="menu">
        <span>当前页面大图链接：</span>
        <button :disabled="postList.length <= 0" @click="copyImgLink">复制</button>
        <button :disabled="postList.length <= 0" @click="downloadImgLinks">下载</button>
    </div>

</template>

<style scoped>
.menu {
    position: fixed;
    height: 50px;
    background-color: rgb(66, 66, 66);
    width: 90vw;
    right: 65px;
    top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-inline: 15px;
    box-shadow: 0 0 5px deeppink;
    gap: 5px;
}

.menu input {
    height: 30px;
    width: 25px;
    background-color: rgb(110, 110, 110);
    border: 0.5px solid yellow;
    border-radius: 7px;
    color: white;

    &:disabled {
        background-color: rgb(134, 134, 134);
        color: rgb(77, 77, 77);
        border: 1px solid gainsboro;
        cursor: not-allowed;
    }
}

.menu button {
    position: relative;
    z-index: 2;
    height: 30px;
    border-radius: 7px;
    padding: 8px;
    margin: 0;
    color: white;
    border: 1px solid yellow;
    background-color: rgb(64, 0, 168);
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: orange;
    }

    &:disabled {
        background-color: rgb(134, 134, 134);
        color: rgb(77, 77, 77);
        border: 1px solid gainsboro;
        cursor: not-allowed;
    }
}
</style>