export class NavbarGen {

    private createItemElements = (items:NodeListOf<Element>) => {
        let out = ``
        items.forEach((item) => {
            let name = item.getAttribute("name")
            let state = item.getAttribute("state")
            let link = item.getAttribute("link")
            let cor = "page"
            if (state !="active" && state !="disabled") {state = ""; cor = ""};
            if (name && link) {
                out += `
                    <li class="nav-item">
                        <a class="nav-link ${state}" aria-current="${cor}" href="${ link }">${ name }</a>
                    </li>
                `
            } else {
                console.error("Wrong syntax in navar");
            }
        })
        return out
    }
    createnavbar = (navbar:HTMLElement) => {
        navbar.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary")
        navbar.style.zIndex = "100";
        let items = navbar.querySelectorAll("item")
        let out = ''
        out += `
            <div class="container-fluid">
                <a class="navbar-brand" href="#">${navbar.getAttribute("brand")}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        ${this.createItemElements(items)}
                    </ul>
                </div>
            </div>
        `
        navbar.innerHTML = out
    }
    
}

