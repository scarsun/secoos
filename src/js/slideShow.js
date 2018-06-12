// /*
// 	封装轮播图
// */
// class Carousel{
// 	constructor({el,timeout=3000}){
// 		this.el=el;
// 		this.timeout=timeout;

// 		//鼠标移入事件
// 		let directionBtn = document.getElementsByClassName('direction-btn')[0];
// 		this.el.onmouseover=()=>{
// 			directionBtn.style.display="block";
// 			//清除定时器
// 			clearInterval(this.timer);
// 		}
// 		this.el.onmouseout=()=>{
// 			directionBtn.style.display="none";
// 			//自动播放
// 			this.autoMove();
// 		}

// 		//复制carousel-list的第一个li到最后
// 		let carouselList=this.el.getElementsByClassName("carousel-list")[0];
// 		let firstLi=carouselList.children[0];
// 		this.liWidth=firstLi.offsetWidth;//每张图片的宽度

// 		carouselList.innerHTML+=firstLi.outerHTML;//复制第一张图片
// 		this.imgLen=carouselList.children.length;//图片的个数

// 		//设置最新的UL宽度
// 		carouselList.style.width=this.imgLen*this.liWidth+"px";
// 		this.carouselList=carouselList;

// 		//添加Li的下标
// 		this.liIndex=0;
// 		//添加按钮的下标
// 		this.dotIndex=0;

// 		//获取按钮的长度
// 		this.dots=document.getElementsByClassName("dots")[0];
// 		this.dots.onmouseenter=()=>{
// 			//清除定时器
// 			clearInterval(this.timer);
// 		}
// 		this.dots.onmouseleave=()=>{
// 			//自动播放
// 			this.autoMove();
// 		}
// 		this.dotLen=this.dots.children.length;

// 		for(let i=0;i<this.dotLen;i++){
// 			this.dots.children[i].onclick=()=>{
// 				this.liIndex=i;
// 				this.dotIndex=i;

// 				//让Ul运动
// 				bufferMove(this.carouselList,{left:-this.liIndex*this.liWidth});
// 				//切换按钮
// 				this.dotMove();
// 			}
// 		}

// 		//给左侧按钮添加点击事件
// 		let prev=this.el.getElementsByClassName("prev")[0];
// 		prev.onclick=()=>{
// 			this.leftMove();
// 		}

// 		//给右侧按钮添加点击事件
// 		let next=this.el.getElementsByClassName("next")[0];
// 		next.onclick=()=>{
// 			this.rightMove();
// 		}
// 		//自动播放
// 		this.autoMove();

// 	}
// 	autoMove(){
// 		this.timer=setInterval(()=>{
// 			this.rightMove();
// 		},this.timeout);
// 	}
// 	leftMove(){
// 		//图片向左运动
// 		this.liIndex--;
// 		if(this.liIndex<0){
// 			this.carouselList.style.left=-(this.imgLen-1)*this.liWidth+"px";
// 			this.liIndex=this.imgLen-2;
// 		}
// 		bufferMove(this.carouselList,{left:-this.liIndex*this.liWidth});
// 		//按钮切换
// 		this.dotIndex--;
// 		this.dotMove();

// 	}
// 	rightMove(){
// 		//图片向右运动
// 		this.liIndex++;

// 		if(this.liIndex>=this.imgLen){
// 			this.carouselList.style.left=0;
// 			this.liIndex=1;
// 		}
// 		bufferMove(this.carouselList,{left:-this.liIndex*this.liWidth});
// 		//按钮切换
// 		this.dotIndex++;
// 		this.dotMove();
// 	}
// 	dotMove(){
// 		//左侧方向的判断
// 		if(this.dotIndex<0){
// 			this.dotIndex=this.dotLen-1;
// 		}
// 		//右侧方向判断
// 		if(this.dotIndex >=this.dotLen){
// 			this.dotIndex=0;
// 		}
// 		for(let i=0;i<this.dotLen;i++){
// 			this.dots.children[i].className="";
// 		}
// 		this.dots.children[this.dotIndex].className="active";
// 	}
// }