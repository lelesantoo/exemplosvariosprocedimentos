
    function A () {
        console.log("A - Voce chamou o procedimento A?");
    }


    function B () {
        console.log("B - procedimento B presente, chamou?"); 
    }

    function C () {
        console.log(" C - sou o procedimento C, o B quem me chamou aqui.");
    }

    function D () {
        console.log("D - Sou o procedimento D e chamo todo mundo, veja:")
        A();
        B();
    }

    A();
    B();
    D();



