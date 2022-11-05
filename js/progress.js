const progressTitle = $("#progress_1 .progressTitle");
for (let i = 0; i < progressTitle.length; i++) {
  const title = progressTitle[i].innerHTML;
  if (title.match("登入作品")) {
    const progressLi =$(".progressBar").find("li")[i]
    $(progressLi).addClass("stop");
   $($($(".progressBar")[1]).find("li")[0]).addClass("stop");
   const percentage = ((i /(progressTitle.length-1) ) * 100)
    $(".progressGo")[0].style.width = percentage + "%";
    $(".progressGo")[1].style.width =  "0%"
  }

}