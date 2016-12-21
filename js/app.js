function changeContent(dir) {
        var person = {
            name: ["connie jones", "stefan kruse"],
            address: ["Bundaberg, Victoria", "Gorlitz, Nordrhein"],
            photo: ["img/people/person2.png", "img/people/person1.png"]
        }

        var person1 = document.getElementById("name1");
        var label1 = document.getElementById("label1");
        var person2 = document.getElementById("name2");
        var label2 = document.getElementById("label2");
        var img = document.getElementById("imgToChange1");
        var img2 = document.getElementById("imgToChange2");

        function changeName(name, target, label, labelTarget, photo, photoTarget) {
            var a = person.name.indexOf(name)
            if (a == 0) {
                target.innerHTML = person.name[1];
                labelTarget.innerHTML = person.address[1];
                photoTarget.src = person.photo[1];
            } else {
                target.innerHTML = person.name[0];
                labelTarget.innerHTML = person.address[0]
                photoTarget.src = person.photo[0];
            }
        }

        changeName(person1.textContent, person1, label1.textContent, label1, img.src, img);
        changeName(person2.textContent, person2, label2.textContent, label2, img2.src, img2);
    }

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            changeContent()
        } else if (e.keyCode == '39') {
            changeContent()
        }
    }