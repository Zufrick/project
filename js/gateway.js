var stURL = 'https://6269a026aa65b5d23e87a801.mockapi.io/students/';

async function gateway(){
    let response = await fetch(stURL);
    if (response.ok) {
        let students_list = await response.json();
        let a = 1
        k = 0;
        for (i = 0; i < 25; i++) {
            answer = students_list[k];
            var parentDOM = document.getElementById("qqw"+ a);
            let data__surname  = parentDOM.getElementsByClassName("mrg")[0];
            let data__firstname = parentDOM.getElementsByClassName("mrg")[1];
            let data__patronymic = parentDOM.getElementsByClassName("mrg")[2];
            let data__gender = parentDOM.getElementsByClassName("mrg")[3];
            let data__bdate = parentDOM.getElementsByClassName("mrg")[4];
            let data__location = parentDOM.getElementsByClassName("mrg")[5];
            let data__phnumber = parentDOM.getElementsByClassName("mrg")[6];

            data__surname.textContent = "Фамилия: " + answer["surname"];
            data__firstname.textContent = "Имя: " + answer["firstname"];
            data__patronymic.textContent = "Отчество: " + answer["patronymic"];
            data__gender.textContent = "Пол: " + answer["gender"];
            data__bdate.textContent = "Дата рождения: " + answer["bdate"];
            data__location.textContent = "Место проживания: " + answer["location"];
            data__phnumber.textContent = "Номер телефона: " + answer["phnumber"];
            k++;
            a++;
        }
        } else {
            alert("Ошибка HTTP: " + response.status);
        };
};
gateway();
