        let alleRetter = [];
        let filter = "hovedretter";

        document.addEventListener("DOMContentLoaded", start);

        function start() {
            console.log("start");

            document.querySelector("#burgermenu").addEventListener("click", showNav)





            let dest = document.querySelector("#liste");

            async function getJson() {
                let jsonData = await fetch("blackwaterjson.json");
                alleRetter = await jsonData.json();
                visRetter();
            }


            // let jsonData = await fetch("dyr.json");

            //Her skal du skrive hele url'en på den konverterede "spreadsheet til JSON" fil:


            //            Hvis alle retter skulle vises skal det her sættes ind i if sætningen:if(filter == "hovedretter" || filter == ret.kategori){}


            function visRetter() {
                dest.innerHTML = ""; //slet eksisterende indhold fra #liste
                alleRetter.forEach(ret => {
                    if (filter == ret.kategori) {
                        let template = `
                        <article class = "ret">
                    <h3>${ret.navn}</h3>
                        <p><b>${ret.pris},-</b></p>
                        </article>
`;
                        dest.insertAdjacentHTML("beforeend", template);
                        dest.lastElementChild.addEventListener("click", åbn);

                        function åbn() {
                            console.log("åbn");
                            document.querySelector("#indhold").innerHTML = `

                    <div class="image">
                        <img src = "img/${ret.billede}.jpg" alt = "${ret.navn}"><br></div>



                    <div class="txt">
                    <h1>${ret.navn}</h1>
                      <p>${ret.lang}</p>
                        <p><b>${ret.pris},-</b></p>
        </div>

                        `;
                            document.querySelector("#popup").style.display = "block";
                        }
                    }
                });
            }
            //Visretter slut

            document.querySelector("#luk").addEventListener("click", () => {
                document.querySelector("#popup").style.display = "none";
            });

            document.querySelectorAll(".filter").forEach(elm => {
                elm.addEventListener("click", filtrering);
            });

            function filtrering() {
                filter = this.getAttribute("data-hold");
                //                document.querySelector("h2").textContent = this.textContent; //Når der klikkes på en knap, søger eventhandler-funktionen for, at h2-overskriftens indhold sættes lig med knappens tekst
                document.querySelectorAll(".filter").forEach(aktiv => {
                    aktiv.classList.remove("valgt");
                });
                this.classList.add("valgt");

                visRetter();
            }


            getJson();
        }


        /******************

        Åbne Nav Menu
        *******************/

        //function showStart() {
        //    console.log("show start");
        //
        //
        //    document.querySelector("#burgermenu").addEventListener("click", showNav)
        //
        //}

        function showNav() {
            console.log("showNav")
            document.querySelector("#burgernav").classList.remove("hide");
            document.querySelector("#burgernav").classList.add("nav_animationin");
            document.querySelector("#tilbagepil1").addEventListener("click", goingHome)

        }


        function goingHome() {
            console.log("goingHome")
            document.querySelector("#burgernav").classList.add("hide");

        }



        //        <a href="https://github.com/${person.github}">https:github.com/${person.github}</a>
