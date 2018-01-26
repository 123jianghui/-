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
 			<div class="pull-down" v-show="bool">
 				<input type="text" placeholder="请输入检索内容" style="font-size: 28px;"/>
 				<p class="sheb">设备：天河一号</p>
 				<p class="fen">商品分类</p>
 				<div class="nav">
 					<ul>
 						<li>休闲零食</li>
 						<li>米面粮油</li>
 						<li>优质水果</li>
 						<li>肉禽奶蛋</li>
 						<li>宁夏特产</li>
 					</ul>
 				</div>
 				<div class="yuding">
 					<img src="../../../商品列表切、标/切图/手机4-导航/预订商品@2x.png"/>
 				</div>
 				<div class="show">
 					<img src="../../../商品列表切、标/切图/手机4-导航/展开@2x.png" v-on:click="show()"/>
 				</div>
 			</div>
 			<div class="click">
 				<img src="../assets/images/切图/手机4/下拉@2x.png" v-on:click="show()"/>
 			</div>
 			<div class="container">
 				 <div class="header">
 				 	<img src="../../../shopping/src/assets/images/切图/手机4/宁夏优品@2x.png"/>
 				 	<!--<p>宁夏优品</p>-->
 				 </div>
 				 <ul class="con">
 				 	<li>
 				 		<div class="box">
 				 			<div class="del">
	 				 			<img src="../../../shopping/src/assets/images/切图/手机4/减@2x.png"/>
	 				 		</div>
	 				 		<div class="add">
	 				 			<img src="../../../shopping/src/assets/images/切图/手机4/加-@2x.png"/>
	 				 		</div>
 				 		</div>
 				 	</li>
 				 	<li></li>
 				 	<li></li>
 				 	<li></li>
 				 	<li></li>
 				 	<li></li>
 				 </ul>
 			</div>
 			<div class="user">
 				<img src="../../../shopping/src/assets/images/切图/手机4/个人中心@2x.png"/>
 			</div>
 			<div class="shoppingCar">
 				<img src="../../../商品列表切、标/切图/手机4-导航/购物车提示@2x.png"/>
 			</div>
 			<div class="txt">
 			  		<p class="price">￥30</p>
 			  	  <p class="yes">确认支付</p>
 			</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      bool:false
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
<style scoped>
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
html,body{
	width: 100%;
	height: 100%;
}
.hello{
	width: 100%;
	height: 100%;
}
	.top {
		width: 94%;
		padding: 3% 3%;
		background: #000000;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFFFFF;
	}
	
	.top .left {
		width: 20%;
		display: flex;
		align-items: center;
		font-size:28px;
	}
	
	.top .left img {
		width: 18%;
		margin-right: 5px;
	}
	
	.top .m {
		width: 50%;
		font-size: 18px;
		text-align: center;
		font-size: 34px;
	}
	
	.top .right {
		width: 20%;
	}
	
	.top .right ul {
		margin-left:60%;
		display: flex;
		align-items: center;
		text-align: right;
	}
	
	.top .right ul li {
		width: 10px;
		height:10px;
		background: #FFFFFF;
		margin-left:8px;
		border-radius:10px;
	}
	
	.pull-down{
		width: 100%;
		position: absolute;
		background: rgba(0,0,0,0.18);
		z-index: 1;
		padding-top: 37px;
	}
.pull-down input{
	width:80%;
	height:34px;
  padding:26px 45px;
  margin-left: 27px;
	font-size: 16px;
	border-radius: 10px;
	color: #6A6A6A;
	background: #FFFFFF;
	/*background: url(../../../商品列表切、标/切图/手机4-导航/搜索@2x.png) no-repeat 94%;*/
	background-size:8%;
	border:1px solid #FFFFFF;

}
.pull-down .sheb{
	font-size: 28px;
	margin-top:38px;
	margin-left: 77px;
	color:#E00025;
}
.pull-down .fen{
	text-align: center;
	font-size: 28px;
	color: #FFFFFF;
	padding: 4% 0;
}
.pull-down .nav {
	width: 100%;
	padding: 2% 0;
}
.pull-down .nav ul{
	width:100%;
	display: flex;
	align-items: center;
/*	justify-content: space-around;*/
	font-size: 28px;
	text-align: center;
	color: #FFFFFF;
}
.pull-down .nav ul li{
	width:16%;
	height:75px;
	line-height: 75px;
	background: url(../../../商品列表切、标/切图/手机4-导航/休闲零食@2x.png) no-repeat 0px 0px;
	background-size:100% 100%;
	padding:3% 0;
	margin-left:24px;
}
.yuding{
	width: 100%;
	text-align: center;
	padding: 2% 0;
	margin-top: 50px;
}
.yuding img{
	width: 45%;
}
.show {
	width: 100%;
	text-align: center;
	margin-top:3%;
}
.show img{
	width:10%;
	padding: 2% 0;
}
.container{
	width: 100%;
	height:120%;
	background: url(../../../shopping/src/assets/images/切图/手机4/背景@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
}
.container .header{
	width: 100%;
	text-align:center;
}
.container .header img{
	width:32%;
	margin-top:4%;
}
.container .con{
	display: flex;
	width:92%;
	height: 100%;
	align-items: center;
	flex-wrap: wrap;
	margin:20px auto;
}
.container .con li{
	width: 45%;
	height:328px;
	margin-left: 25px;
	border: 1px solid #ccc;
	margin-top: 4%;
}
.container .con li .box{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	display: none;
}
.container .con li .box :hover{
	display: block;
}
.container .con li .box .del{
	width: 40%;
}
.del img{
	width: 100%;
}
.container .con li .box .add{
	width: 40%;
}
.add img{
	width: 100%;
}
.user img{
	width:20%;
	position:absolute;
  top: 8%;
  right:2%;
}
.shoppingCar{
	position: fixed;
	top:88%;
}
.shoppingCar img{
	width: 120%;
}
.txt{
	position: fixed;
	width: 120px;
	height: 75px;
	top:88%;
	right:1%;
	padding:45px 30px;
	text-align: center;
	background: url(../../../商品列表切、标/切图/手机4/确认支付@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
}
.txt .price{
	color:#FFF100;
	font-size: 30px;
}
.txt .yes{
	color:#fff;
	font-size: 26px;
}
.click{
	width: 100%;
	text-align: center;
	background: #FE89A6;
	padding: 1% 0;
}
.click img{
	width:10%;
}
</style>
