// components/keyboard.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 是否显示工具条左边的"取消"按钮
		cancelBtn: {
			type: Boolean,
			value: true
		},
		// 是否显示工具条右边的"完成"按钮
		confirmBtn: {
			type: Boolean,
			value: true
		},
		// 是否显示车牌号键盘
		isCarBoard:{
			type: Boolean,
			value: false
		},
		// 车牌号中英切换
		abc:{
			type: Boolean,
			value: false
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		// 车牌输入时，abc=true为输入车牌号码，bac=false为输入省份中文简称
		areaList: [
			['京',
				'沪',
				'粤',
				'津',
				'冀',
				'豫',
				'云',
				'辽',
				'黑',
				'湘'
			],
			[
				'皖',
				'鲁',
				'苏',
				'浙',
				'赣',
				'鄂',
				'桂',
				'甘',
				'晋',
				'陕',
			],
			[
				'蒙',
				'吉',
				'闽',
				'贵',
				'渝',
				'川',
				'青',
				'琼',
				'宁',
				'挂',
			],
			[
				'藏',
				'港',
				'澳',
				'新',
				'使',
				'学'
			]
		],
		EngKeyBoardList: [
			[1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				0,
			],
			[
				'Q',
				'W',
				'E',
				'R',
				'T',
				'Y',
				'U',
				'I',
				'O',
				'P',
			],
			[
				'A',
				'S',
				'D',
				'F',
				'G',
				'H',
				'J',
				'K',
				'L',
				'Z',
			],
			[
				'X',
				'C',
				'V',
				'B',
				'N',
				'M'
			]
		]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		carInputClick(e) {
			let {
				i,
				j
			} = e.currentTarget.dataset
			let value = '';
			// 不同模式，获取不同数组的值
			if (this.data.abc) {
				value = this.data.EngKeyBoardList[i][j];
			} else {
				value = this.data.areaList[i][j];
			}
			console.log("value", value)
			this.triggerEvent('carValue', value);
		},
		// 修改汽车牌键盘的输入模式，中文|英文
		changeCarInputMode() {
			this.setData({
				abc: !this.data.abc
			})
		},
		// 点击退格键
		backspaceClick() {
			this.triggerEvent('myevent', 'backspace');
			clearInterval(this.timer); //再次清空定时器，防止重复注册定时器
			this.timer = setInterval(() => {
				this.triggerEvent('myevent', 'backspace');
			}, 250);
		},
		clearTimer() {
			clearInterval(this.timer);
		},
		// 输入完成
		onConfirm() {
			this.triggerEvent('myevent', 'confirm');
		},
		// 取消输入
		onCancel() {
			this.triggerEvent('myevent', 'cancel');
		},
	}
})