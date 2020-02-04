//type, class_list, inner_text, link
function object(options){
    html_object = document.createElement(options.type);
    if(options.class_list !== undefined) html_object.classList = options.class_list;
    if(options.inner_text !== undefined) html_object.innerText = options.inner_text;
    if(options.href !== undefined) html_object.setAttribute("href", options.href);
    if(options.onclick !== undefined) html_object.setAttribute("onclick", options.onclick);
    if(options.src !== undefined) html_object.setAttribute("src", options.src);
    return html_object;
}

function link(options){
    options.type = "a";
    link_object = object(options);
    link_object.setAttribute("target", "_blank");
    return link_object;
}

function append(parent, child){
    document.getElementById(parent).appendChild(child);
}

function create_header_option(text) {
    li = object({type: "li"});
	link = object({type: "a", class_list: "header-link", inner_text: text.toUpperCase()});
	link.setAttribute("onclick", text + "()");
    link.setAttribute("tabindex", "0");
    li.appendChild(link);
	return li;
}

function create_footer_option(text) {
    li = object({type: "li"});
	link = object({type: "a", class_list: "footer-link", inner_text: text});
	link.setAttribute("onclick", text + "()");
    link.setAttribute("tabindex", "0");
    li.appendChild(link);
	return li;
}

function header(options){
    // Hamburger
    hamburger = object({type: "div", class_list: "hamburger", onclick: "navLinks.classList.toggle('open')"});
    hamburger.appendChild(object({type: "div", class_list: "line"}));
    hamburger.appendChild(object({type: "div", class_list: "line"}));
    hamburger.appendChild(object({type: "div", class_list: "line"}));

    // Logo
    topDiv = object({type: "div", class_list: "topDiv"});
    if(options.logo.image !== undefined) topDiv.appendChild(object({type: "img", "src": "blacklogo.png"}));
    span = object({type: "span", class_list: "collumn"});
    if(options.logo.main !== undefined){
        logo = object({type: "a", class_list: "logo", inner_text: options.logo.main});
        if(options.logo.secondary !== undefined) logo.appendChild(object({type: "span", class_list: "text-primary", inner_text: options.logo.secondary}));
        span.appendChild(logo);
    }
    topDiv.append(span);
    if(options.logo.under !== undefined) span.appendChild(object({type: "h3", inner_text: options.logo.under}));

    //Navigation Links
    navLinks = object({type: "ul", class_list: "nav-links"});
    options.links.forEach(text => {
        navLinks.appendChild(create_header_option(text));
    });

    //Append the items to content
    append("header", hamburger);
    append("header", topDiv);
    append("header", navLinks);
}

function footer(options){
    main_div = object({type: "div", class_list: "row"});
    for(title in options.titles){
        col = object({type: "div", class_list: "column"});
        col.appendChild(object({type: "h3", inner_text: title}));
        if (options.titles.hasOwnProperty(title)) {           
            options.titles[title].forEach(list_link => {
                col.appendChild(create_footer_option(list_link));
            });
        }
        main_div.appendChild(col);
    };
    append("footer", main_div);
}
