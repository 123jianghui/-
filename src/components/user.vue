<template>
	<div class="hello">
		<div class="top">
			<div class="left">
				<span><img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/></span>
				<span>返回</span>
			</div>
			<div class="m">用户协议</div>
			<div class="right">
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		<div class="container">
			<p>请仔细阅读智能无人售货协议</p>
			<div class="text"></div>
			<input type="checkbox"  />
			<span>我已阅读并同意该协议</span>
			<div class="success">完成</div>
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
	width: 80%;
	height:620px;
	background:url(../assets/images/切图/联系-切图/背景@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
	/*text-align: center;*/
	padding:8% 10%;
}
.container p:nth-child(1){
	color:black;
	font-size:20px;
	margin-bottom:8%;
	margin-top: 2%;
	text-align: center;
}
.text{
	width: 100%;
	height:380px;
	border: 1px solid #ccc;
	margin:2% 0;
}
.container span{
	font-size: 16px;
}

.success{
	width: 80%;
	text-align: center;
	background:url(../assets/images/切图/申诉-切图/提交按钮@2x.png) no-repeat 0px 0px;
	margin: 40px auto;
	padding:5% 0;
	background-size: 100% 100%;
	color: #FFFFFF;
	font-size: 18px;
	
}
</style>