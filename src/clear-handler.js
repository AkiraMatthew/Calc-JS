import { input, resultInput } from './index.js'

export default function clearHandler(){
        input.value = null
        input.focus()
        resultInput.value = null
}