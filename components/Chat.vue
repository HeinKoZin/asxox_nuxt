<template>
  <div>
    <button
      @click="handleClickChat()"
      class="fixed bottom-0 right-20 bg-orange-600 text-white rounded-tl rounded-tr p-2 shadow-lg flex gap-2 items-center"
    >
      <i class="fa-regular fa-comments"></i>
      <h1>Message</h1>
    </button>

    <div
      class="fixed right-0 top-[128px] h-[calc(100%-128px)] bg-slate-50 z-50 shadow-lg flex chat_body"
      :class="{ 'w-[900px]': isChatOpenWidth, 'w-0': !isChatOpenWidth }"
    >
      <div class="w-[200px] border-r border-slate-300 h-full">
        <div
          class="h-[64px] border-b border-slate-300 flex bg-white justify-center items-center"
        >
          <h1 class="font-bold">Message</h1>
        </div>
        <div class="bg-white h-[calc(100%-64px)] chat_list">
          <div
            class="flex items-center px-3 border-b border-slate-300 py-2 gap-2"
          >
            <img
              :src="require(`~/assets/img/kbz.png`)"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h1 class="font-semibold">Hein Ko Zin</h1>
              <p class="text-slate-400 text-md chat_content">
                blah blah blahblah blah blahblah blah blah
              </p>
            </div>
          </div>
          <div
            class="flex items-center px-3 border-b border-slate-300 py-2 gap-2"
          >
            <img
              :src="require(`~/assets/img/kbz.png`)"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h1 class="font-semibold">Hein Ko Zin</h1>
              <p class="text-slate-400 text-md chat_content">
                blah blah blahblah blah blahblah blah blah
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[calc(100%-200px)] h-full">
        <div
          class="h-[64px] w-full flex justify-between items-center bg-white border-b border-slate-300 px-2"
        >
          <div>Chat</div>
          <div>
            <button @click="handleClickChat()" class="text-2xl cursor-pointer">
              <i class="fa-regular fa-circle-xmark text-red-500"></i>
            </button>
          </div>
        </div>
        <div class="h-[calc(100%-128px)] p-6">
          <div class="flex gap-2">
            <img
              :src="require(`~/assets/img/kbz.png`)"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div
              class="bg-orange-100 rounded-tr-full rounded-b-full py-1 px-4 drop-shadow"
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div
          class="h-[64px] w-full border-t border-slate-300 bg-white flex px-4 items-center gap-2"
        >
          <div class="w-[80%]">
            <input
              type="text"
              placeholder="Text message..."
              class="w-full focus:outline-none py-2"
            />
          </div>
          <div class="w-[20%] flex justify-end">
            <button
              class="bg-orange-500 text-white py-1 px-3 shadow rounded-sm flex justify-center items-center gap-2 hover:bg-orange-600"
            >
              <i class="fa-regular fa-paper-plane"></i> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChatOpenWidth: false,
      isChatOpen: false,
    };
  },

  methods: {
    handleClickChat() {
      this.isChatOpen = !this.isChatOpen;
      this.isChatOpenWidth = !this.isChatOpenWidth;
      console.log(this.isChatOpen);
    },
  },
};
</script>

<style lang="postcss" scoped>
.chat_body {
  transition: width 0.5s;
  box-shadow: -13px 2px 15px -4px rgba(0, 0, 0, 0.53);
}
.chat_list {
  overflow-y: auto;
  liststyle: none;
}
.chat_list::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.chat_list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.chat_list::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.chat_list::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.chat_content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100px;
}
</style>
