function carregar(){

    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 9
    msg.innerHTML=`Agora são ${hora} horas.`


    
    if (hora>= 0 && hora<12 ){
        //Bom Dia
        img.src='fotomanha.png'
        document.body.style.background="#FFDEAD"
    } else if(hora>=12 && hora <18){
        //Boa Tarde
        img.src='fototarde.png'
        document.body.style.background="#00FA9A"
    } else {
        //Boa Noite
        img.src='fotonoite.png'
        document.body.style.background="#363636"
    }

}