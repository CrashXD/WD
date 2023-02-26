function ready () {
    let button = document.querySelector(".first button");
    // console.log(button);
    if (button) {
        // button.onclick = function () {
        //     alert("hello 11");
        // };

        function onClickButton() {
            alert("hello 22");
        }

        // button.onclick = onClickButton;

        // button.onclick = () => alert("hello 33");

        // button.onclick = null;

        // button.addEventListener("click", function () {
            // alert("11");
        // });

        // button.addEventListener("click", onClickButton);

        // onClickButton = function () {
        //     alert('Hello');
        // };

        // button.removeEventListener("click", onClickButton);

        // button.addEventListener("click", () => alert('33'));

        // button.addEventListener("click", function (event) {
            // console.log(event.currentTarget);
            // event.currentTarget.style.backgroundColor = "red";
            // console.log(this === event.currentTarget);
            // this.style.backgroundColor = "green";
            // console.log('click button');
            // event.stopPropagation();
        // });

        // let block = document.querySelector(".first__description");
        // block.addEventListener("click", function (e) {
            // console.log(this);
            // console.log(e.currentTarget);
            // console.log(e.target);
            // console.log('click block');
            // if (this === e.target) {
                // alert('hello');
            // }
        // });
        // function onClickLink (event) {
            // event.preventDefault();
            // console.log("clicked");
        // }

        // let links = document.querySelectorAll("a");
        // for (let link of links) {
            // link.addEventListener("click", onClickLink);
            // link.onclick = function (event) {
                // event.preventDefault();
                // console.log('clicked');
                // return false;
            // }
        // }

        let input = document.querySelector(".first input");
        // input.onfocus = function (event) {
            // console.log('focus fired');
            // this.style.background = "red";
        // };
        // input.onblur = function (event) {
            // console.log('blur fired');
            // this.style.background = "";
        // };
        // input.addEventListener("change", function () {
            // console.log(this.value);
        // });
        // input.addEventListener("input", function () {
            // console.log(this.value);
        // });

        input.addEventListener("keydown", function (event) {
            // console.log(event.repeat);
            if (event.code == "Backspace" && event.repeat) {
                this.value = "";
            }
            // console.log(event.code, event.key);
            // console.log(event);
        });

        // document.addEventListener("copy", function (event) {
        //     event.preventDefault();
        //     alert('нельзя копировать');
        // });

        // document.addEventListener("cut", function (event) {
        //     event.preventDefault();
        // });
    }
}

document.addEventListener("DOMContentLoaded", ready);

// document.addEventListener("DOMContentLoaded", function () {
//     // setTimeout(function () {
//     // }, 1000);
// });