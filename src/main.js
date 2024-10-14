'use strict';

/*
import DummyDataProvider for the creation of data
*/
import DummyDataProvider from "./dummyDataProvider";

/*
get important divs by id to add data to them and handle events
*/
let wrapper = document.getElementById('product-wrapper')
let selection = document.getElementById('select')

/*
Eventhandler for the selection, if changed it should display 
different products
*/
selection.addEventListener('change', _ => {
    selectionDisplay()})

/*
A function that determines which products should be displayed
according to the selected item. Before adding them to the wrapper,
the wrapper gets cleared.  
*/
function selectionDisplay(){
    let selectedSection = selection.options[selection.selectedIndex].value;
    switch (selectedSection) {
        case "1":
            wrapper.replaceChildren([])
            DummyDataProvider.getMotherboards().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'motherboards'))
            break;
        case "2":
            wrapper.replaceChildren([])
            DummyDataProvider.getCpus().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'cpus'))
            break;
        case "3":
            wrapper.replaceChildren([])
            DummyDataProvider.getGpus().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'gpus'))
            break;
        case "4":
            wrapper.replaceChildren([])
            DummyDataProvider.getPowerSupply().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'powerSupply'))
            break;
        case "5":
            wrapper.replaceChildren([])
            DummyDataProvider.getRam().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'ram'))
            break;
        case "6":
            wrapper.replaceChildren([])
            DummyDataProvider.getDataStorage().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'storage'))
            break;
        case "7":
            wrapper.replaceChildren([])
            DummyDataProvider.getCases().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'cases'))
            break;
        case "8":
            wrapper.replaceChildren([])
            DummyDataProvider.getCoolingTools().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'cooling'))
            break;
        case "9":
            wrapper.replaceChildren([])
            DummyDataProvider.getSoundCards().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'soundCard'))
            break;
        case "10":
            wrapper.replaceChildren([])
            DummyDataProvider.getNetworkCards().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'networkCard'))
            break;
        case "11":
            wrapper.replaceChildren([])
            DummyDataProvider.getCables().map(product => DummyDataProvider.createProductCart(product.name, product.price, 'cables'))
            break;
        default:
            window.alert("Something went wrong! It should be impossible to get here")
            break;
    }
}