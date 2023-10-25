import Components from './component'

const LivUI = {
    install(app) {
        Components.forEach((component) => {
            app.use(component)
        })
    }
}

export default LivUI