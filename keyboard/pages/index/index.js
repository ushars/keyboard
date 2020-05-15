//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isCarBoard:false,
		carNumStr:[],
		carType:1,	// 车牌类型默认为1普通车牌,2为新能源车牌
		carBoxNum:7,
		abc:false
  },
  // 打开车牌号键盘
	openCarBoard(e){
    if(this.data.carNumStr.length>0){
			this.data.abc = true
		}else{
			this.data.abc = false
		}
		this.setData({
			isCarBoard:true,
			abc:this.data.abc
		})
  },
  // 关闭遮罩键盘
	closeMask(){
		this.setData({
			isCarBoard:false
		})
  },
  // 车牌号键盘点击事件
	onMyEvent(e){
    let type = e.detail
    switch(type){
			case "confirm":
        this.data.isCarBoard = false
        console.log("输出结果",this.data.carNumStr.join(""))
				break;
			case "cancel":
				this.data.isCarBoard = false
				break;
			case "backspace":
				if(this.data.carNumStr.length>0){
					this.data.carNumStr.pop()
					if(this.data.carNumStr.length<2){
						this.data.abc = false
					}
				}
				break;
		}
		this.setData({
      isCarBoard:this.data.isCarBoard,
      carNumStr:this.data.carNumStr,
      abc:this.data.abc
		})
  },
  // 车牌号选择
	carValue(e){
    let value = e.detail
    if(this.data.carNumStr.length < this.data.carBoxNum){
			this.data.carNumStr.push(value)
    }
    if(this.data.carNumStr.length>0){
			this.data.abc = true
		}
    this.setData({
			carNumStr:this.data.carNumStr,
			abc:this.data.abc
		})
  },
  // 切换车牌
	changeCarType(e){
    if(this.data.carType == 1){
			this.data.carType = 2
			this.data.carBoxNum = 8
		}else{
			this.data.carType = 1
			this.data.carBoxNum  = 7
			if(this.data.carNumStr && this.data.carNumStr.length == 8){
				this.data.carNumStr.pop();
			}
    }
    this.setData({
      carType:this.data.carType,
      carBoxNum:this.data.carBoxNum,
      carNumStr:this.data.carNumStr
    })
  }
})
