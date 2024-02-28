var initialDiv = document.getElementById('me')
var aboutMe = document.createElement('div')

function showAboutMe() {

    initialDiv.style.display = 'none'

    aboutMe.innerHTML = `
        <div id='aboutme'>

        <p> 
        Para entender um pouco mais do que me tornei hoje, é necessário entender de onde saiu o desejo pela tecnologia, me recordo que desde pequeno, 
        olhava meus primos escrevendo uma série de coisas na tela do computador e na maioria das vezes respondendo com xingamentos por algo não ter dado 
        certo, ficava prestando atenção e logo vinham os gritos de glória por terem alcançado o que almejavam. Mais tarde fui descobrir que eram programadores
        e que aquilo seria a profissão pela qual me apaixonaria nos próximos anos. É certo que após conhecer a área descobri o que os faziam ter aquelas reações
        ao compilar determinado código. Ainda no ensino médio enquanto aprendia sobre Lógica de Programação, precisava resolver as equações de química, 
        matemática e física e tinha muito preguiça, então com o próprio software que na época ainda era baseado em portugol, desenvolvia algorítimos que resolvessem 
        os problemas e me dessem a resposta, nesse momento entendi que a tecologia existia para facilitar a vida das pessoas. Alguns anos depois entrei na faculdade e comecei a carreira que sempre sonhei, atualmente estou buscando ingressar no 
        mercado de tecnologia, minhas experiências são baseadas nos projetos desenvolvidos (disponível na guia de projetos) e uma atuação como analista de implantação
        e suporte técnico a sistemas de gerenciamento empresarial (ERP). 
        
        </p>
        </div>
    `

   

    var sec = document.querySelector('section')

    sec.appendChild(aboutMe)

    aboutMe.style.display = 'block'
}

function showIndex() {
    aboutMe.style.display = 'none'
    initialDiv.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('navbar');
    var options = document.getElementById('options');
    var bars = document.querySelectorAll('.bar');
    var menu = document.getElementById('menu')

    mobileMenu.addEventListener('click', function () {
        options.style.display = options.style.display === 'none' ? 'block' : 'none';

        rotateBars();
        function rotateBars(isX) {
            var isOpen = options.style.display === 'block';
            var rotation = isOpen ? '45deg' : '0';
    
            bars[0].style.transform = 'rotate(' + rotation + ')';
            bars[1].style.opacity = isOpen ? '0' : '1';
            bars[2].style.transform = 'rotate(' + (-rotation) + ')';
        }
    });
});