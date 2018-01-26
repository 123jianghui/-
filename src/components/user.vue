<template>
	<div class="hello">
		<div class="top">
			<div class="left">
				<img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png" />
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
			<div class="inp">
				<img src="../assets/images/切图/用户协议-切图/未选中@2x.png"/>
				<span>我已阅读并同意该协议</span>
			</div>
			<div class="success">完成</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
	}
	
	.hello {
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
		font-size: 34px;
		text-align: center;
	}
	
	.top .right {
		width: 20%;
	}
	
	.top .right ul {
		margin-left: 50%;
		display: flex;
		align-items: center;
		text-align: right;
	}
	
	.top .right ul li {
		width: 15px;
		height: 15px;
		background: #FFFFFF;
		margin-left: 10px;
		border-radius: 15px;
	}
	
	.container {
		width: 80%;
		height:100%;
		background: url(../assets/images/切图/联系-切图/背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		/*text-align: center;*/
		padding: 8% 10%;
	}
	
	.container p:nth-child(1) {
		color: black;
		font-size: 36px;
		margin-bottom:42px;
		margin-top:32px;
		text-align: center;
	}
	
	.text {
		width: 100%;
		height:785px;
		border: 2px solid #ccc;
		margin: 2% 0;
	}
	
	.container span {
		font-size: 26px;
		color: #1D1C1C;
		margin-left: 18px;
	}
	.inp{
		display: flex;
		align-items: center;
	}
	.success {
		width: 80%;
		text-align: center;
		background: url(../assets/images/切图/申诉-切图/提交按钮@2x.png) no-repeat 0px 0px;
		margin: 40px auto;
		padding: 5% 0;
		background-size: 100% 100%;
		color: #FFFFFF;
		font-size: 28px;
	}
</style>