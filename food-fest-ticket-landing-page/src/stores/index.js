import { createStore } from "vuex";

const store = createStore({
  state: {
    tickets: [
      {
        id: 1,
        name: "Bronze",
        price: 49,
        description: "Perfect for food enthusiasts",
        featured: false,
        benefits: [
          "Access to general admission area",
          "5 food tasting vouchers",
          "1 drink ticket",
          "Event t-shirt",
        ],
        isFavourite: false,
      },
      {
        id: 2,
        name: "Silver",
        price: 89,
        description: "Our most popular choice",
        featured: true,
        benefits: [
          "Premium seating area",
          "10 food tasting vouchers",
          "3 drink tickets",
          "Event t-shirt & cap",
          "Early entry (30 mins)",
        ],
        isFavourite: false,
      },
      {
        id: 3,
        name: "Gold",
        price: 149,
        description: "VIP experience with all perks",
        featured: false,
        benefits: [
          "VIP seating with reserved table",
          "Unlimited food tasting vouchers",
          "Unlimited drink tickets",
          "Premium merchandise pack",
          "Early entry (1 hour)",
          "Meet & greet with chefs",
        ],
        isFavourite: false,
      },
    ],
  },

  mutations: {
    TOGGLE_FAVOURITE(state, ticketId) {
      const ticket = state.tickets.find((t) => t.id === ticketId);
      if (ticket) {
        ticket.isFavourite = !ticket.isFavourite;
      }
    },
  },

  actions: {
    toggleFavourite({ commit }, ticketId) {
      commit("TOGGLE_FAVOURITE", ticketId);
    },
  },

  getters: {
    allTickets: (state) => state.tickets,
    favouriteTickets: (state) => state.tickets.filter((t) => t.isFavourite),
    favouriteCount: (state) =>
      state.tickets.filter((t) => t.isFavourite).length,
  },
});

export default store;
