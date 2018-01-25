<template>
	<div class="box">
		<!--头部的样式结构-->
		<div class="header">
			<div class="left">
				<span><img src="../../../商品列表切、标/切图/手机4-导航/返回@2x.png"/></span>
				<span>返回</span>
			</div>
			<div class="m">商品列表</div>
			<div class="right">
				<img src="../assets/images/历史列表/ios/kefu@2x.png"/>
			</div>
		</div>
		
		<!--列表的布局结构-->
		<div class="container">
			<div class="con">
				<div class="month1">
					<p>2017年3月</p>
				</div>
				<ul>
					<li>
						<div class="triangle-left"></div>
						<div class="top">
							<div class="l">
								<p>
									<span class="data">02</span>
									<span class="zongj">总计&nbsp;<label class="price">￥512.00</label></span>
								</p>
								<p style="color: #999999;;">
									<span class="month2">3月</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span class="shop">共6件商品&nbsp;| &nbsp;已完成</span>
								</p>
							</div>
							<div class="r">
								<img src="../assets/images/商品详情/android/drawable-xxhdpi/shangpin.png"/>
							</div>
						</div>
						<hr />
						<div class="bottom">
							<div class="l">
								<p>银川 YCXX201452号柜</p>
							</div>
							<div class="r">
								<img src="../assets/images/历史列表/ios/shensu@2x.png"/>
							</div>
						</div>
					</li>
					<li>
						<div class="triangle-left"></div>
						<div class="top">
							<div class="l">
								<p>
									<span class="data">02</span>
									<span class="zongj">总计&nbsp;<label class="price">￥512.00</label></span>
								</p>
								<p style="color: #999999;">
									<span class="month2">3月</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span class="shop">共6件商品&nbsp;| &nbsp;已完成</span>
								</p>
							</div>
							<div class="r">
								<img src="../assets/images/商品详情/android/drawable-xxhdpi/shangpin.png"/>
							</div>
						</div>
						<hr />
						<div class="bottom">
							<div class="l">
								<p>银川 YCXX201452号柜</p>
							</div>
							<div class="r">
								<img src="../assets/images/历史列表/ios/shensu@2x.png"/>
							</div>
						</div>
					</li>
					<li>
						<div class="triangle-left"></div>
						<div class="top">
							<div class="l">
								<p>
									<span class="data">02</span>
									<span class="zongj">总计&nbsp;<label class="price">￥512.00</label></span>
								</p>
								<p style="color: #999999;;">
									<span class="month2">3月</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<span class="shop">共6件商品&nbsp;| &nbsp;已完成</span>
								</p>
							</div>
							<div class="r">
								<img src="../assets/images/商品详情/android/drawable-xxhdpi/shangpin.png"/>
							</div>
						</div>
						<hr />
						<div class="bottom">
							<div class="l">
								<p>银川 YCXX201452号柜</p>
							</div>
							<div class="r">
								<img src="../assets/images/历史列表/ios/shensu@2x.png"/>
							</div>
						</div>
					</li>
					
				</ul>
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
.header{
	width: 94%;
	padding: 2% 3%;
	background: #000000;
	display: flex;
	align-items: center;
	justify-content:space-between;
	color: #FFFFFF;
}
.header .left{
	display: flex;
	align-items: center;
}
.header .left img{
	width: 70%;
	margin-right: 5px;
}
.header .m{
	width: 50%;
	text-align:center;
}
.header .right{
	width: 20%;
	text-align: right;
}
.header .right img{
	width: 50%;
}
.container{
	width:90%;
	height:600px;
	padding: 3% 5%;
	background-image: url(../assets/images/商品详情/android/drawable-hdpi/dabeijing.png);
	background-position:0px 0px;
	background-repeat: no-repeat;
	background-size:100% 100%;
}
.con{
	width:94%;
	height:94%;
	padding:3%;
	background: #FFFFFF;
	border-radius: 6px;
}
.con .month1{
	font-size:20px;
	color: #333333;
}
.con ul{
	width: 94%;
	padding:2% 3%;
	height: 100%;
}
.con ul li{
	width:94%;
	padding: 0% 3%;
	border: 1px solid #CCCCCC;
	border-radius: 8px;
	margin-top:3%;
	position: relative;
}

.con ul li .top{
	width: 100%;
	display: flex;
	align-items:center;
	justify-content: space-around;
}
.con li  .top .l{
	width: 75%;
	padding: 4% 0;
}
.con li  .top .l .data{
	font-size: 26px;
	color: #000000;
}
.con li  .top .l .zongj{
	font-size: 20px;
	color: #000000;
	margin-left: 20px;
}
.con li  .top .l .zongj label{
	color: red;
}
.con li  .top .r{
	width: 25%;
}
.con li  .top .r img{
	width:100%;
}
.con .bottom{
	width: 100%;
	display: flex;
	padding: 5% 0;
	align-items: center;
}
.con .bottom .l{
	width: 75%;
}
.con .bottom p{
	font-size: 18px;
	color: #666666;
}
.con .bottom .r{
	width: 25%;
}
.con .bottom .r img{
	width: 100%;
}
.triangle-left {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right:10px solid #ccc;
    border-bottom:10px solid transparent;
    position: absolute;
    top:45%;
    left:-10px;
}
</style>