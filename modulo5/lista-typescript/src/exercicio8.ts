function wordAnagram(word: string): number {
    let counter: number = 1
    if (word.length <= 1) {
        return 1
    } else {

    // const arrayFiltrado = [...new Set(word.split(''))] 
    
        const array = word.split('')

        const arrayFiltrado = array.filter((current, index) => {
            return array.indexOf(current) === index
        })
        
        for (let i = arrayFiltrado.length; i > 1; i--) {
            counter = counter * i
        }
        return counter
    }
}
