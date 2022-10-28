import { input, allowedKeys } from './index.js'
import calculate from './calculate.js'

export function charKeyHandle(charKeyBtn){
    charKeyBtn.addEventListener(`click`, function(){
        const inputValue = charKeyBtn.dataset.value
        input.value += inputValue
    })
}

export function keyHandlers(ev){
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === `Backspace`){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === `Enter`){
        calculate()
    }
}