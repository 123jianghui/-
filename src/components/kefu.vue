<template>
	<div class="hello">
		<div class="top">
			<div class="left">
			<img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/>
				<p>返回</p>
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
		font-size: 28px;
	}
	
	.top .left img {
		width: 18%;
		margin-right: 5px;
	}
	
	.top .m {
		width: 50%;
		font-size:34px;
		text-align: center;
	}
	
	.top .right {
		width: 20%;
	}
	
	.top .right ul {
		margin-left:50%;
		display: flex;
		align-items: center;
		text-align: right;
	}
	
	.top .right ul li {
		width: 15px;
		height:15px;
		background: #FFFFFF;
		margin-left:10px;
		border-radius:15px;
	}
	
.container{
	width: 100%;
	height:100%;
	background:url(../assets/images/切图/联系-切图/背景@2x.png) no-repeat 0px 0px;
	background-size: 100% 100%;
	text-align: center;
}
.container .p1{
	width: 100%;
	color: #323232;
	text-align: center;
	font-size: 36px;
 	padding-top:63px;
 	padding-bottom:48px;
}
textarea{
	width:72%;
	height:560px;
	font-size:31px;
	padding: 33px 32px;
}
.submit{
	width:25%;
	margin-left:55%;
	margin-top:33px;
}
.btn{
	width: 80%;
	margin:100px auto;
	background: url(../assets/images/切图/联系-切图/客服按钮@2x.png) no-repeat 50% 0px;
	background-size: 100% 100%;
	display: flex;
	padding:5% 0;
	align-items: center;
	justify-content:center;
	margin-top:13%;
}
.btn img{
	width:8%;
}
.btn p{
	font-size:28px;
	color: #FFFFFF;
	padding-left:22px;
}
</style>