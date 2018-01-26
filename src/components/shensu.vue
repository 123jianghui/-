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
		<div class="container">
			<p>选择申诉内容</p>
			<ul>
				<li class="li">商品过期</li>
				<li class="li">假冒伪劣</li>
				<li class="li">假冒伪劣</li>
				<li class="li">商品过期</li>
				<li class="a active">假冒伪劣</li>
				<li class="li">商品过期</li>
			</ul>
			<textarea name="" placeholder="具体内容"></textarea>
			<div class="img">

			</div>
			<p class="addImage">添加图片</p>
			<div class="submit">
				<p style="color: #fff;font-size:28px;">提交</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool1: false,
				bool2:true
			}
		},
		methods: {
			addClass: function(a) {
				this.bool1 = !this.bool1;
				this.bool2 = !this.bool2;
			}
		}

	}
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
	.container {
		width: 80%;
		height:100%;
		background: url(../assets/images/切图/联系-切图/背景@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		margin: 0 auto;
		padding: 10%;
	}
	
	.container p:nth-child(1) {
		color: black;
		font-size: 36px;
		margin: 10px 0;
	}
	
	.container ul {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		text-align: center;
		margin-bottom: 8%;
		justify-content: space-between;
	}
	
	.container ul .li {
		width: 33%;
		background: url(../assets/images/切图/申诉-切图/未选中@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 2% 0;
		margin-top:29px;
		font-size:28px;
		color: #FF6A7F;
	}
	.active{
		width: 33%;
		background: url(../assets/images/切图/申诉-切图/选中@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
		padding: 2% 0;
		margin-top:29px;
		font-size: 28px;
		color: #FFFFFF;
	}
	textarea {
		width: 94%;
		height:378px;
		color: #949494;
		font-size: 31px;
		margin-top: 21px;
		border: 2px solid #ccc;
		padding: 3%;
	}
	
	.img {
		width:200px;
		height:170px;
		margin: 3% 0;
		background: url(../assets/images/切图/申诉-切图/添加图片@2x.png) no-repeat 0px 0px;
		background-size: 100% 100%;
	}
	
	.addImage {
		color: black;
		font-size: 31px;
		margin-left: 5%;
		margin-top:19px;
		margin-bottom:5%;
	}
	
	.submit {
		width: 80%;
		text-align: center;
		background: url(../assets/images/切图/申诉-切图/提交按钮@2x.png) no-repeat 0px 0px;
		margin:auto;
		padding:3% 0;
		background-size: 100% 100%;
		/*margin-top: 5%;*/
	}
</style>