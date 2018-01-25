<template>
	<div class="hello">
		<div class="top">
			<div class="left">
				<span><img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/></span>
				<span>返回</span>
			</div>
			<div class="m">联系客服</div>
			<div class="right">
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="container">
			<p class="p1">联系客服</p>
			<textarea name="" placeholder="请输入留言……"></textarea>
			<img src="../assets/images/切图/联系-切图/提交@2x.png" class="submit"/>
			<div class="btn">
				<img src="../assets/images/切图/联系-切图/电话@2x.png"/>
				<p>客服热线</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

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
.top{
	width: 94%;
	padding: 2% 3%;
	background: #000000;
	display: flex;
	align-items: center;
	justify-content:space-between;
	color: #FFFFFF;
}
.top .left{
	display: flex;
	align-items: center;
}
.top .left img{
	width: 70%;
	margin-right: 5px;
}
.top .m{
	width: 50%;
	text-align:center;
}
.top .right{
	width: 20%;
}
.top .right ul{
	margin-left: 10%;
	display: flex;
	align-items: center;
	text-align: right;
}
.top .right ul li{
	width: 10px;
	height: 10px;
	background: #FFFFFF;
	margin-left: 8px;
	border-radius: 10px;
}
.container{
	width: 100%;
	height:620px;
	background:url(../assets/images/切图/联系-切图/背景@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
	text-align: center;
}
.container .p1{
	width: 100%;
	color: #323232;
	text-align: center;
	font-size: 20px;
 	padding-top: 40px;
 	padding-bottom: 30px;
}
textarea{
	width:72%;
	height: 300px;
	font-size: 16px;
	padding: 4%;
}
.submit{
	width:25%;
	margin-left:55%;
	margin-top:15px;
}
.btn{
	width: 80%;
	height:80px;
	margin:40px auto;
	background: url(../assets/images/切图/联系-切图/客服按钮@2x.png) no-repeat 50% 0px;
	background-size: 90% 90%;
	display: flex;
	align-items: center;
	justify-content:center;
}
.btn img{
	width:8%;
}
.btn p{
	font-size:16px;
	color: #FFFFFF;
	padding-left:5%;
}
</style>