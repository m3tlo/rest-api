import M from 'materialize-css'

export default {
    bind(elem, {value}) {
        M.Tooltip.init(elem, {html:value})
    },
    unbind(elem) {
       const tooltip = M.Tooltip.getInstance(elem)
       
        if (tooltip && tooltip.destroy) {
            tooltip.destroy()
        }
    }
}