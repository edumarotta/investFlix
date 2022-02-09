

var nav = document.getElementById('navigator');
window.addEventListener("scroll", function(event) {
            if(window.scrollY>50){
                
                document.getElementById("navigator").classList.remove('nav2')
                document.getElementById("navigator").classList.add('nav')

            }
            else{
                document.getElementById("navigator").classList.add('nav2')
                document.getElementById("navigator").classList.remove('nav')
            }
        });