    containerxl_elem = document.getElementsByClassName("container-xl")
    cxl_elem = document.getElementsByClassName("cxl")
    if (containerxl_elem.length > 0) {
        console.log("removing container-xl");
        elem = containerxl_elem[0]
        elem.classList.replace("container-xl","cxl");
    }
    else if (cxl_elem.length > 0) {
        console.log("adding container-xl");
        elem = cxl_elem[0]
        elem.classList.replace("cxl","container-xl");
    }