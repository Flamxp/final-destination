function switchMode() {
    const body = document.body;
    const switch_icon = document.getElementById("switch-icon");

    if (body.classList.contains("switch-mode")) {
        if (document.getElementById("change")) {
            body.classList.remove("switch-mode");
            switch_icon.classList.remove("fa-solid", "fa-moon");
            switch_icon.classList.add("fa-solid", "fa-sun");
            document.getElementById("change").style.color = "white";}
        else {
        body.classList.remove("switch-mode");
        switch_icon.classList.remove("fa-solid", "fa-moon");
        switch_icon.classList.add("fa-solid", "fa-sun");
        }
        
    } else {
        if (document.getElementById("change")) {
            body.classList.add("switch-mode");
            switch_icon.classList.remove("fa-solid", "fa-sun");
            switch_icon.classList.add("fa-solid", "fa-moon");
            document.getElementById("change").style.color = "#0f172a";
        }
        else{
        body.classList.add("switch-mode");
        switch_icon.classList.remove("fa-solid", "fa-sun");
        switch_icon.classList.add("fa-solid", "fa-moon");
        }
    }
}
