Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    regionShow: {
      type: Boolean,
      observer: function (newVal, oldVal) {
        this.setData({
          isShow: newVal
        });
      }
    },
    regionDatas: {
      type: Array,
      observer: function (newVal, oldVal) {
        this.setData({
          datas: newVal
        });
        this.initTabs();
      }
    }
  },
  data: {
    // 这里是一些组件内部数据
    isShow: false,
    datas: [],
    tabList: []
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },


    // —————————————————————————数据———————————————————————————————
    /**
     * 初始化tab
     */
    initTabs: function () {
      let tabArray = [];
      let datas = this.data.datas;
      if (datas && datas.length != 0) {
        tabArray.push({
          selectIndex: -1,
          name: '请选择',
          node: {},
          list: datas
        });
      }
      this.setData({ tabList: tabArray });
    },






    // —————————————————————————事件———————————————————————————————
    onMaskTouchMove: function (e) {
    },

    // onRegionTouchMove: function (e) { },

    /**
     * 点击mask的时候
     * @param {*} e 
     */
    clickMask: function (e) {
      let id = e.target.id;
      if (id === 'region_picker_mask') {
        this.setData({ isShow: false });
        this.triggerEvent('region-event-show', { show: false });
        this.initTabs();
      }
    },

    /**
     * 点击关闭
     * @param {*} e 
     */
    clickClose: function (e) {
      this.setData({ isShow: false });
      this.triggerEvent('region-event-show', { show: false });
      this.initTabs();
    },

    clickTabItem: function (e) {
      // 点击的第几个tab
      let index = e.target.dataset.index;
      let tabList = this.data.tabList;
      let array = [];
      for (let i = 0; i < index + 1; i++) {
        array.push(tabList[i]);
      }
      this.setData({
        tabList: array
      });
    },

    /**
     * 点击item时的事件
     * @param {*} e 
     */
    clickItem: function (e) {
      let index = e.target.dataset.index;
      let tabList = this.data.tabList;
      let pre = tabList[tabList.length - 1];
      pre.selectIndex = index;
      pre.name = pre.list[index].name;
      pre.node = pre.list[index];
      // 判断是否有下一个
      if (pre.list[index].children && pre.list[index].children.leng != 0) {
        let next = {
          selectIndex: -1,
          name: '',
          node: {},
          list: pre.list[index].children
        }
        tabList.push(next);
        this.setData({
          tabList: tabList
        });
      } else {
        this.setData({
          tabList: tabList
        });

        // 选完了 关闭dialog
        this.setData({ isShow: false });
        this.triggerEvent('region-event-show', { show: false });
        this.initTabs();
        this.triggerEvent('region-event-confirm', { select: tabList });
      }
    }
  }
})