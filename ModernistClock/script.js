const uma = document.querySelectorAll('.uma')
const duas = document.querySelectorAll('.duas')
const tres = document.querySelectorAll('.tres')
const quatro = document.querySelectorAll('.quatro')
const cinco = document.querySelectorAll('.cinco')
const seis = document.querySelectorAll('.seis')
const sete = document.querySelectorAll('.sete')
const oito = document.querySelectorAll('.oito')
const nove = document.querySelectorAll('.nove')
const dez = document.querySelectorAll('.dez')
const onze = document.querySelectorAll('.onze')
const doze = document.querySelectorAll('.doze')
const horas = document.querySelectorAll('.horas')
const e = document.querySelectorAll('.e')
const cincoM = document.querySelectorAll('.cincoM')
const dezM = document.querySelectorAll('.dezM')
const quinze = document.querySelectorAll('.quinze')
const vinte = document.querySelectorAll('.vinte')
const trinta = document.querySelectorAll('.trinta')
const quarenta = document.querySelectorAll('.quarenta')
const cinquenta = document.querySelectorAll('.cinquenta')
const meia = document.querySelectorAll('.meia')
const da = document.querySelectorAll('.da')
const manha = document.querySelectorAll('.manha')
const tarde = document.querySelectorAll('.tarde')
const noite = document.querySelectorAll('.noite')

function fabrica(nome, estado){
    let x = 0
    nome.forEach(()=>{
        nome[x].setAttribute(`data-estado`, estado)
        x++;
        if(x == nome.length){return x = 0}
    })
    return nome.dataset
}

function queHorasSao(){   
    relogio()
    setTimeout(()=>{
        desligaRelogio()
    },3000)
}

function desligaRelogio(){
    fabrica(uma,'off')
    fabrica(duas,'off')
    fabrica(tres,'off')
    fabrica(quatro,'off')
    fabrica(cinco,'off')
    fabrica(seis,'off')
    fabrica(sete,'off')
    fabrica(oito,'off')
    fabrica(nove,'off')
    fabrica(dez,'off')
    fabrica(onze,'off')
    fabrica(doze,'off')
    fabrica(horas,'off')
    fabrica(e,'off')
    fabrica(cincoM,'off')
    fabrica(dezM,'off')
    fabrica(quinze,'off')
    fabrica(vinte,'off')
    fabrica(meia,'off')
    fabrica(trinta,'off')
    fabrica(quarenta,'off')
    fabrica(cinquenta,'off')
    fabrica(da,'off')
    fabrica(manha,'off')
    fabrica(tarde,'off')
    fabrica(noite,'off')
}

function relogio(){
    let tempo = new Date();
    let hours = tempo.getHours();
    let minutes = (tempo.getMinutes()).toString();
    if(hours <= 11 ){fabrica(manha,'on');fabrica(da,'on')}
    if(hours >= 12 && hours <= 18){fabrica(tarde,'on');fabrica(da,'on')}
    if(hours >= 18 && hours <= 23){fabrica(noite,'on');fabrica(da,'on')}
    switch (hours) {
        case 1:
        case 13:
            fabrica(uma,'on')
            break;
        case 2:
        case 14:
            fabrica(duas,'on')
            break;
        case 3:
        case 15:
            fabrica(tres,'on')
            break;
        case 4:
        case 16:
            fabrica(quatro,'on')
            break;
        case 5:
        case 17:
            fabrica(cinco,'on')    
            break;
        case 6:
        case 18:
            fabrica(seis,'on')
            break;
        case 7:
        case 19:
            fabrica(sete,'on')
            break;
        case 8:
        case 20:
            fabrica(oito,'on')
            break;
        case 9:
        case 21:
            fabrica(nove,'on')
            break;
        case 10:
        case 22:
            fabrica(dez,'on')
            break;
        case 11:
        case 23:
            fabrica(onze,'on')
            break;
        case 12:
            fabrica(doze,'on')
            break;
    }
    switch (minutes) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
            fabrica(horas,'on')
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            fabrica(cincoM,'on')
            fabrica(e,'on')
            break;
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
            fabrica(dezM,'on')
            fabrica(e,'on')
            break;
        case '15':
        case '16':
        case '17':
        case '18':
        case '19':
            fabrica(quinze,'on')
            fabrica(e,'on')
            break;
        case '20':
        case '21':
        case '22':
        case '23':
        case '24':
            fabrica(vinte,'on')
            fabrica(e,'on')
            break;
        case '25':
        case '26':
        case '27':
        case '28':
        case '29':
            fabrica(vinte,'on')
            fabrica(cincoM,'on')
            fabrica(e,'on')
            break;
        case '30':
        case '31':
        case '32':
        case '33':
        case '34':
            fabrica(meia,'on')
            fabrica(e,'on')
            break;
        case '35':
        case '36':
        case '37':
        case '38':
        case '39':
            fabrica(trinta,'on')
            fabrica(cincoM,'on')
            fabrica(e,'on')
            break;
        case '40':
        case '41':
        case '42':
        case '43':
        case '44':
            fabrica(quarenta,'on')
            fabrica(e,'on')
            break;
        case '45':
        case '46':
        case '47':
        case '48':
        case '49':
            fabrica(quarenta,'on')
            fabrica(cincoM,'on')
            fabrica(e,'on')
            break;
        case '50':
        case '51':
        case '52':
        case '53':
        case '54':
            fabrica(cinquenta,'on')
            fabrica(e,'on')
            break;
        case '55':
        case '56':
        case '57':
        case '58':
        case '59':
            fabrica(cinquenta,'on');
            fabrica(cincoM,'on');
            fabrica(e,'on')
            break;
        default:
            break;
    }
}
