/*
dummy data for motherboards
*/
const motherboards = [{"name":"MSI Gaming Plus", "price": "159.57"}, 
                      {"name":"MSI MPG X670E CARBON", "price": "405.60"}, 
                      {"name":"MSI PRO B650M-B", "price": "96.89"}]
/*
dummy data for cpus
*/
const cpus = [{"name":"AMD Ryzen 5 7600X3D", "price": "299.00"},
              {"name":"Intel Core i9 13900KF 24", "price": "469.56"},
              {"name":"AMD Ryzen 7 5700G", "price": "155.89"}]
/*
dummy data for gpus
*/
const gpus = [{"name":" MSI GeForce RTX 4060 Ti", "price": "439.44"},
              {"name":" XFX Radeon RX 7800 XT", "price": "485.00"},
              {"name":"Gigabyte GeForce RTX 4070 Ti SUPER", "price": "825.89"}]
/*
dummy data for powersupplies
*/
const powerSupply = [{"name":"850 Watt be quiet!", "price": "122.00"},
                     {"name":"750 Watt be quiet!", "price": "138.62"},
                     {"name":"650 Watt be quiet!", "price": "58.79"}]
/*
dummy data for ram
*/
const ram = [{"name":"32GB Corsair Vengeance RGB", "price":  "132.67"}, 
             {"name":"G.Skill Flare EXPO X5", "price": "102.33"},
             {"name":"G.Skill RipJaws V", "price": "52.89"}]
/*
dummy data for datastorage
*/
const dataStorage = [{"name":"Samsung 990 PRO M.2 PCIe 4.0", "price": "155.89"},
                     {"name":"20TB Toshiba Enterprise MG10ACA20TE", "price": "310.40"}, 
                     {"name":"Patriot P300 M.2 2280 PCIe 3.0", "price": "30.77"}]
/*
dummy data for computer cases
*/
const cases = [{"name":"NZXT H7 Flow RGB", "price": "138.25"},
               {"name":"Fractal Design Case Era 2 Silver", "price": "219.89"},
               {"name":"MSI MPG Velox 100R", "price": "99.00"}]
/*
dummy data for cooling tools
*/
const coolingTools = [{"name":"be quiet! Pure Rock 2 FX Tower", "price": "42.39"},
                      {"name":"be quiet! Silent Wings Pro 4", "price": "27.88"},
                      {"name":"NZXT Kraken Elite 360", "price": "251.45"}]
/*
dummy data for sound cards
*/
const soundCards = [{"name":"Creative Sound BlasterX AE-5 Plus", "price": "117.03"},
                    {"name":"Creative Sound Blaster Audigy FX", "price": "35.24"},
                    {"name":"Creative Sound Blaster Z SE", "price": "79.89"}]
/*
dummy data for network cards
*/
const networkCards = [{"name":"Intel NIC WI-FI 6 AX201 2230", "price": "10.78"},
                      {"name":"D-Link AC1200 Dualband", "price": "24.85"},
                      {"name":"Gigabyte GC-WIFI7 7 & Bluetooth 5.3", "price": "48.78"}]
/*
dummy data for cables
*/
const cables = [{"name":"Inter-Tech SATA 6Gb/s", "price": "3.90"},
                {"name":"InLine Cat. 6a", "price": "3.90"},
                {"name":"Good Connections Displayport", "price": "8.90"}]

/*
A class that provides static accessor methods for the dummy data arrays
and adds the data dynamically to the product div
*/
export default class dummyDataProvider {

    /*
    Creates the cart and adds it to the wrapper.
    Additionally, adds an image to the cart.
    */
    static createProductCart(name, price, cssPicture){
        let wrapper = document.getElementById('product-wrapper')
        let cart = document.createElement('div')
            cart.classList.add('product-cart')
        let imagePlaceHolder = document.createElement('div')
            imagePlaceHolder.classList.add('backgroundImage')
            imagePlaceHolder.classList.add(cssPicture)
            
        let section = dummyDataProvider.#createProductSection(name, price)
    
        cart.appendChild(imagePlaceHolder)
        cart.appendChild(section)
        wrapper.appendChild(cart)
    }
    
    /*
    Creates the text section with the price and 
    some dummy information about the products.
    */
    static #createProductSection(name, price){
        let section = document.createElement('section')
    
        let h1 = document.createElement('h1')
            h1.textContent = name
    
        let h2 = document.createElement('h2')
            h2.classList.add('big-number')
    
        let priceSpan = document.createElement('span')
            priceSpan.classList.add('small-number')
    
        let priceArray = price.toString().split('.')    
    
            h2.textContent = "€" + priceArray[0]
            priceSpan.textContent = "." + priceArray[1]
            h2.appendChild(priceSpan)
    
        let description = document.createElement('p')
            description.classList.add('thin-font')
            description.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam."
    
        let addBtn = document.createElement('button')
            addBtn.classList.add('add-btn')
            addBtn.textContent = "Add to Cart"

            /*
            The add to cart button does not do anything
            it just reminds us that this is a dummy site.
            */
            addBtn.addEventListener('click', _ => {
                window.alert("Typically, this would add the item to your shopping cart!")
            })
    
        let h3 = document.createElement('h3')
            h3.textContent = "Features"
    
        let featureList = dummyDataProvider.#addDummyFeatureList()
    
        section.append(h1, h2, description, addBtn, h3, featureList)
        return section
    }
    
    /*
    Adding some placerholders for the feature list
    element in the html
    */
    static #addDummyFeatureList(){
        let ul = document.createElement('ul')
        
        let f1 = document.createElement('li')
        let f2 = document.createElement('li')
        let f3 = document.createElement('li')
            f1.classList.add('thin-font')
            f2.classList.add('thin-font')
            f3.classList.add('thin-font')
        
            f1.textContent = "Lorem ipsum dolor sit."
            f2.textContent = "Lorem ipsum dolor sit amet."
            f3.textContent = "Lorem ipsum dolor."
        
            ul.append(f1, f2, f3)   
            return ul;
    }

    /*
    All following methods are static accessor methods
    for the dummy data arrays
    */
    static getMotherboards(){
        return motherboards;
    }

    static getCpus(){
        return cpus;
    }

    static getGpus(){
        return gpus;
    }

    static getPowerSupply(){
        return powerSupply;
    }

    static getRam(){
        return ram;
    }

    static getDataStorage(){
        return dataStorage;
    }

    static getCases(){
        return cases;
    }

    static getCoolingTools(){
        return coolingTools;
    }

    static getSoundCards(){
        return soundCards;
    }

    static getNetworkCards(){
        return networkCards;
    }

    static getCables(){
        return cables;
    }
}