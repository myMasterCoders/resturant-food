import{u as s,at as a,au as o}from"./CEHpqohg.js";const i=s(),c=a("main",{state:()=>({cart:[]}),getters:{productsCounter(r){return r.cart.length},allProducts(r){return r.cart},allAmount(r){return r.cart.reduce((t,e)=>e.is_sale?t+e.qty*e.sale_price:t+e.qty*e.price,0)}},mutations:{},actions:{removeItems(r){this.cart=this.cart.filter(t=>t.id!==r)},addProducts(r,t){this.cart.push({...r,qty:t}),i.success("محصول به سبد خرید اضافه شد",{position:"top-right",timeout:3e3,rtl:!0}),console.log(this.cart)},deleteProduct(r){this.cart=this.cart.filter(t=>t.id!==r),i.warning("محصول از سبد خرید حذف شد",{position:"top-right",timeout:3e3,rtl:!0})},increment(r){const t=this.cart.find(e=>e.id==r);t&&t.qty<t.quantity&&t.qty++},decrement(r){const t=this.cart.find(e=>e.id==r);t&&t.qty>1&&t.qty--},clear(){this.cart=[],i.warning("کل سبد خرید حذف شد",{position:"top-right",timeout:3e3,rtl:!0})}},persist:{storage:o.localStorage,key:"shopping-cart"}});export{c as u};
