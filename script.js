
function verify() { 
        console.log('function ok')
        var date = new Date()
        var year = date.getFullYear()
        var fYear = document.querySelector('#year')
        var text = document.querySelector('div#text')
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        text.innerHTML = ``
        if (fYear.value.length == 0 || fYear.value > year || fYear.value < 1900){
            alert('[ERROR] - Verifique o ano de nascimento informado.')
        } else {
            var fsex = document.querySelectorAll('input[name="radsex"]')
            var yOld = year - Number(fYear.value)
            var gender = 'any'
            if (fsex[0].checked) {
                gender = 'homem'
                if (yOld >= 0 && yOld <12) {
                    gender = 'uma criança'
                    img.setAttribute('src', 'images/foto-bebe-m.png')
                } else if (yOld <= 21) {
                    gender = 'um jovem'
                    img.setAttribute('src', 'images/foto-jovem-m.png')
                } else if (yOld < 50) {
                    gender = 'um homem adulto'
                    img.setAttribute('src', 'images/foto-adulto-m.png')
                } else {
                    gender = 'um senhor'
                    img.setAttribute('src','images/foto-idoso-m.png')
                }
            } else if (fsex[1].checked) {
                gender = 'mulher'
                if (yOld >= 0 && yOld <12) {
                    gender = 'uma criança'
                    img.setAttribute('src', 'images/foto-bebe-f.png')
                } else if (yOld <= 21) {
                    gender = 'uma jovem'
                    img.setAttribute('src', 'images/foto-jovem-f.png')
                } else if (yOld < 50) {
                    gender = 'uma mulher adulta'
                    img.setAttribute('src', 'images/foto-adulto-f.png')
                } else {
                    gender = 'uma senhora'
                    img.setAttribute('src','images/foto-idoso-f.png')
                }
            } else if (fsex[2].checked) {
                gender = 'uma pessoa pessoa que pertence a comunidade LGBTQ+'
                img.setAttribute('src', 'images/lgbt.png')
            }
            text.style.textAling = 'center'
            text.innerHTML = `Foi detectado ${gender} de ${yOld} anos <br><br>`
            text.appendChild(img)
        }   
}


