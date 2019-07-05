var imgs=[
	{"i":0,"img":"images/nav01.jpg","span":"銆婂喅鎴橀绁炪€�"},
    {"i":1,"img":"images/nav02.jpg","span":"銆婃帬澶鸿€呫€�"},
    {"i":2,"img":"images/nav03.jpg","span":"銆婃憜娓′汉銆�"},
    {"i":3,"img":"images/nav04.jpg","span":"銆婅潤铦犱緺澶ф垬瓒呬汉銆�"},
    {"i":4,"img":"images/nav05.jpg","span":"銆婂€掗湁鐗瑰伐鐔娿€�"},
];
var slider={
	LIWIDTH:0,
	$imgs:null,
	$idxs:null,
	DURATION:1000,
	WAIT:5000,
	timer:null,
	init(){
		this.LIWIDTH=parseFloat($("#advert>.advertimg").css("width"));
		this.$imgs=$("#advert>.advertimg>.imgtable");
		this.$idxs=$("#advert>.advertimg>.imgtablesize");
		this.updateView();
		this.startAuto();
		this.$imgs.hover(
				function(e){
					$("body").stop(true);
					//$(e.target).next().animate({
						//height:'40px'
					//},500);
					//debugger;
				}.bind(this),
				function(e){
					$("body").stop(true);
					//$(e.target).next().animate({
						//height:'0px'
					//},500);
				}.bind(this)	
			);
		this.$idxs.on("click","li",function(e){
			if(!$(e.target).hasClass("hover")){
				clearTimeout(this.timer);
				this.timer=null;
				this.$imgs.stop(true);
				var start=this.$idxs.children(".hover").html();
				var end=$(e.target).html();
				this.move(end-start);
			}
		}.bind(this));
		//debugger;
	},
	updateView(){
		for(var i=0,imgsHTML="",idxsHTML="";i<imgs.length;i++){
			imgsHTML+="<li><img src='"+imgs[i].img+"'/><span>"+imgs[i].span+"</span></li>";
			idxsHTML+="<li>"+(i+1)+"</li>";
		}
		this.$imgs.html(imgsHTML).css("width",imgs.length*this.LIWIDTH);
		this.$idxs.html(idxsHTML);
		this.$idxs.children(":eq("+imgs[0].i+")").addClass("hover");
	},
	startAuto(){
		this.timer=setTimeout(function(){this.move(1)}.bind(this),this.WAIT);
	},
	move(n){
		if(n>0){
			this.$imgs.animate({
				left:-n*this.LIWIDTH
			},this.DURATION,function(){
				imgs=imgs.concat(imgs.splice(0,n));
				this.updateView();
				this.$imgs.css("left",0);
				this.startAuto();
			}.bind(this));
		}else{
			n*=-1;
			imgs=imgs.splice(-n,n).concat(imgs);
			this.updateView();
			var left=parseFloat(this.$imgs.css("left"));
			this.$imgs.css({
				"left":left-n*this.LIWIDTH
			});
			this.$imgs.animate({"left":0},this.DURATION,function(){this.startAuto()}.bind(this));
			//debugger;
		}
	}
}
slider.init();

$('div>div.header>ul>li>a').click(function(e){
	e.preventDefault();
});

$('div>div.header>ul>li>a').hover(
	function(e){
		var target=e.target;
		$(target).addClass('hover').parent()
							.siblings().children('.hover')
							.removeClass('hover');
		//console.dir($(target).parent().parent().parent().siblings("."+$(target).attr('data-tab')));
		$(target).parent().parent().parent()
							.siblings("."+$(target).attr('data-tab'))
							.addClass('in').siblings(".in").removeClass('in');
	}
);

$(document).scroll(function(){
	var lTop=$(document).scrollTop();
	if(lTop>1300&&lTop<1960){
		$('#navbar').css('display','block')
								.children(':first').children(':first')
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>1960&&lTop<2530){
		$('#navbar').css('display','block')
								.children(':first').children(':first').next()
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>2530&&lTop<3000){
		$('#navbar').css('display','block')
								.children(':first').children(':first').next().next()
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>3000&&lTop<3550){
		$('#navbar').css('display','block')
								.children(':first').children(':last')
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>500){
		$('#navbar').css('display','block').find('.hover').removeClass('hover');
	}else{
		$('#navbar').css('display','none');
	}
	//debugger;
}.bind(this));

$('#navbar').on("click","ul>li>a",function(e){
			e.preventDefault();
			var i=$('#navbar>ul>li').index($(e.target).parent());
			//console.dir($(e.target).parent());
			//console.dir(i);
			switch(i){
				case 0:
					$('body').stop();
					$('body,html').animate({
						scrollTop:1590
					},1000);
					break;
				case 1:
					$('body').stop();
					$('body,html').animate({
						scrollTop:2160
					},1000);
					break;
				case 2:
					$('body').stop();
					$('body,html').animate({
						scrollTop:2730
					},1000);
					break;
				case 3:
					$('body').stop();
					$('body,html').animate({
						scrollTop:3300
					},1000);
					break;
			}
}.bind(this));

$('div.header>ul>li>a').hover(
	function(e){
		var target=e.target;
		$(target).addClass('hover').parent()
							.siblings().children('.hover')
							.removeClass('hover');
		$(target).parent().parent().parent()
							.siblings("."+$(target).attr('data-tab'))
							.addClass('in').siblings(".in").removeClass('in');
	}
);
var dayweek="";
switch((new Date()).getDay()){
	case 0:
		dayweek="鏄熸湡鏃�";
		break;
	case 1:
		dayweek="鏄熸湡涓€";
		break;
	case 2:
		dayweek="鏄熸湡浜�";
		break;
	case 3:
		dayweek="鏄熸湡涓�";
		break;
	case 4:
		dayweek="鏄熸湡鍥�";
		break;
	case 5:
		dayweek="鏄熸湡浜�";
		break;
	case 6:
		dayweek="鏄熸湡鍏�";
		break;
}
$("#tvprogram>div.header>span.today").html("浠婃棩:"+(new Date()).getFullYear()+"-"+((new Date()).getMonth()+1)+"-"+(new Date()).getDate()+"  "+dayweek);

/***鐧婚檰娉ㄥ唽*******************/
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});

$('#hotmouse>div.hotmain>dl>dt').on("mouseenter","a",function(e){
	$('#hotmouse>div.hotmain>dl>dt').stop();
	var x=0; 
	x=e.offsetX;
	var  y=0;
	y=e.offsetY;
  //console.log(x,y);
  //console.log(e.target.pageX,e.target.pageY);
	if(e.offsetX<-1){
		return;
	}
	if(e.offsetY<-1){
		return;
	}
	//console.log($(this));
	//console.log($(e.target));
	if(y>240){
		$(e.target).attr('class','zz buttom');
		return;
	}
	if(y<10){
		$(e.target).attr('class','zz top');
		return;
	}
	if(x<10){
		$(e.target).attr('class','zz left');
		return;
	}
	if(x>170){
		$(e.target).attr('class','zz right');
		return;
	}

});
$('#hotmouse>div.hotmain>dl>dt').on("mouseleave","a",function(e){
		//ss1.setAttribute('class','');
		var x=e.offsetX;
		var y=e.offsetY;
		//console.log(x,y);
		if(y<0){
			$(e.target).attr('class','zz totop');
			return;
		}
		if(x<0){
			$(e.target).attr('class','zz toleft');
			return;
		}
		if(x>170){
			$(e.target).attr('class','zz toright');
			return;
		}
		if(y>252){
			$(e.target).attr('class','zz tobuttom');
			return;
		}
});
