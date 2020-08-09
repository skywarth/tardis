<?php include 'header.php';?>
</head>
<?php include 'navigation.php';?>



<body class="grassBG3">





<div class="stickyWrapper stickyWrapper2">

<a href="#herEve" id="goToBottom" class="btn btn-circle">

         <i class="fa fa-angle-double-down scrollIcon"></i>
     </a>


</div>


<div class="container wrapper gradient3 mainContainer">
    <div class="row mainTitleContainer" >
        <div class="col text-center"><h1 class="mainTitle">Üreticiden Tüketiciye, kısa yoldan.</h1></div>

    </div>




<!--
    <div class="row mb-4 mb-md-0">
            <div class="col searchWrapper " style="height: 15vh">

        <input type="text" class="h-100" id="mainSearchBar" placeholder="Search.." name="search">


        <button type="submit" class="searchButton h-100"><i class="fa fa-search"></i></button>
        </div>


    </div>
-->
    <div class="row mb-4 mb-md-0">
        <div class="col">

            <div class="searchbox searchbox--active borderRadius10R" id="searchBox1" onClick="deactivateSearchbox()">
                <div class="col-12 h-100 px-0">
                <input type="text" class="pl-4" id="searchInput" onFocus="onFocus()" onBlur="onBlur()"/>
                <button>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                </div>



            </div>
            <div class="row">
                <div class="col-md-3 col-2"></div>
                <div class="col-md-6 col-8 h-100">
                    <ul class="suggestions clearfix"></ul>
                </div>
                <div class="col-md-3 col-2"></div>
            </div>
        </div>
    </div>

<div class="row mt-md-4">
    <div class="col-md-6 col-12">
        <div class="card mb-3 mb-md-0">
            <img class="card-img cardImg" src="img/herbs.jpg" alt="Bologna">

            <div class="card-img-overlay paddingB05 cardHalfTinted text-white d-flex flex-column justify-content-center">
                <h4 class="card-title mt-auto mb-0">Yeşillik</h4>
               <!-- <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                -->
            </div>
        </div>
    </div>

    <div class="col-md-6 col-12">
        <div class="card mb-3 mb-md-0">
            <img class="card-img cardImg" src="img/legumes.webp" alt="Bologna">
            <div class="card-img-overlay paddingB05 cardHalfTinted text-white d-flex flex-column justify-content-center">
                <h4 class="card-title mt-auto mb-0">Bakliyat</h4>
                <!-- <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                 <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                 -->
            </div>
        </div>
    </div>
</div>

    <div class="row mt-md-4">
        <div class="col-md-6 col-12">
            <div class="card mb-3 mb-md-0">
                <img class="card-img cardImg" src="img/dairy.jpg" alt="Bologna">
                <div class="card-img-overlay paddingB05 cardHalfTinted text-white d-flex flex-column justify-content-center">
                    <h4 class="card-title mt-auto mb-0">Mandıra Ürünleri</h4>
                    <!-- <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                     <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                     -->
                </div>
            </div>
        </div>

        <div class="col-md-6 col-12">
            <div class="card mb-3 mb-md-0">
                <img class="card-img cardImg" src="img/delicatessen.jpg" alt="Bologna">
                <div class="card-img-overlay paddingB05 cardHalfTinted text-white d-flex flex-column justify-content-center">
                    <h4 class="card-title mt-auto mb-0">Şarküteri</h4>
                    <!-- <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                     <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                     -->
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-md-4 pb-5" id="herEve">
        <div class="col-md-12 col-12">
            <div class="card mb-3 mb-md-0">
                <img class="card-img cardImg" src="img/general.jpg" alt="Bologna">
                <div class="card-img-overlay paddingB05 cardHalfTinted text-white d-flex flex-column justify-content-center">
                    <h4 class="card-title mt-auto mb-0">Her Eve Lazim</h4>
                    <!-- <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                     <p class="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                     -->
                </div>
            </div>
        </div>



    </div>





</div>











</body>
<script src="resc/js/searchBox.js"></script>
</html>