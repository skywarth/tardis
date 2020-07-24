function activateSearchbox(el){
    document.querySelector("#searchBox1").classList.add('searchbox--active');
    document.querySelector("#searchBox1").classList.remove('borderRadius0');
    //document.querySelector(".suggestions").classList.add('d-none');
    document.querySelector(".suggestions").classList.remove('suggestions--active');
}
function deactivateSearchbox(el){
    document.querySelector("#searchBox1").classList.remove('searchbox--active')
    document.querySelector("#searchBox1").classList.add('borderRadius0');
    //document.querySelector(".suggestions").classList.remove('d-none');
    document.querySelector(".suggestions").classList.add('suggestions--active');
}

function onFocus(){
    deactivateSearchbox(document.querySelector('.searchbox'));
}

function onBlur(){
    activateSearchbox(document.querySelector('.searchbox'));

}


$('#searchInput').keyup(function() {
    var $suggestions = $('.suggestions');
    var text = $(this).val();
    if(text.length) {
        $suggestions.html('');
        $suggestions.append(
            $('<li />', { html: '<b>' + text + '</b>'}) );
        $suggestions.append( $('<li />', {html: 'Organik kaliteli <b>' + text + '</b>'}) );
        $suggestions.append( $('<li />', {html: '<b>' + text + '</b> isimli üreticiler'}) );

        $suggestions.addClass('active');
    } else {
        $suggestions.html('').removeClass('active');
    }
});