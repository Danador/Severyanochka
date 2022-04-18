import Alpine from 'alpinejs'

export default new class Range {
    constructor() {
        this.handler()
    }

    range = () => ({
        minprice: 1000, 
        maxprice: 7000,
        min: 100, 
        max: 10000,
        minthumb: 0,
        maxthumb: 0,
        mintrigger() {
                
            this.minprice = Math.min(this.minprice, this.maxprice - 500);      
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
        },
        maxtrigger() {
            
            this.maxprice = Math.max(this.maxprice, this.minprice + 500); 
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);    
        }
    })
    
    handler() {
        Alpine.data('range', this.range)
        
    }
}