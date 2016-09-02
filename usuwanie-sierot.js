function sieroty(){
        $("p").each(function(){ // wczytuje wszystkie paragrafy ze strony a następnie wykonuje podaną funkcje dla każdego paragrafu
            var current = $(this).html(); // wczytuje zawartości paragrafu
	 current = current.replace(/  +/g, ' '); // usuwa wielokrotne spacje z kodu 
            current = current.replace(/\s[a]\s/g,' a\&nbsp;'); // wyszukuje wszystkie samotne litery "a" w tekście i wstawia po nich twardą spację
            current = current.replace(/\s[i]\s/g,' i\&nbsp;');
            current = current.replace(/\s[o]\s/g,' o\&nbsp;');
            current = current.replace(/\s[u]\s/g,' u\&nbsp;');
            current = current.replace(/\s[w]\s/g,' w\&nbsp;');
            current = current.replace(/\s[z]\s/g,' z\&nbsp;');
            $(this).html(current); // wstawia poprawiony tekst do elementu
        }) ;
    };  
