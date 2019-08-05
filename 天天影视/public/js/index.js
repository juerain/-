(function () {
  $.ajax({
    url: "http://localhost:3000/index",
    type: "get",
    dataType: "json",
    success: function(result) {
        // console.log(result);
        // var [p1, p2, p3, p4, p5, p6] = result;
        new Vue({
          el:"#add",
          data:{
            hotFilm:result.slice(0,12),
            tvs:result.slice(12,22),
            films:result.slice(22,32),
            comics:result.slice(32,42),
            varietys:result.slice(42,52)
          }
        })
    }

  
    //   var { title,pic, href,update_num} = p1;
    // var hotHtml = "";
    // for (var i = 0; i < 12; i++) {
    //   hotHtml += `<div class="hot-tv-img">
		// 			<div class="hot-tv-img1">
		// 				<a href="${result[i].href}">
		// 					<img src="${result[i].pic}" alt="">
		// 					<span>更新至${result[i].update_num}集</span>
		// 				</a>
		// 				<figcaption>
		// 					<b>
		// 						<a href="${result[i].href}">加入收藏</a>
		// 					</b>
		// 				</figcaption>
		// 			</div>
		// 			<p>
		// 				<a href="${result[i].href}">${result[i].title}</a>
		// 			</p>
    //     </div>`;
    //   $("#hottv_add").html(hotHtml);
    // }
    // // 这里可以简写，将以下代码封装到一个函数中，反复调用
    // function addHtml(start, end) {
    //   // console.log(result)
    //   var html = "";
    //   for (var i = start; i < end; i++) {
    //     html += `<div class="img">
    //   <a href="">
    //     <img src="${result[i].pic}" alt="">

    //     <span>更新至${result[i].update_num}集</span>
    //   </a>
    //   <p>
    //     <a href="">${result[i].title}</a>
    //   </p>
    //   <figcaption></figcaption>
    // </div>`;
    //   }
    //   return html;
    // }

    // $("#tv_add").html(addHtml(12, 22));
    // $("#film_add").html(addHtml(22, 32));
    // $("#comic_add").html(addHtml(32, 42));
    // $("#variety_add").html(addHtml(42, 52));
  
  })
})();




