<template>
	<div class="helo">
		<div class="top">
			<div class="left">
				<img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png" />
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
		<div>
			<div class="click">
				<img src="../assets/images/切图/手机4/下拉@2x.png" />
			</div>
			<div class="container">
				<div class="header">
					<img src="../../../shopping/src/assets/images/切图/手机4/宁夏优品@2x.png" />
				</div>
				<div class="con">
					<p>欢迎注册智能无人售货系统</p>
					<div class="shadow">
						<div class="name">
							<img src="../assets/images/reg/065用户.png" />
							<p>请填写真实姓名</p>
						</div>
						<div class="id">
							<img src="../assets/images/reg/012身份证.png" />
							<p>请填写真实的身份证号</p>
						</div>
						<div class="tel">
							<img src="../assets/images/reg/058手机.png" />
							<p>请填写手机号 &nbsp;|&nbsp;<span>获取验证码</span></p>
						</div>
						<div class="password">
							<img src="../assets/images/reg/060密码、锁.png" />
							<p>请填写验证码</p>
						</div>
					</div>
				</div>
				<div class="nextBtn">
					<img src="../assets/images/reg/图层2.png" />
				</div>
			</div>

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
		width: 100%;
		height: 100%;
		background: url(../../../shopping/src/assets/images/切图/手机4/渐变背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	
	.container .header {
		width: 100%;
		text-align: center;
	}
	
	.container .header img {
		width: 20%;
		/*margin-top:4%;*/
		padding:3% 0;
	}
	
	.click {
		width: 100%;
		text-align: center;
		background: #FE89A6;
		padding: 1% 0;
	}
	
	.click img {
		width: 8%;
	}
	
	.container .con {
		width: 90%;
		height:100%;
		margin: 0 auto;
		background: url(../../../shopping/src/assets/images/切图/手机4/白色背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 8% 0;
	}
	
	.container .con p:nth-child(1) {
		font-size:32px;
		color: #FBB450;
		text-align: center;
	}
	
	.container .con .shadow {
		width: 70%;
		height: 70%;
		margin: 5% auto;
		padding: 10% 5%;
		box-shadow: 0px 0px 15px 1px #ccc;
	}
	
	.shadow .name,
	.id,
	.tel,
	.password {
		width: 100%;
		background: #E8E8E8;
		display: flex;
		align-items: center;
		font-size:26px;
		color: #BFBFBF;
		margin-bottom: 10%;
	}
	
	.shadow .name img {
		width: 10%;
		padding: 5%;
	}
	
	.shadow .tel img {
		width: 8%;
		padding: 4%;
	}
	
	.shadow .id img {
		width: 12%;
		padding: 5%;
	}
	
	.shadow .password img {
		width: 10%;
		padding: 4%;
	}
	
	.nextBtn {
		width: 100%;
		text-align: center;
		margin: 6% auto;
	}
	
	.nextBtn img {
		width: 50%;
	}
</style>