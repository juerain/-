(function () {
  ajax({
    url: "http://localhost:3000/index",
    type: "get",
    dataType: "json",

  }).then(result => {
    console.log(result);
    var [p1, p2, p3, p4, p5, p6] = result;
    
      var { title,pic, href,update_num} = p1;
      console.log(title);
      var html=`<div class="hot-tv-img">
					<div class="hot-tv-img1">
						<a href="${href}">
							<img src="${pic}" alt="">
							<span>更新至${update_num}集</span>
						</a>
						<figcaption>
							<b>
								<a href="${href}">加入收藏</a>
							</b>
						</figcaption>
					</div>
					<p>
						<a href="${href}">${title}</a>
					</p>
        </div>`;
        console.log(html);
        document.querySelector(".add").innerHTML=html;
    
  })
})();