const { useState,useRef,useEffect } = require('react');


export default function useNearScreen({distance = '100px'}={}){
    const [isNearScreen,setIsNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(function(){
        let observer;

        const onChange = (entries,observer) =>{
            const el = entries[0]

            if(el.isIntersecting){
                setIsNearScreen(true)
                observer.disconnect()
            }
        }

        //esto sirve para importar si el navegador no soporta este componente para el observer
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined' 
            ?IntersectionObserver
            :import('intersection-observer')
        ).then(()=>{

            const observer = new IntersectionObserver(onChange,{
                rootMargin: distance
            })
            observer.observe(fromRef.current)

        })

        //el observador se activara según los criterios que le pongamos, en este caso en cuanto
        //este a un margen de 100px 
        

        //cuando este componente se deje de utilizar ejecutara el siguiente metodo y asi
        //limpie este evento, evitando ejecutarlo cuando no este disponible
        return () => observer && observer.disconnect();
    })

    return {isNearScreen,fromRef};
}
