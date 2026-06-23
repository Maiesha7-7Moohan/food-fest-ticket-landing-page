<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TicketCard from './components/TicketCard.vue';

const store = useStore();

const tickets = computed(() => store.getters.allTickets);
const favouriteCount = computed(() => store.getters.favouriteCount);

const toggleFavourite = (ticketId) => {
  store.dispatch('toggleFavourite', ticketId);
};
</script>

<template>
  <div class="app">
    <!-- Header Section -->
    <header class="hero-header">
      <div class="header-content">
        <h1 class="hero-title">Cape Town Food Fest</h1>
        <p class="hero-subtitle">Experience culinary excellence, celebrate community, and enjoy unforgettable moments with food, friends, and music.</p>
        <div class="header-stats">
          <span class="stat" v-if="favouriteCount > 0">
            ❤️ {{ favouriteCount }} favourite{{ favouriteCount !== 1 ? 's' : '' }}
          </span>
        </div>
      </div>
    </header>

    <!-- Tickets Section -->
    <section class="tickets-section">
      <div class="section-header">
        <h2>Choose Your Experience</h2>
        <p>Select the perfect ticket tier to match your Food Fest adventure</p>
      </div>

      <div class="tickets-grid">
        <TicketCard
          v-for="ticket in tickets"
          :key="ticket.id"
          :ticket="ticket"
          @toggle-favourite="toggleFavourite"
        />
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <p>&copy; 2024 Cape Town Food Fest. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Header */
.hero-header {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.1rem;
  margin: 0 0 1.5rem 0;
  opacity: 0.95;
  line-height: 1.6;
}

.header-stats {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.95rem;
  backdrop-filter: blur(4px);
}

/* Tickets Section */
.tickets-section {
  flex: 1;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.tickets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Footer */
.footer {
  background: #f5f5f5;
  padding: 2rem;
  text-align: center;
  color: #666;
  border-top: 1px solid #e0e0e0;
}

.footer p {
  margin: 0;
  font-size: 0.95rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-header {
    padding: 3rem 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .tickets-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .tickets-section {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-header p {
    font-size: 0.95rem;
  }

  .hero-header {
    padding: 2rem 1rem;
  }
}
</style>

  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
