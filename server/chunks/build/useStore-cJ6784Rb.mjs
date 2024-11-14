import { t as defineStore, v as persistedState } from './server.mjs';
import { useToast } from 'vue-toastification';

const toast = useToast();
const useCounterStore = defineStore("main", {
  state: () => {
    return {
      cart: []
    };
  },
  getters: {
    productsCounter(state) {
      return state.cart.length;
    },
    allProducts(state) {
      return state.cart;
    },
    allAmount(state) {
      return state.cart.reduce((total, products) => {
        return products.is_sale ? total + products.qty * products.sale_price : total + products.qty * products.price;
      }, 0);
    }
  },
  mutations: {},
  actions: {
    removeItems(id) {
      this.cart = this.cart.filter((items) => items.id !== id);
    },
    addProducts(product, counter) {
      this.cart.push({
        ...product,
        qty: counter
      });
      toast.success("\u0645\u062D\u0635\u0648\u0644 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u0627\u0636\u0627\u0641\u0647 \u0634\u062F", {
        position: "top-right",
        timeout: 3e3,
        rtl: true
      });
      console.log(this.cart);
    },
    deleteProduct(id) {
      this.cart = this.cart.filter((items) => items.id !== id);
      toast.warning("\u0645\u062D\u0635\u0648\u0644 \u0627\u0632 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u062D\u0630\u0641 \u0634\u062F", {
        position: "top-right",
        timeout: 3e3,
        rtl: true
      });
    },
    increment(id) {
      const product = this.cart.find((items) => items.id == id);
      if (product) {
        if (product.qty < product.quantity) {
          product.qty++;
        }
      }
    },
    decrement(id) {
      const product = this.cart.find((items) => items.id == id);
      if (product) {
        if (product.qty > 1) {
          product.qty--;
        }
      }
    },
    clear() {
      this.cart = [];
      toast.warning("\u06A9\u0644 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u062D\u0630\u0641 \u0634\u062F", {
        position: "top-right",
        timeout: 3e3,
        rtl: true
      });
    }
  },
  persist: {
    storage: persistedState.localStorage,
    key: "shopping-cart"
  }
});

export { useCounterStore as u };
//# sourceMappingURL=useStore-cJ6784Rb.mjs.map
