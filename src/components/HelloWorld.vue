<template>
  <div class="hello">
 			<div class="top">
 					<div class="left">
 							<span><img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/></span>
 							<span>返回</span>
 					</div>
 					<div class="m">商品列表</div>
 					<div class="right">
 						<ul>
 							<li></li>
 							<li></li>
 							<li></li>
 						</ul>
 					</div>
 			</div>
 			<!--搜索框-->
 			<div class="header" v-show="bool">
 					<div class="ss">
 						 <input type="text" placeholder="请输入商品名称"/>
 					</div>
 					<p>设备：天河一号</p>
 					<div class="nav">
 						<ul>
 							<li>休闲零食</li>
 							<li>优质水果</li>
 							<li>米面粮油</li>
 							<li>肉禽奶蛋</li>
 						</ul>
 						<ul>
 							<li>鲜花糕点</li>
 							<li>宁夏特产</li>
 							<li>优质水果</li>
 							<li>肉禽奶蛋</li>
 						</ul>
 					</div>
 					<div class="pagation1">
 						<div class="on"></div>
 						<div></div>
 						<div></div>
 					</div>
 					<div class="fix">预定商品</div>
 			</div>
 			<!--中间内容-->
 			<div class="container-t">
 				<div class="l">
 					<img src="../../../商品列表切、标/切图/商品列表粉/宁夏优品@2x.png"/>
 				</div>
 				<div class="m" v-on:click="show()">
 					<img src="../../../商品列表切、标/切图/商品列表粉/下拉@2x.png"/>
 				</div>
 				<div class="r">
 					<img src="../../../商品列表切、标/切图/商品列表粉/个人中心-@2x.png"/>
 				</div>
 			</div>
 			<div class="container wrapper" rel="wrapper">
 				<ul>
 					<li></li>
 					<li class="on"></li>
 					<li></li>
 				</ul>
 				<div class="con">
	 				<ol>
	 					<li></li>
	 					<li></li>
	 					<li></li>
	 					<li></li>
	 					<li></li>
	 					<li></li>	
	 				</ol>
	 				<div class="position">
		 					<img src="../../../商品列表切、标/切图/商品列表粉/购物车-@3x.png"/>
		 				</div>
	 			</div>
 			</div>
 			<div class="footer">
 				<div class="l">
 					<p>总价：<span>30元</span></p>
 				</div>
 				<div class="r">
 						<p>确认支付</p>
 				</div>
 			</div>
  </div>
</template>
   
<script>
	import BScroll from 'better-scroll'
//	let wrapper = document.querySelector('.wrapper')
//let scroll = new BScroll(wrapper, {})
export default {
	
  name: 'HelloWorld',
  data () {
    return {
     	bool:false,
     	pulldown: true
    }
  },
  methods:{
  	show:function(){
  		this.bool=!this.bool;
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
}
.top{
	width:94%;
	background: black;
	color: #fff;
	padding: 2% 3%;
	display:flex ;
	div{
     align-items:center;
     justify-content: space-around;
	}
	.left{
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		span:nth-child(1){
			margin-right:5px;
			img{
				width:75%;
				padding-top: 5px;
			}
		}
	}
	.m{
		width: 60%;
		text-align:center;
		font-size: 20px;
	}
	.right{
		width: 20%;
		margin: auto 0;	
		ul{
			width:100%;
			display:flex;
			justify-content: center;
			li{
				background: #FFFFFF;
				width: 10px;
				height: 10px;
				border-radius: 10px;
				margin-left:5px;
			}
		}
	}
}
/*header的样式*/
.header{
	background:#F9A7BE;
	width: 100%;
	height: 250px;
	.ss{
		width:100%;
		input{
			width:80%;
			margin-top: 11px;
			height: 31px;
			box-shadow: #E81D04 1px 17px 33%;
			border-radius:5px;
			font-size: 18px;
			color: #B3B3B3;
			margin-left: 10px;
			padding-left: 50px;
			background:url(../../../商品列表切、标/切图/商品列表粉-展开/搜索@2x.png) no-repeat 12px;
			background-size:8%;
			background-color: #fff;
			font-size: 16px;
		}
	}
	p{
		font-size:20px;
		color: #FFFFFF;
		margin:9px 0px 17px 20px;
	}
	.nav{
		ul{
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: space-around;
			margin-bottom: 12px;
			text-align: center;
			li{
			   width: 21%;
			   padding: 1% 0;
			   background: url(../../../商品列表切、标/切图/商品列表粉-展开/休闲零食按钮@3x.png) no-repeat;
			   background-size: 100% 100%;
			   font-size: 16px;
			   color: #000000;
			}
		}
	}
	.pagation1{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		div{
			width: 62px;
			height: 3px;
			background: #FFFFFF;
			
			margin-left: 5px;
		}
		.on{
			background: #000000;
		}
	}
	.fix{
		width:94%;
		height:41px;
		background: #FFFFFF;
		font-size:20px;
		color: #000000;
		line-height: 41px;
		border-radius: 5px;
		margin: 12px 3%;
		text-align: center;
		
	}
}
/*中间样式*/
.container-t{
	width: 100%;
	height:80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	div{
		img{
			width:65%;
		}
	}
	.m{
		margin-left:-30%;
	}
}
.container{
	width: 100%;
	height:600px;
	margin-top: -2%;
	background: url(../../../商品列表切、标/切图/商品列表粉/背景粉@2x.png) no-repeat 100% 0%;
	background-size: 100% 100%;
	overflow: hidden;
	ul{
		width: 100%;
		display: flex;
		padding-top: 5%;
		align-content: center;
		justify-content: center;
		li{
			width: 10px;
			height: 10px;
			border-radius: 10px;
			border: 1px solid #FFFFFF;
	    margin-left: 10px;
		}
		.on{
			background: #FFFFFF;
		}
	}
	.con{
		width:94%;
		padding: 2% 3%;
		ol{
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			li{
				width: 48%;
				height: 160px;
				margin-top:3%;
				background: url(../../../商品列表切、标/切图/商品列表粉/商品背景@2x.png) no-repeat 100% 100%;
				background-size:160px 160px;
			}
		}
		.position{
			position:fixed;
			top:80%;
			img{
				width:40%;
			}
		}
	}
}
.footer{
	width: 94%;
	padding:2% 3%;
	display: flex;
	justify-content: space-between;
	text-align: center;
	position:fixed;
  opacity: 0.86;
	background: #FFFFFF;
	bottom: 0;
	color: #000000;
	
	.l{
		span{
			color: red;
			font-size:18px;
		}
	}
	.r{
		width:103px;
		height: 36px;
		line-height: 36px;
		background: url(../../../商品列表切、标/切图/商品列表粉/确认支付@2x.png) no-repeat 50% 0%;
		background-size: 100% 100%;
		text-align: center;
	}
}
</style>
