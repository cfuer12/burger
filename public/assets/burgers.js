document.addEventListener("DOMContentLoaded", (event) => {
    if (event) {
        console.info("DOM loaded");
    }

    const devourBtns = document.querySelectorAll("devour");

    if (devourBtns) {
        devourBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-burgerid");
            const justDevoured = {
                devoured: true,
            };

            fetch(`/api/burgers/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(justDevoured),
            }).then((response) => {
                    if (response.ok) {
                        console.log(`burger changed to: devoured`);
                        location.reload("/");
                    } else {
                        alert("something went wrong!");
                    }
                });
            });
        });
    }

    const createBurger = document.getElementById("create-form");

    if (createBurger) {
        createBurger.addEventListener("submit", (e) => {
        e.preventDefault();
        const newBurger = {
            burger_name: document.getElementById("burger").value.trim()
        };

        fetch("/api/burgers", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newBurger),
        }).then(() => {
                document.getElementById("burger").value = "";
                console.log("Created a new burger!");
                location.reload();
            });
        });
    }
});