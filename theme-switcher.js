import { main, root } from './index.js'

export default function themeSwitcher(){
        if(main.dataset.theme === `dark`){
            root.style.setProperty(`--bg-color`, `#f1f5f9`)
            root.style.setProperty(`--border-color`, `#aaa`)
            root.style.setProperty(`--font-color`, `#212529`)
            root.style.setProperty(`--primary-color`, `#dbcf22`)
            root.style.setProperty(`--error-color`, `#ff0043`)
            main.dataset.theme = `light`
        } else {
            root.style.setProperty(`--bg-color`, `#212529`)
            root.style.setProperty(`--border-color`, `#666`)
            root.style.setProperty(`--font-color`, `#f1f5f9`)
            root.style.setProperty(`--primary-color`, `#dbcf22`)
            root.style.setProperty(`--error-color`, `#ff0043`)
            main.dataset.theme = `dark`
        }
}