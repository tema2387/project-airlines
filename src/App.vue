<script>
import ComponentWallets from './components/ComponentWallets.vue';
import ComponentTransplants from './components/ComponentTransplants.vue';
import ComponentTickets from './components/ComponentTickets.vue';

export default {
  components: {ComponentWallets, ComponentTransplants, ComponentTickets},
  data() {
    return {
      transplants: [
        {
          id: 1,
          name: 'Все',
          active: true,
        },
        {
          id: 2,
          name: 'Без пересадок',  
          stops: 0,
          active: false,
        },
        {
          id: 3,
          name: '1 пересадка',
          stops: 1,
          active: false,
        },
        {
          id: 4,
          name: '2 пересадки',
          stops: 2,
          active: false,
        },
        {
          id: 5,
          name: '3 пересадки',
          stops: 3,
          active: false,
        },
      ],
      wallets: [
        {
          id: 1,
          name: 'RUB',
          active: true,
        }, 
        {
          id: 2,
          name: 'USD',
          active: false,
        }, 
        {
          id: 3,
          name: 'EUR',
          active: false,
        }
      ],
      currentRates: [
        {
          id: 1,
          name: 'USD',
          rate: 92.4,
        },
        {
          id: 2,
          name: 'EUR',
          rate: 100.06,
        }
      ],
      tickets: [],
      activeTransplants: [],
      activeWallet: {},
    }
  },
  mounted() {
    this.getData();
  },
  computed: {
    filteredTicketsByTransplants() {
      this.activeTransplants = this.transplants.filter((el) => el.active);

      return this.tickets.filter((el) => {
        return this.activeTransplants.find((f) => {
          return f.id === 1 ? f : f.stops === el.stops
        });
      });
    },
    filteredTicketsByWalletAndTransplants() {
      this.activeWallet = this.wallets.find((el) => el.active);
      const clonedTickets = this.filteredTicketsByTransplants.map((el) => Object.assign({}, el));

      clonedTickets.forEach((el) => {
        switch(this.activeWallet.id) {
          case(2):
            el.price = Math.ceil(el.price / this.currentRates.find((el) => el.id === 1).rate) + '$';
            break;
          case(3):
            el.price = Math.ceil(el.price / this.currentRates.find((el) => el.id === 2).rate) + '€';
            break;
          default:
            el.price = el.price + '₽';
        }
      })

      return clonedTickets;
    }
  },
  methods: {
    filterWallets(id) {
      this.wallets.forEach((el) => {
        el.active = el.id === id;
      });
    },
    filterTransplants(id) {
      switch(id) {
        case 1:
          this.transplants.forEach((el) => {
            el.active = el.id === id
          });
          break;
        default:
          this.transplants.forEach((el) => {
            if (el.id === 1) {
              el.active = false;
            } else if (el.id === id) {
              el.active = !el.active
              if (!this.transplants.find((el) => el.active)) {
                this.transplants.find((el) => el.id === 1).active = true;
              }
            }
          });
      }
    },
    setOnlyCurrentTransplant(transplant) {
      this.transplants.forEach((el) => {
        el.id === transplant.id ? el.active = true : el.active = false;
      });
    },
    async getData() {
      try {
        const { data } = await this.axios.get('https://my-json-server.typicode.com/tema2387/api-for-project-airlines/tickets');
        this.tickets = data;
      } catch (error) {
        alert(`Ошибка`);
        console.log(error);
      }
    }
  },
}
</script>

<template>
  <div class="airlines flex bg-light-gray min-h-screen">
    <div class="airlines__content mb-0 sm:mt-[100px] mt-[50px] mx-auto px-[20px]">
      <h1 class="airlines__title mb-[30px] sm:text-5xl text-4xl">Купить билеты</h1>
      <div class="airlines__main flex flex-col lg:flex-row gap-[30px]">
        <div class="airlines__search flex flex-col sm:p-[25px] bg-white shadow-xl rounded-xl sm:gap-[40px] h-max p-[15px] gap-[30px]">
          <component-wallets
            @update:wallet="filterWallets" 
            :wallets="wallets" 
          />
          <component-transplants 
            @update:transplant="filterTransplants" 
            @only-current-transplant="setOnlyCurrentTransplant"
            :transplants="transplants" 
          />
        </div>
        <div class="airlines__offers">
          <component-tickets :tickets="filteredTicketsByWalletAndTransplants" />
        </div>
      </div>
    </div>
  </div>
</template>
