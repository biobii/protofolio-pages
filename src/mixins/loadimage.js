export default {
    methods: {
        thumbnail(image) {
            return require('../assets/works/' + image)
        },
        asset(file) {
          return require('../assets/images/' + file)
        }
    }
}