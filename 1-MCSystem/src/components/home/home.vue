<template>
    <div>
    	<!--轮播图 -mint-ui  -->
		<mt-swipe>
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"></a><img :src="img.img"></mt-swipe-item>

		</mt-swipe>


    	<!--九宫格 -mui  -->
		<div class="mui-content my9">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link :to="{name:'news_list'}">
	                    <span class="mui-icon mui-icon-home"></span>
	                    <div class="mui-media-body">新闻资讯</div>
	                </router-link></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            	<router-link :to="{name:'photoShare'}">
	                    <span class="mui-icon mui-icon-email"></span>
	                    <div class="mui-media-body">图文分享</div>
	                </router-link></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-chatbubble"></span>
	                    <div class="mui-media-body">商品展示</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-location"></span>
	                    <div class="mui-media-body">留言反馈</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-search"></span>
	                    <div class="mui-media-body">搜索资讯</div></a></li>
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
	                    <span class="mui-icon mui-icon-phone"></span>
	                    <div class="mui-media-body">联系我们</div></a></li>
	        </ul> 
		</div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				imgs:[],//轮播图列表
			}
		},
		created(){
			//发起请求
			this.$ajax.get('http://127.0.0.1:8899/lunbotu')
			.then(res=>{
				//console.log(res.data.message);
				this.imgs=res.data.message;
			})
		}

	}
</script>
<style scoped>
/*轮播图样式*/
.mint-swipe{
    max-height:300px; 
}
.mint-swipe img {
    height: 100%;
}

/*九宫格样式*/
.mui-grid-view.mui-grid-9{
	background-color: #fff;
	margin-top: 0px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    border: 1px solid #fff;
}

/*九宫格清除字体图标*/
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before{
    content: '';
}

/*九宫格背景图片*/
.mui-icon-home{
    background-image: url('../../static/img/news.png');
    background-repeat: round;
}
.mui-icon-email{
	background-image : url('../../static/img/picShare.png');
    background-repeat: round;
}
.mui-icon-chatbubble{
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}
.mui-icon-location{
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}
.mui-icon-search{
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}
.mui-icon-phone{
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}
/*九宫格图标宽高*/
.mui-icon{
    height: 50px;
    width:50px;
}
</style>