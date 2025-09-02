'use strict';
function menu (content, opt ) {
     this.classType = "menu";
     this._content  = content;
     /* Remover esse objeto depois. tem q ficar no projeto, não aqui no glo. fiz isso pra fazer logo a agenda */
     this.itens_menu = opt.itens_menu;
     // nome do sistema
     this.nome_sistema  = opt.name;
     this.menu          = this.create();
     content.appendChild(this.menu);
     //login.logout();

}

menu.prototype.create = function () {
    // Criaçãod dos elementos do menu
    var div_menu        = document.createElement("div");
    var header          = document.createElement("header");
    var div_header      = document.createElement("div");
    var span_titulo     = document.createElement("span");
    var div_space       = document.createElement("div");
    var nav             = document.createElement("nav");
    var div_topbar      = document.createElement("div");
    var span_titulo_top = document.createElement("span");
    var nav_top         = document.createElement("nav");
    // Aplicando as classes
    div_menu.setAttribute("class", "mdl-layout mdl-js-layout mdl-layout--fixed-header glo_menu");
    header.setAttribute("class", "mdl-layout__header");          
    div_header.setAttribute("class", "mdl-layout__header-row");      
    span_titulo.setAttribute("class", "mdl-layout-title");     
    div_space.setAttribute("class", "mdl-layout-spacer");       
    nav.setAttribute("class", "mdl-navigation mdl-layout--large-screen-only");             
    div_topbar.setAttribute("class", "mdl-layout__drawer");      
    span_titulo_top.setAttribute("class", "mdl-layout-title"); 
    nav_top.setAttribute("class", "mdl-navigation");         
    //AppendChilds
    this._content.appendChild(div_menu);
    div_menu.appendChild(header);
    div_menu.appendChild(div_topbar);
    header.appendChild(div_header);
    div_header.appendChild(span_titulo);
    div_header.appendChild(div_space);
    div_header.appendChild(nav_top);
    div_topbar.appendChild(span_titulo_top);
    div_topbar.appendChild(nav);
    // Textos
    span_titulo.textContent     = this.nome_sistema;
    span_titulo_top.textContent = this.nome_sistema;

    // loop menu
    var a_itens = "";
    for (var i = 0; this.itens_menu != undefined && i < this.itens_menu.length; i ++) {
        a_itens = document.createElement("a");
        a_itens.setAttribute("class", "mdl-navigation__link");         
        a_itens.textContent = this.itens_menu[i].caption;
        a_itens.href = this.itens_menu[i].name;
        nav.appendChild(a_itens);
        componentHandler.upgradeElement(a_itens); 
    }

    this.btnLogoff(nav_top);

    // Aplica os efeitos do mdl
    componentHandler.upgradeElement(div_menu); 
    componentHandler.upgradeElement(header); 
    componentHandler.upgradeElement(div_topbar); 
    componentHandler.upgradeElement(div_header); 
    componentHandler.upgradeElement(span_titulo); 
    componentHandler.upgradeElement(div_space); 
    componentHandler.upgradeElement(nav); 
    componentHandler.upgradeElement(span_titulo_top); 
    componentHandler.upgradeElement(nav_top); 
    /* Itens da topbar, tenho que ver como vou montar isso. Tavez icons para atalhos globais
    // loop menu top
    for () {
        var a_itens = document.createElement("a");
        a_itens.setAttribute("class", "mdl-navigation__link");         
    }
    */
    return div_menu;
}

menu.prototype.btnLogoff = function (content) {
    // botão do logout
    var logout_button   = document.createElement("button");
    var logout_icon     = document.createElement("icon");     
    logout_button.setAttribute("class", "mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect");         
    logout_icon.setAttribute("class", "material-icons");         
    logout_icon.textContent = "power_settings_new";
    
    content.appendChild(logout_button);
    logout_button.appendChild(logout_icon);

    componentHandler.upgradeElement(logout_button); 
    componentHandler.upgradeElement(logout_icon); 

    logout_button.addEventListener("click", function(e) {
        window.newLogin.logout();
    }.bind(this));
}
