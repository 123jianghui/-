<template>
  <div class="hello">
 			<div class="top">
 					<div class="left">
 							<img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/>
 							<p>返回</p>
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
 						 <input type="text" placeholder="请输入商品名称" style="font-size: 28px;"/>
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
  align-items:center;
  justify-content: space-around;
	.left{
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30px;
			img{
				width:20%;
				padding-top: 5px;
				margin-right: 10%;
			}
	}
	.m{
		width: 60%;
		text-align:center;
		font-size:32px;
	}
	.right{
		width: 20%;
		margin: auto 0;	
		ul{
			width:100%;
			display:flex;
			justify-content: center;
			margin-left:20%;
			li{
				background: #FFFFFF;
				width: 20px;
				height:20px;
				border-radius: 20px;
				margin-left:5px;
			}
		}
	}
}
/*header的样式*/
.header{
	background:#F9A7BE;
	width:96%;
	padding: 0% 2%;
	height:477px;
	.ss{
		width:100%;
	  text-align: center;
		input{
			width:84%;
			margin-top: 22px;
			height: 81px;
			border-radius:5px;
			
			color: #B3B3B3;
			padding-left: 80px;
			background:url(../../../商品列表切、标/切图/商品列表粉-展开/搜索@2x.png) no-repeat 20px;
			background-size:8%;
			background-color: #fff;
			font-size: 16px;
		}
	}
	p{
		font-size:26px;
		color: #FFFFFF;
		margin:9px 0px 17px 20px;
	}
	.nav{
		ul{
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: space-around;
			margin-bottom: 22px;
			text-align: center;
			li{
			   width:24%;
			   background: url(../../../商品列表切、标/切图/商品列表粉-展开/休闲零食按钮@3x.png) no-repeat;
			   background-size: 100% 100%;
			   font-size:26px;
			   color: #000000;
			   padding:1% 0;
			   margin-left: 30px;
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
			margin: 22px 5px 24px 0;
			height:5px;
			background: #FFFFFF;
		}
		.on{
			background: #000000;
		}
	}
	.fix{
		width:94%;
		height:82px;
		line-height: 82px;
		background: #FFFFFF;
		font-size:28px;
		color: #000000;
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
	.l{
		width:25%;
		margin-top:40px;
		img{
			width:100%;
		}
	}
	.m{
		width:50%;
		text-align: center;
		img{
			width:10%;
			
		}
	}
	.r{
		width: 25%;
		text-align: right;
		img{
			width:30%;
			margin-right: 29px;
		}
	}
}
.container{
	width: 100%;
	height:100%;

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
		width:100%;
		ol{
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			li{
				width: 44%;
				height:328px;
				margin-top:20px;
				margin-left: 32px;
				background: url(../../../商品列表切、标/切图/商品列表粉/商品背景@2x.png) no-repeat 100% 100%;
				background-size:100% 100%;
			}
		}
		.position{
			position:fixed;
			top:80%;
			img{
				width:80%;
			}
		}
	}
}
.footer{
	width: 94%;
	height:8%;
	padding:2% 3%;
	display: flex;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	position:fixed;
  opacity: 0.86;
	background: #FFFFFF;
	bottom: 0;
	color: #000000;
	
	.l{
		width:50%;
		p{
			font-size: 28px;
			text-align: left;
			span{
				color: red;
				font-size:34px;
			}
		}
	}
	.r{
		width:50%;
		height: 73px;
		line-height: 73px;
		
		margin-right:16px;
		background: url(../../../商品列表切、标/切图/商品列表粉/确认支付@2x.png) no-repeat 100% 0%;
		background-size: 50%;
		p{
			margin-left: 50%;
			font-size: 26px;
		}
			}
}
</style>
