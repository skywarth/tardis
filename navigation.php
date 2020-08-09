
<nav class="navbar navbar-expand-lg navbar-mainbg stickyNavbar">
    <a class="navbar-brand navbar-logo ml-md-5 ml-2 " href="index.php">TARDIS</a>
    <a class="ml-auto text-white no-link badge badge-info d-md-none" href="javascript:void(0);"><i class="fas fa-sign-in-alt"></i><span class="pl-2">Giriş</span></a>
    <button class="navbar-toggler mr-2 mr-md-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mr-0  mr-md-5" id="topMenu">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item">
                <a class="nav-link" href="index.php"><i class="fas fa-home"></i><span class="pl-2">Anasayfa</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="process.php"><i class="fas fa-route"></i><span class="pl-2">Sipariş Takip</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="leaderboard.php"><i class="fas fa-medal"></i><span class="pl-2">Ayın Üreticileri</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="fas fa-calendar-alt"></i><span class="pl-2">Hasat Takvimi</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="fas fa-heart"></i><span class="pl-2">Favorilerim</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="fas fa-sign-in-alt"></i><span class="pl-2">Giriş</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="fas fa-question-circle"></i><span class="pl-2">Destek</span></a>
            </li>
        </ul>
    </div>
</nav>

<script>
// url, so we can compare the current page the user is on.
var url = window.location.href;
// myMenuLinks, set this to your site's a links inside of some kind of container/loopable structure.
var myMenuLinks = $('#navbarSupportedContent li');

for(let i=0;i<myMenuLinks.length;i++){
if(myMenuLinks[i].children[0].href==url){
myMenuLinks[i].classList.add("active");
}
}

/*myMenuLinks.filter(function() {
    return this.href == url;
}).closest().addClass('active'); // Adds a class of 'active', directly to the 'a' link
*/
</script>