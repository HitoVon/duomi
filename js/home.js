window.onload = function(){
	//循环判断变量
	var flag = false;
	//获取class为.gallery-list的数组
	var galleryList = $(".gallery-list");
	//循环设置每个单独的li标签left的值，依次向左偏移100%
	for (var i=0; i<galleryList.length;i++) {
		console.log(i+"执行");
		galleryList[i].style.left = i*100 +"%";
		console.log(galleryList[i].style.left);
		console.log(parseInt(galleryList[i].style.left) == 0);
	}

//	js原生homepage轮播图
//	获取轮播的每个元素
//	var galleryList = document.getElementsByClassName(".gallery-list");
//	自动轮播
	var timer = 0;
//	var curGalleryListLeft = new Array(galleryList.length);
	var galleryDotNav = $(".gallery-dotnav-list-link span");
	function autoChange(){
		for (var i=0;i<galleryList.length;i++) {
			//获取元素当前的left值
			var curGalleryListLeft = galleryList[i].style.left;
			console.log(parseInt(curGalleryListLeft));
			//在当前left值基础上向左轮播100%
			galleryList[i].style.left = (parseInt(curGalleryListLeft)-100) +"%";
			
//			galleryList[i-1].style.left = galleryList[galleryList.length-i].style.left;
			
			console.log(galleryList[i].style.left);
			if(timer==galleryList.length){
				galleryList[i].style.transition = "left 0s";
			}else{
				galleryList[i].style.transition = "left 0.5s ease";
			}
		}
//		计数器加一
		timer++;
		//判断当计数器为元素数组长度时，初始化各个元素的位置
		if(timer==galleryList.length){
			for (var i=0; i<galleryList.length;i++) {
				galleryList[i].style.left = i*100 +"%";
			}
			//初始化完成之后，对计数器进行归零
			timer = 0;
		}
	}
	var taskid = self.setInterval(autoChange,3000);
}
