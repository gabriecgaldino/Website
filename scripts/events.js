function showAboutMe() {
    var initialDiv = document.getElementById('me')
    var aboutMe = document.createElement('div')

    initialDiv.style.display = 'none'

    /**aboutMe.innerHTML = `
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
    **/
    aboutMe.innerHTML = `
    <div id='aboutme'>

    <p> 
        To understand a little more about who I have become today, it is necessary to understand where the desire for technology came from. I remember that since I was little,
        I watched my cousins ​​writing a series of things on the computer screen and most of the time responding with curses because something hadn't worked
        Sure, I kept paying attention and soon came the shouts of glory for having achieved what they wanted. Later I discovered that they were programmers
        and that that would be the profession that I would fall in love with in the coming years. It's true that after getting to know the area I discovered what made them have those reactions.
        when compiling certain code. Still in high school while learning about Programming Logic, I needed to solve chemistry equations,
        mathematics and physics and was very lazy, so with his own software, which at the time was still based on Portuguese, he developed algorithms that solved
        problems and give me the answer, at that moment I understood that technology existed to make people's lives easier. A few years later I entered college and began the career I always dreamed of, currently I am looking to join the
        technology market, my experiences are based on projects developed (available in the projects tab) and work as an implementation analyst
        and technical support for business management systems (ERP).
    
    </p>
    </div>
`
   

    var sec = document.querySelector('section')

    sec.appendChild(aboutMe)
}